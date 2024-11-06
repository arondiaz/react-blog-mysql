import { db } from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const register = (req, res) => {
  //check if user already exist
  const q = "SELECT * FROM users WHERE email = ? OR username = ?";

  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.json(err);

    if (data.length) return res.status(409).json("User already exists!");

    //hash the password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    //create user
    const q = "INSERT INTO users(`username`,`email`,`password`) VALUES (?)";
    const values = [req.body.username, req.body.email, hash];

    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json("User has been created");
    });
  });
};

export const login = (req, res) => {
  //CHECK USER
  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [req.body.username], async (err, data) => {
    if (err) return res.json(err);
    //al ejecutar q, el resultado es un array por lo tanto si el array de largo es 0 quiere decir que no encontro al usuario
    if (data.length === 0) return res.status(404).json("User not found!");

    //Check password
    const checkPassword = await bcrypt.compare(
      req.body.password,
      data[0].password
    );
    if (!checkPassword) return res.status(400).json("Invalid password");

    const token = jwt.sign({ id: data[0].id }, process.env.TOKEN_SECRET);
    const { password, ...other } = data[0];

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(other);
  });
};

export const logout = (req, res) => {
  res.clearCookie("access_token", {
    httpOnly: true,
    sameSite: "none",
    secure:true
  });
  res.status(200).json({ message: "Logged out successfully" });
};

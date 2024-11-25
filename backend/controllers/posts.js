import { db } from "../db.js";

export const getPosts = (req, res) => {
  const q = req.query.cat
    ? "SELECT * FROM posts WHERE cat=?"
    : "SELECT * FROM posts";

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.send(err);

    return res.status(200).json(data);
  });
};

export const getPost = (req, res) => {
  // const postId = req.params.id
  //const q = "SELECT * FROM posts WHERE id=?"

  const q =
    "SELECT post.id, `username`, `title`, `description`, post.img, u.img AS userImg, `cat`,`date` FROM users u JOIN posts post ON u.id = post.uid WHERE post.id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.send(err);

    return res.status(200).json(data);
  });
};

export const addPost = (req, res) => {
  res.json("add post");
};

export const deletePost = (req, res) => {
  res.json("delete post");
};

export const updatePost = (req, res) => {
  res.json("update post");
};

import express from "express";

const app = express();

const PORT = 4040;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hola Pepe");
});
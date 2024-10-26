import express from "express";
import routesPosts from "./routes/posts.js";
import routesAuth from "./routes/auth.js";
import routesUser from "./routes/user.js";

const app = express();

const PORT = 4040;

app.use(express.json());
app.use("/api/post", routesPosts);
app.use("/api/auth", routesAuth);
app.use("/api/user", routesUser);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hola Pepe");
});

import express from "express";
import {
  getPost,
  getPosts,
  addPost,
  deletePost,
  updatePost,
} from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPost);
router.get("/:id", getPosts);
router.post("/", addPost);
router.delete("/:id", deletePost);
router.update("/:id", updatePost);

export default router;

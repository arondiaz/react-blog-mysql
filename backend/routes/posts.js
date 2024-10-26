import express from "express";
import {showPepe, showPost} from "../controllers/posts.js"

const router = express.Router();

router.get("/test", showPost);
router.get("/pepe", showPepe);

export default router;

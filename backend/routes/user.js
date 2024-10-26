import express from "express";
import displayProfile from "../controllers/user.js";

const router = express.Router();

router.get("/profile", displayProfile);

export default router;

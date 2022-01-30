import { Router } from "express";
import { createPost, getPosts } from "../controllers/post.controller";

const router = Router();

router.route("/").get(getPosts).post(createPost);

export default router;

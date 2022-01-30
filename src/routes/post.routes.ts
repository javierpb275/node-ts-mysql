import { Router } from "express";
import {
  createPost,
  getPosts,
  getPost,
  deletePost,
  updatePost,
} from "../controllers/post.controller";

const router = Router();

router.route("/").get(getPosts).post(createPost);

router.route("/:id").get(getPost).delete(deletePost).put(updatePost);

export default router;

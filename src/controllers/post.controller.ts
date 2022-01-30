import { Request, Response } from "express";
import { connect } from "../database";
import { Post } from "../interface/Post";

export const getPosts = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const conn = await connect();
  const posts = await conn.query("SELECT * FROM posts");
  return res.json(posts[0]);
};

export const createPost = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newPost: Post = req.body;
  const conn = await connect();
  await conn.query(`INSERT INTO posts SET ?`, [newPost]);
  return res.json({ message: "Post created" });
};

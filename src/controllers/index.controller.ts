import { Request, Response } from "express";

export const indexWelcome = (req: Request, res: Response): Response => {
  return res.json("Welcome to my API");
};

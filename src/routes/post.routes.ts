import { Router } from "express";

const router = Router();

router.route("/").get((req, res) => res.json("POSTS"));

export default router;

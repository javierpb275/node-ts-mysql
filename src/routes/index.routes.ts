import { Router } from "express";

const router = Router();

router.route("/").get((req, res) => res.json("welcome to my api"));

export default router;

import express, { Router, Request, Response } from "express";
import { registerUser } from "../../../controller/globals/authController";

const router = express.Router();

router.post("/register", (req: Request, res: Response) => {
	registerUser(req, res);
});

export const authRoutes = router;
// Register 
// Login 
// Logout

import { Request, Response } from "express";
import User from "../../database/models/user.model";

export const registerUser = async (req: Request, res: Response) => {

    const { username, password,email } = req.body;
    if(!username || !password || !email) {
        return res.status(400).json({ message: "Username, password and email are required." });
    }
    await User.create({
        username,
        password,
        email,
    })
    return res.status(201).json({ message: "User registered successfully." });
}

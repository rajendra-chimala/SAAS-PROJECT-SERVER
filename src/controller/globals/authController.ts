// Register 
// Login 
// Logout

import { Request, Response } from "express";
import User from "../../database/models/user.model";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken"

export const registerUser = async (req: Request, res: Response) => {

    const { username, password,email } = req.body;
    if(!username || !password || !email) {
        return res.status(400).json({ message: "Username, password and email are required." });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
        return res.status(400).json({ message: "User already exists." });
    }
    await User.create({
        username,
        password: hashedPassword,
        email,
    })
    return res.status(201).json({ message: "User registered successfully." });
}

export const loginUser = async(req:Request, res:Response)=>{
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required." });
    }
    const user = await User.findOne({ where: { email } });
    if (!user) {
        return res.status(401).json({ message: "Invalid email or password." });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid email or password." });
    }
    // Here you would typically generate a JWT token and send it back to the client
    const token = JWT.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET
        || "default_secret", {
        expiresIn: "1h"
    });
    return res.status(200).json({ message: "Login successful.", token, user: { id: user.id, username: user.username, email: user.email } });

}

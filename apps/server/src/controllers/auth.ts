import { Request, Response } from "express";

export async function handleSignupRoute(req: Request, res: Response) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }
  try {
    const user = await new Promise((resolve, reject) => {
    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).json({ error: "Email already exists" });
  }
}

import { Router, Request, Response } from "express";

export const contactRouter = Router();

contactRouter.post("/", (req: Request, res: Response) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  console.log(`[Contact Form Submission] Name: ${name}, Email: ${email}, Subject: ${subject || "N/A"}`);

  return res.status(200).json({
    success: true,
    message: "Thank you for reaching out! Your message has been received.",
  });
});

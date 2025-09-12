import nodemailer from "nodemailer"
import { Quote } from "./types.js";
import { getEnv } from "./helper.js";

interface Email {
  email: string
}



// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
    service: 'gmail',
    // port: 587,
    auth: {
        user: getEnv("GMAIL_ACCOUNT"),
        pass: getEnv("GMAIL_PASSWORD")
    }
});

// Wrap in an async IIFE so we can use await.
export const sendMail = async (email: Email, quote: Quote) => {
  console.log("sending mail");

  const htmlContent = `
    <div style="
      font-family: Arial, sans-serif;
      background-color: #f9f9f9;
      padding: 30px;
      border-radius: 10px;
      text-align: center;
      max-width: 600px;
      margin: auto;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    ">
      <h2 style="color: #333;">✨ Daily Quote ✨</h2>
      <p style="
        font-size: 20px;
        color: #555;
        margin: 20px 0;
      ">“${quote.text}”</p>
      <p style="
        font-size: 16px;
        color: #888;
        margin-top: 10px;
      ">— ${quote.author}</p>
      <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;" />
      <p style="font-size: 12px; color: #aaa;">
        You are receiving this email because you subscribed to Daily Quote.
      </p>
    </div>
  `;

  const info = await transporter.sendMail({
    from: '"Daily Quote" <dracroyle@gmail.com>',
    to: email.email,
    subject: "Your Daily Dose of Inspiration 🌟",
    text: `${quote.text} — ${quote.author}`, // fallback plain text
    html: htmlContent,
  });

  console.log("Message sent:", info.messageId);
};



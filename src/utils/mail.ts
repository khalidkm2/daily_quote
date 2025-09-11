import nodemailer from "nodemailer"
import { Quote } from "./types.js";

interface Email {
  email: string
}



// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'octavia.ruecker@ethereal.email',
        pass: 'dncaUv3zjmkwhh7e6C'
    }
});

// Wrap in an async IIFE so we can use await.
export const sendMail = async (email:Email,quote:Quote) => {
  const info = await transporter.sendMail({
    from: '"Maddison Foo Koch" <maddison53@ethereal.email>',
    to: "bar@example.com, baz@example.com",
    subject: "Quote of the day",
    text: quote.author, // plain‑text body
    html: `<b>${quote.text}</b>`, // HTML body
  });

  console.log("Message sent:", info.messageId);
}


import nodemailer from "nodemailer"

interface Email {
  email: string
}

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'mazie.lindgren89@ethereal.email',
        pass: 'TW8fgdAxBdzVv8SDfg'
    }
});

// Wrap in an async IIFE so we can use await.
export const sendMail = async (email:Email) => {
  const info = await transporter.sendMail({
    from: '"Maddison Foo Koch" <maddison53@ethereal.email>',
    to: "bar@example.com, baz@example.com",
    subject: "Hello ✔",
    text: "Hello world?", // plain‑text body
    html: "<b>Hello world?</b>", // HTML body
  });

  console.log("Message sent:", info.messageId);
}


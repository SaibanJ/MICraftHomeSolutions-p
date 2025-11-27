
import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const message = formData.get("message") as string;
  const files = formData.getAll("files") as File[];

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
  });

  const mailOptionsToAdmin = {
    from: email,
    to: process.env.EMAIL_TO,
    subject: `New message from ${name}`,
    html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Message: ${message}</p>
    `,
    attachments: await Promise.all(files.map(async (file) => {
        const content = await file.arrayBuffer();
        return {
            filename: file.name,
            content: Buffer.from(content),
        }
    }))
  };

  const mailOptionsToUser = {
    from: process.env.EMAIL_TO,
    to: email,
    subject: "Thank you for contacting us!",
    html: `
      <p>Hi ${name},</p>
      <p>Thank you for contacting us. We have received your message and will get back to you shortly.</p>
      <p>Best regards,</p>
      <p>MICraft Home Solutions LLC</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptionsToAdmin);
    await transporter.sendMail(mailOptionsToUser);
    return NextResponse.json({ success: true, message: "Form submitted successfully." });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: "Something went wrong. Please try again." }, { status: 500 });
  }
}

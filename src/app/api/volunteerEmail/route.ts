import { NextResponse } from 'next/server';
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, phone, organization, message } = await req.json();

  // Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your preferred email service
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASS, // Your email password or app-specific password
    },
  });

  try {
    // Send email
    await transporter.sendMail({
      from: email,
      to: process.env.RECIPIENT_EMAIL, // The email address where you want to receive the enquiry
      subject: `New Volunteer Enquiry from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Organization: ${organization || 'N/A'}
        Message: ${message}
      `,
    });

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email.' }, { status: 500 });
  }
}

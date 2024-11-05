import { NextResponse } from 'next/server';
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, phone, message, quantity, courseName, courseCode, coursePrice } = await req.json();

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
      subject: `New Enquiry from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
        Course Code: #${courseCode }
        Course Name: ${courseName }
        Course Price: ${coursePrice } AUD
        Number of Attendees: ${quantity }
        Total: ${coursePrice * quantity } AUD
        `,
      });

    // Send confirmation email to the user
    await transporter.sendMail({
      from: process.env.RECIPIENT_EMAIL,
      to: email, // The user's email
      subject: `Email Confirmation for Booking, ${name}!`,
      text: `
        Hello ${name},

        Thank you for booking the course!
        We have received your booking enquiry with the following details:

        Phone: ${phone}
        Course: ${courseName }
        Price: ${coursePrice } AUD
        Number of Attendees: ${quantity}

        Total: ${coursePrice * quantity } AUD

        We will get back to you shortly.

        Best regards,
        Torchlight Foundation
      `,
    });

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email.' }, { status: 500 });
  }
}

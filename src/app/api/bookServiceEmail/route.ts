import { NextResponse } from 'next/server';
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, phone, message, serviceName, servicePrice } = await req.json();

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
      from: `Enquiry - Torchlight Foundation < ${process.env.RECIPIENT_EMAIL} >`,
      to: process.env.RECIPIENT_EMAIL, // The email address where you want to receive the enquiry
      subject: `New Enquiry from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Service: ${serviceName }
        Total: ${servicePrice } AUD

        Message: ${message}
        `,
      });

    // Send confirmation email to the user
    await transporter.sendMail({
      from: `Enquiry - Torchlight Foundation < ${process.env.RECIPIENT_EMAIL} >`,
      to: email, // The user's email
      subject: `Email Confirmation for Booking, ${name}!`,
      text: `
        Hello ${name},

        Thank you for booking the ${serviceName.toLowerCase()} session!
        We have received your booking enquiry with the following details:

        Phone: ${phone }
        Service: ${serviceName }
        Total: ${servicePrice } AUD
        
        Message: ${message}

        We will get back to you shortly.
        For any questions, please reach out to us at hq@torchlight.org.au. We look forward to assisting you!


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

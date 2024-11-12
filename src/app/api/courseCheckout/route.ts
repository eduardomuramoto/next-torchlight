import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2024-09-30.acacia',
});


export async function POST(req: Request) {
  try {
    const { name, email, phone, message, quantity, courseName, courseCode, coursePrice, groupClasses } = await req.json();
    if (!coursePrice || coursePrice <= 0 || quantity <= 0) {
      return NextResponse.json({ error: 'Invalid booking details' }, { status: 400 });
    }

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'aud',
            product_data: {
              name: courseName,
              description: `Course Code: ${courseCode} - ${groupClasses ? 'Group Class' : 'Individual Booking'}`,
            },
            unit_amount: coursePrice * 100, // Convert to cents
          },
          quantity,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_DOMAIN}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_DOMAIN}/cancel`,
      metadata: {
        name: name || "N/A",              // Fallback values for metadata
        email: email || "N/A",
        phone: phone || "N/A",
        message: message || "N/A",
        courseCode: courseCode || "N/A",
        courseName: courseName || "N/A",
        coursePrice: `${coursePrice} AUD`,
        quantity: `${quantity} Guests`,
        total: `${coursePrice * quantity} AUD`,
        groupClasses: groupClasses ? 'true' : 'false',
      },
    });

    // Return the session ID for Stripe Checkout
    console.log("Stripe Session Object:", session);
    return NextResponse.json({ sessionId: session.id }, { status: 200 });
  } catch (error) {
    console.error('Error creating Stripe session:', error);
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 });
  }
}

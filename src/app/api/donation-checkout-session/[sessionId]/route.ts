import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2024-09-30.acacia',
});

export async function GET(req: Request, { params }: { params: { sessionId: string } }) {
  try {
    const { sessionId } = params;

    // Retrieve the session details from Stripe using the session_id
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    // Return the session data as a JSON response
    return NextResponse.json(session, { status: 200 });
  } catch (error) {
    console.error("Error fetching session from Stripe:", error);
    return NextResponse.json({ error: 'Failed to fetch session details' }, { status: 500 });
  }
}



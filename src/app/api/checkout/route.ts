import { NextResponse } from 'next/server';

interface Product {
  name: string;
  price: number;
  quantity: number;
}

interface CheckoutSessionResponse {
  sessionId: string;
}

export async function POST(req: Request) {
  const { products }: { products: Product[] } = await req.json(); // Get the JSON body

  try {
    // Call Strapi backend to create a checkout session
    const response = await fetch(`${process.env.CMS_URL}/checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ products }),
    });

    const { id }: { id: string } = await response.json(); // Expect session ID from Strapi

    const data: CheckoutSessionResponse = { sessionId: id }; // Define the response type
    return NextResponse.json(data); // Use NextResponse to return JSON
  } catch (error) {
    return NextResponse.json({ error: 'Error creating checkout session' }, { status: 500 });
  }
}

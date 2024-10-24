
import { NextApiRequest, NextApiResponse } from 'next';

interface Product {
  name: string;
  price: number;
  quantity: number;
}

interface CheckoutSessionResponse {
  sessionId: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { products }: { products: Product[] } = req.body; // Type the request body

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
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Error creating checkout session' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

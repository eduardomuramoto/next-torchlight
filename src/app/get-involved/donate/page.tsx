"use client"
import { useState } from 'react';
import { loadStripe, Stripe } from '@stripe/stripe-js';

const stripePromise: Promise<Stripe | null> = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

export default function DonationPage() {
  const [amount, setAmount] = useState<number>(500); // Default donation amount in cents
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Call the API route to create a Stripe checkout session
    const response = await fetch('/api/donation-checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }),
    });

    const { sessionId } = await response.json();

    const stripe = await stripePromise;
    if (stripe) {
      const { error } = await stripe.redirectToCheckout({
        sessionId,
      });
      if (error) {
        console.error(error);
      }
    }

    setLoading(false);
  };

  return (
    <div className="">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <div className="relative w-full p-10 md:px-20 bg-white">
          <h1>Donate</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="amount">
              Donation Amount (in AUD):
              <input
                type="number"
                id="amount"
                min="1"
                value={amount / 100} // Convert to dollars for user input
                onChange={(e) => setAmount(Number(e.target.value) * 100)} // Convert to cents
              />
            </label>
            <button type="submit" disabled={loading}>
              {loading ? 'Processing...' : 'Donate'}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

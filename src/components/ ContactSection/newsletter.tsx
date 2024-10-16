"use client"
import React, { useState } from 'react';

export default function NewsletterComponent() {
  const [email, setEmail] = useState<string>('');
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [statusType, setStatusType] = useState<'success' | 'error' | ''>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatusMessage(''); // Reset message before submission

    // Basic email validation
    if (!email) {
      setStatusMessage('Please enter a valid email address.');
      setStatusType('error');
      return;
    }

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe to the newsletter');
      }

      setStatusMessage('Thank you for subscribing to our newsletter!');
      setStatusType('success');
      setEmail(''); // Clear the email input field after successful subscription
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      setStatusMessage('Error subscribing to newsletter. Please try again later.');
      setStatusType('error');
    }
  };

  return (
    <div className="flex flex-col justify-center dark:border-white/10 lg:justify-between">
      <h6 className="text-2xl mb-4 flex justify-start font-teko font-semibold uppercase">
        Join Our Newsletter
      </h6>
      <div className="flex flex-col justify-center">
        <p>Subscribe to be the first to know when Justice Radio launches and get more support guides.</p>
        <form onSubmit={handleSubmit} className="mt-2">
          <div className="flex items-center mt-1">
            <input
              type="email"
              id="input-9"
              className="w-full h-10 px-3 text-sm text-gray-700 border border-r-0 rounded-r-none focus:outline-none rounded shadow-sm"
              placeholder="Enter Email"
              value={email}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="h-10 px-4 text-sm bg-orange-500 border border-l-0 border-orange-500 rounded-r shadow-sm text-orange-50 hover:text-white hover:bg-orange-400 hover:border-orange-400 focus:outline-none"
            >
              Subscribe
            </button>
          </div>
        </form>
        {statusMessage && (
          <div className={`mt-2 text-lg ${statusType === 'success' ? 'text-green-600' : 'text-red-600'}`}>
            {statusMessage}
          </div>
        )}
      </div>
    </div>
  );
}

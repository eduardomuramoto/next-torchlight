import { NextResponse } from "next/server";

// Required environment variables:
// MAILCHIMP_API_KEY: Your Mailchimp API key
// MAILCHIMP_SERVER_PREFIX: The server prefix from your Mailchimp account (e.g., "us6", "us19")
// MAILCHIMP_AUDIENCE_ID: Your Mailchimp audience (list) ID

const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX;
const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

export async function POST(request: Request) {
  if (!MAILCHIMP_API_KEY || !MAILCHIMP_SERVER_PREFIX || !MAILCHIMP_AUDIENCE_ID) {
    return NextResponse.json({ error: "Missing Mailchimp configuration" }, { status: 500 });
  }

  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Mailchimp API URL for adding a subscriber to the audience list
    const url = `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `apikey ${MAILCHIMP_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed", // Set status as "subscribed" or "pending" based on your preference
      }),
    });

    if (!response.ok) {
      const errorDetails = await response.json();
      return NextResponse.json({ error: "Failed to subscribe", details: errorDetails }, { status: response.status });
    }

    return NextResponse.json({ message: "Successfully subscribed!" }, { status: 200 });
  } catch (error) {
    console.error("Error subscribing to Mailchimp:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

import { NextResponse } from "next/server";

export async function POST() {
  // Future Stripe integration point.
  // Install `stripe`, store STRIPE_SECRET_KEY in the environment,
  // validate the booking against live availability, then create a Checkout Session.
  return NextResponse.json(
    {
      enabled: false,
      message: "Direct payments are scaffolded but not enabled yet."
    },
    { status: 501 }
  );
}

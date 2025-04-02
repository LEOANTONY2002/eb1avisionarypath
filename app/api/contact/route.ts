import { NextResponse } from "next/server";
import connectDB from "../../lib/mongodb";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, visaType, message } = body;

    // Here you would typically:
    // 1. Validate the input
    // 2. Send an email notification
    // 3. Store the contact form submission in your database
    // 4. Send a confirmation email to the user

    // For now, we'll just return a success response
    return NextResponse.json(
      { message: "Thank you for your message. We will get back to you soon." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      {
        message:
          "There was an error processing your request. Please try again later.",
      },
      { status: 500 }
    );
  }
}

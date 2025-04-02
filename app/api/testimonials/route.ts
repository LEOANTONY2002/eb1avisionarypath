import { NextResponse } from "next/server";
import connectDB from "../../lib/mongodb";
import Testimonial from "../../models/Testimonial";

export async function GET() {
  try {
    // Set cache headers
    const headers = new Headers({
      "Cache-Control": "s-maxage=43200, stale-while-revalidate=21600",
    });

    await connectDB();
    const testimonials = await Testimonial.find({}).sort({ createdAt: -1 });

    return NextResponse.json(testimonials, { headers });
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return NextResponse.json(
      { message: "Error fetching testimonials" },
      { status: 500 }
    );
  }
}

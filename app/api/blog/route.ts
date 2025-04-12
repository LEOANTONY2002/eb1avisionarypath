import { NextResponse } from "next/server";
import connectDB from "../../lib/mongodb";
import Blog from "../../models/Blog";
// import seedDatabase from "@/scripts/seed";

export async function GET() {
  try {
    // Set cache headers
    const headers = new Headers({
      "Cache-Control": "s-maxage=43200, stale-while-revalidate=21600",
    });
    // await seedDatabase();
    await connectDB();
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    return NextResponse.json(blogs, { headers });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch blog posts" },
      { status: 500 }
    );
  }
}

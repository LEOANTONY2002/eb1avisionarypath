import { NextResponse } from "next/server";
import connectDB from "../../lib/mongodb";
import Blog from "../../models/Blog";
// import seedDatabase from "@/scripts/seed";

export async function GET() {
  try {
    // await seedDatabase();
    await connectDB();
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    return NextResponse.json(blogs);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch blog posts" },
      { status: 500 }
    );
  }
}

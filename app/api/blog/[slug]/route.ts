import { NextResponse } from "next/server";
import connectDB from "../../../lib/mongodb";
import Blog from "../../../models/Blog";

type tParams = Promise<{ slug: string }>;

export async function GET(request: Request, { params }: { params: tParams }) {
  try {
    // Set cache headers
    const headers = new Headers({
      "Cache-Control": "s-maxage=43200, stale-while-revalidate=21600",
    });

    await connectDB();
    const { slug } = await params;
    const blog = await Blog.findOne({ slug });

    if (!blog) {
      return NextResponse.json(
        { error: "Blog post not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(blog, { headers });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch blog post" },
      { status: 500 }
    );
  }
}

// import NextBundleAnalyzer from "@next/bundle-analyzer";

// const withBundleAnalyzer = NextBundleAnalyzer({
//   enabled: process.env.ANALYZE === "true",
// });

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)", // Cache all files
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // Cache for 1 year
          },
        ],
      },
    ];
  },
};

// export default withBundleAnalyzer(nextConfig);
export default nextConfig;

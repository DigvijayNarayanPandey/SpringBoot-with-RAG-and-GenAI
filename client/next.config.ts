import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/:path*`,
      },
      {
        source: "/oauth2/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/oauth2/:path*`,
      },
      {
        source: "/login/oauth2/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/login/oauth2/:path*`,
      },
    ];
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  devIndicators: false,
  // lib/source.ts reads these at render time to show and copy the real files.
  outputFileTracingIncludes: {
    "/**": ["./21st-prompts/**", "./components/**", "./lib/**", "./app/globals.css"],
  },
  experimental: {
    // Two root layouts (RTL site, LTR previews) need a global 404.
    globalNotFound: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.21st.dev", pathname: "/**" },
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

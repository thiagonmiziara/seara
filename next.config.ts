import type { NextConfig } from "next";
import withPWA from "next-pwa";

const withPwa = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
});

const nextConfig: any = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "assets.ctfassets.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default withPwa(nextConfig);

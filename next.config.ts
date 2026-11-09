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
  // eslint removido: não é mais suportado no next.config.ts
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
  turbopack: {},
  async redirects() {
    return [
      { source: '/devocional', destination: '/', permanent: true },
      { source: '/noticias', destination: '/', permanent: true },
      { source: '/noticias/:path*', destination: '/', permanent: true },
      { source: '/estudo-nos-lares', destination: '/', permanent: true },
      { source: '/estudo-nos-lares/:path*', destination: '/', permanent: true },
    ];
  },
};

export default withPwa(nextConfig);

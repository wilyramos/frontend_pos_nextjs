import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      // {
      //   protocol: "http",
      //   hostname: process.env.DOMAIN!
      // },
      {
        protocol: "https",
        hostname: "backend-pos-nestjs.onrender.com"
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com"
      },
      
    ]
  }
};

export default nextConfig;

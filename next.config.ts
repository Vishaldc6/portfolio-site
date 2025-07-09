import type { NextConfig } from "next";

//https://portfolio-site-gamma-steel.vercel.app/

const nextConfig: NextConfig = {
  /* config options here */  
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'portfolio-site-gamma-steel.vercel.app',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

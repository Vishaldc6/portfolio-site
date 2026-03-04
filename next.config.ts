import type { NextConfig } from "next";

//https://vishal-chaudhary-portfolio-site.vercel.app/

const nextConfig: NextConfig = {
  /* config options here */  
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vishal-chaudhary-portfolio-site.vercel.app',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'assets.dummyjson.com',
        port: '',
      },
    ],  
  }
};

export default nextConfig;

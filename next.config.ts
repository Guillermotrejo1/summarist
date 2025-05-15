import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['firebasestorage.googleapis.com'], // Allow images from this domain
    },
};

export default nextConfig
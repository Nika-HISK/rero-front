/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['dnck-back.s3.eu-north-1.amazonaws.com'],
    },
};

export default nextConfig;

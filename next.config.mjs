/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['reroapp-bucket.s3.amazonaws.com'],
  },
};

export default nextConfig;

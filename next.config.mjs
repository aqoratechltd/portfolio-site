/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  images: {
    domains: ['images.unsplash.com', 'avatars.githubusercontent.com'],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'raw.githubusercontent.com', port: '' }],
  },
  experimental: {
    scrollRestoration: true,
  },
}

export default nextConfig

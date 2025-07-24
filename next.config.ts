import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true
  },
  allowedDevOrigins: ['192.168.1.11']
}

export default nextConfig

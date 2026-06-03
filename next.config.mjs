import type { NextConfig } from 'next'

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline' https://api.fontshare.com; img-src 'self' blob: data: https://static-cdn.jtvnw.net https://yt3.ggpht.com https://images.kick.com https://placehold.co; font-src 'self' https://api.fontshare.com; connect-src 'self' wss: https://api.openai.com https://api.twitch.tv;"
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload'
  }
]

const nextConfig: NextConfig = {
  experimental: {
    ppr: true,
  },
  images: {
    domains: [
      'static-cdn.jtvnw.net',
      'yt3.ggpht.com',
      'images.kick.com',
      'platform-lookaside.fbsbx.com',
      'sf-placeholders.co'
    ],
    formats: ['image/avif', 'image/webp']
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders
      }
    ]
  },
  webpack: (config, { isServer }) => {
    if (process.env.ANALYZE === 'true' && !isServer) {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: '../analyze/client.html'
      }))
    }
    return config
  }
}

export default nextConfig

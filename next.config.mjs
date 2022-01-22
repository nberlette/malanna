import withPreact from 'next-plugin-preact'
import WindiCSSWebpackPlugin from 'windicss-webpack-plugin'

/** @type {import('next').NextConfig} */
export default withPreact({
  experimental: {
    optimizeCss: true,
    optimizeImages: true,
  },

  images: {
    domains: [
      'icns.ml',
      'icns.cf',
      'icns.vercel.app',
      'icns.imgix.net',
      'iconic.s3.amazonaws.com',
      'images.prismic.io',
      'malanna.vercel.app',
      'malanna.page',
      'malanna.prismic.io',
      'static.malanna.page',
      'raw.githubusercontent.com',
      'user-images.githubusercontent.com'
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [32, 48, 64, 96, 128, 256, 384, 480],
    minimumCacheTTL: 600
  },

  rewrites: async () => {
    return [
      {
        source: '/photo-:slug*',
        destination: '/photos/:slug',
      },
      {
        source: '/exit-preview/?:path*',
        destination: 'api/exit-preview/:path'
      },
      {
        source: '/preview/?:path*',
        destination: 'api/preview/:path',
      },
      {
        source: '/github/:path*',
        destination: 'https://github.com/nberlette/malanna/:path'
      }
    ]
  },

  redirects: async () => {
    return [
      {
        source: '/repo',
        destination: 'https://github.com/nberlette/malanna#readme',
        permanent: true
      },
    ]
  },

  webpack: (config) => {
    config.plugins.push(new WindiCSSWebpackPlugin())
    return config
  }

});

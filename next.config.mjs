import withPreact from 'next-plugin-preact';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js 12 Rust Compiler (SWC): uncomment this if needed to disable
  // swcMinify: true,
  
  // https://nextjs.org/docs/basic-features/image-optimization#domains
  images: {
    domains: [
      'cdn.jsdelivr.net',
      'unpkg.com',
      'icns.vercel.app',
      'icns.imgix.net',
      'raw.githubusercontent.com',
      'user-images.githubusercontent.com'
    ],
  },

  // https://nextjs.org/docs/api-reference/next.config.js/rewrites
  rewrites: async () => {
    return [
      {
        source: '/photo-:slug/?',
	destination: '/photos/:slug/',
      },
      {
	source: '/cms/:path*',
	destination: 'https://malanna.prismic.io/:path',
      }
    ]
  },

  // https://nextjs.org/docs/api-reference/next.config.js/redirects
  redirects: async () => {
    return [
      {
        source: '/repo/?',
	destination: 'https://github.com/nberlette/malanna',
	permanent: true
      },
    ]
  },
};

export default withPreact(nextConfig);


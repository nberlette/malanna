import withPreact from 'next-plugin-preact'

/** @type {import('next').NextConfig} */
const nextConfig = {

  // v12 Rust Compiler (SWC) - uncomment to disable
  // swcMinify: false,
  
  // https://nextjs.org/docs/basic-features/image-optimization
  images: {

    domains: [
      'icns.vercel.app',
      'icns.imgix.net',
      'images.prismic.io',
      'malanna.page',
      'static.malanna.page',
      'raw.githubusercontent.com',
      'user-images.githubusercontent.com'
    ],
    
    // enable AVIF + WEBP
    formats: ['image/avif', 'image/webp'],
    
    // breakpoints (default from nextjs.org)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    
    // image sizes to generate:
    // largest value MUST be smaller than the *smallest* deviceSize
    imageSizes: [/*16, */32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 120
  },

  /**
   * rewrites • must be an asynchronous function that returns either:
   * - an array of Rewrite type Objects:
   *   @returns [
   *       { source: string, destination: string, has?: RewriteHas[] },
   *       ...
   *     ]
   * - or an object with 3 (optional) arrays as properties:
   *   @returns {
   *       beforeFiles: [] -- applied *before* file system routing
   *       afterFiles: []  -- applied *after*  file system routing
   *       fallback: []    -- fallback rewrites for error resolution
   *     }
   * 
   * @see https://nextjs.org/docs/api-reference/next.config.js/rewrites
   */
  rewrites: async () => {
    return [
      // standard page rewrite, passing :slug parameter to the destination
      {
        source: '/photo-:slug',
        destination: '/photos/:slug',
      },
      // preview feature
      {
        source: '/preview/:path*',
        destination: 'https://malanna.page/api/preview/:path',
      },
      // using Next Rewrites to mask our github repository
      {
        source: '/github/:path*',
        destination: 'https://github.com/nberlette/malanna/:path'
      }
    ]
  },

  // https://nextjs.org/docs/api-reference/next.config.js/redirects
  redirects: async () => {
    return [
      // permanent redirect from /repo/ to our GitHub Repository Readme
      {
        source: '/repo',
        destination: 'https://github.com/nberlette/malanna#readme',
        permanent: true
      },
    ]
  },

  // insert additional next configurations here
};

export default withPreact(nextConfig);


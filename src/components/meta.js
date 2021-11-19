import Head from 'next/head'
import { 
  THEME_COLOR,
  BG_COLOR, 
  SITE_NAME,
  SITE_URL,
  SITE_TITLE,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_AUTHOR,
  SITE_TWITTER,
  PRISMIC_URL,
  GITHUB_URL,
  MANIFEST_URL,
  FAVICON_SVG as FAVICON_URL,
  OG_IMAGE_URL_DARK as OG_IMAGE_URL
} from '../lib/constants';

export default function Meta() {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href={MANIFEST_URL || "/site.webmanifest"} />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color={THEME_COLOR}
      />
      <link rel="shortcut icon" href={FAVICON_URL || '/favicon.ico'} />
      <meta name="msapplication-TileColor" content={THEME_COLOR || '#000' } />
      <meta name="msapplication-config" content={BROWSERCONFIG_URL || "/browserconfig.xml"} />
      <meta name="theme-color" content={THEME_COLOR || '#000'} />
      <link rel="alternate" type="application/rss+xml" href={RSS_URL || '/feed.xml'} />
      
      <meta
        name="title"
        content={SITE_TITLE}
      />
      <meta
        name="description"
        content={SITE_DESCRIPTION}
      />
      <meta
        name="keywords"
        content={SITE_KEYWORDS}
      />
      <meta
        name="canonical"
        content={SITE_URL}
	property="canonical"
      />
      <meta
        name="author"
        content={SITE_AUTHOR}
      />
      <link rel="canonical" href={SITE_URL} /> 
      <meta property="og:title" content={SITE_TITLE} />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:description" content={SITE_DESCRIPTION} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={OG_IMAGE_URL} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={SITE_TITLE} />
      <meta name="twitter:url" content={SITE_URL} />
      <meta name="twitter:description" content={SITE_DESCRIPTION} />
      <meta name="twitter:site" content={SITE_TWITTER} />
      <meta name="twitter:user_id" content={SITE_TWITTER} />
      <meta name="twitter:image" content={OG_IMAGE_URL} />
    </Head>
  )
}

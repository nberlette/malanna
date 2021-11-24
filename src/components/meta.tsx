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
  RSS_URL,
  MANIFEST_URL,
  FAVICON_SVG as FAVICON_URL,
  OG_IMAGE_URL_DARK as OG_IMAGE_URL
} from '@lib/constants';

export default function Meta ({ props, children }) { 
  const title = props?.title || SITE_TITLE;
  const description = props?.description || SITE_DESCRIPTION;
  const keywords = props?.keywords || SITE_KEYWORDS;
  const author = props?.author || SITE_AUTHOR;
  const twitter = props?.twitter || SITE_TWITTER;
  const coverImage = props?.image || OG_IMAGE_URL;
  const favicon = props?.favicon || FAVICON_URL;
  const url = props?.url || SITE_URL;
  const name = props?.name || SITE_NAME;
  const themeColor = props?.themeColor || THEME_COLOR;
  const bgColor = props?.bgColor || BG_COLOR;
  const pageType = props?.pageType || 'website';
 
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
      <link rel="shortcut icon" href={favicon || '/favicon.ico'} />
      <meta name="msapplication-TileColor" content={themeColor || '#000' } />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="theme-color" content={themeColor || '#000'} />
      <link rel="alternate" type="application/rss+xml" href={RSS_URL || '/feed.xml'} />
      
      <meta
        name="title"
        content={title}
      />
      <meta
        name="description"
        content={description}
      />
      <meta
        name="keywords"
        content={keywords}
	/>
      <meta
        name="canonical"
        content={url}
	property="canonical"
      />
      <meta
        name="author"
        content={author}
      />
      <link rel="canonical" href={url} /> 
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={pageType || 'website'} />
      <meta property="og:image" content={coverImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content={twitter} />
      <meta name="twitter:user_id" content={twitter} />
      <meta name="twitter:image" content={coverImage} />
      {children}
    </Head>
  )
}

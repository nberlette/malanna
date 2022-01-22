import {
  BG_COLOR,
  FAVICON_SVG as FAVICON_URL,
  MANIFEST_URL,
  OG_IMAGE_URL_DARK as OG_IMAGE_URL,
  RSS_URL,
  SITE_AUTHOR,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_TITLE,
  SITE_TWITTER,
  SITE_URL,
  THEME_COLOR
} from '@lib/constants';
import Head from 'next/head';

type MetaProps = {
  name?: string | any
  title?: string | any
  description?: string | any
  keywords?: string | any
  author?: string | any
  twitter?: string | any
  image?: string | any
  favicon?: string | any
  url?: string | any
  themeColor?: string | any
  bgColor?: string | any
  pageType?: string | any
}
type MetaOptions = {
  children?: any;
  props?: MetaProps;
}

export default function Meta({ children, props }: MetaOptions) {
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
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href={MANIFEST_URL || "/site.webmanifest"} />
      <link
        rel="mask-icon"
        href="/safari-pinned-tab.svg"
        color={THEME_COLOR}
      />
      <link rel="shortcut icon" href={favicon || '/favicon.png'} type="image/png" />
      <link rel="icon" href={favicon || '/favicon.svg'} type="image/svg+xml" />
      <meta name="msapplication-TileColor" content={themeColor || '#112233' } />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="theme-color" content={themeColor || '#112233'} />
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

import NextLink from 'next/link'
import cn from 'classnames'
import { SITE_NAME, SITE_TAGLINE, SITE_URL, GITHUB_URL } from '@lib/constants'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
	  <NextLink href="/">
	    <a title={SITE_NAME} aria-label={SITE_NAME}>{SITE_NAME}</a>
	  </NextLink>
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
	  {SITE_TAGLINE}
      </h4>
    </section>
  )
}


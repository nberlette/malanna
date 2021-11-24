import { SITE_NAME, SITE_TAGLINE } from '@lib/constants'
import NextLink from 'next/link'

export default function Intro() {
  return (
    <section className="intro">
      <h1 className="section-title">
        <NextLink href="/">
          <a title={SITE_NAME} aria-label={SITE_NAME}>{SITE_NAME}</a>
        </NextLink>
      </h1>
      <h4 className="section-subtitle">
        {SITE_TAGLINE}
      </h4>
    </section>
  )
}


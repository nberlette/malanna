import Container from '@components/container'
import { FOOTER_LINK, FOOTER_LINK_EM, SITE_TAGLINE } from '@lib/constants'

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="inner">
          <h3 className="tagline">{SITE_TAGLINE}</h3>
          <div className="links">
            <a
              href={FOOTER_LINK_EM.url}
              rel="noopener noreferrer"
              target="_blank"
              className="emphasized"
            >
              {FOOTER_LINK_EM.text}
            </a>
            <a
              href={FOOTER_LINK.url}
              rel="noopener noreferrer"
              target="_blank"
              className="regular"
            >
              {FOOTER_LINK.text}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

import Container from '@components/container'
import { GITHUB_URL, SITE_TAGLINE } from '@lib/constants'

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="inner">
          <h3 className="tagline">
	  	      {SITE_TAGLINE}
          </h3>
          <div className="links">
            <a href="https://n.berlette.com" className="emphasized">
              Part of the Berlette Family
            </a>
            <a href={GITHUB_URL} className="regular">
              View on GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

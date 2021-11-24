import { SITE_NAME } from '@lib/constants'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="header">
      <h2 className="title">
        <Link href="/">
          <a className="hover:underline">{SITE_NAME}</a>
        </Link>
      </h2>
    </header>
  )
}

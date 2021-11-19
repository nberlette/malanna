import Link from 'next/link'
import { SITE_NAME } from '@lib/constants'

export default function Header() {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/">
        <a className="hover:underline">{SITE_NAME}</a>
      </Link>
      .
    </h2>
  )
}

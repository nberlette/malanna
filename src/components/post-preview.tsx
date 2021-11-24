import Avatar from '@components/avatar'
import CoverImage from '@components/cover-image'
import Date from '@components/date'
import Link from 'next/link'
import { RichText } from 'prismic-reactjs'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: { title?: any; coverImage?: any; date?: any; excerpt?: any; author?: any; slug?: any } = {}) {
  return (
    <section className="post-preview">
      <div className="cover-image">
        <CoverImage
          title={RichText.asText(title)}
          slug={slug}
          url={coverImage.url}
        />
      </div>
      <h3 className="title">
        <Link href={`/posts/${slug}`}>
          <a className="hover:underline">
            <RichText render={title} />
          </a>
        </Link>
      </h3>
      <div className="date">
        <Date dateString={date} />
      </div>
      <p className="excerpt">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </section>
  )
}

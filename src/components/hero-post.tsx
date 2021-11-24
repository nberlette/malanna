import Avatar from '@components/avatar'
import CoverImage from '@components/cover-image'
import PostDate from '@components/date'
import Link from 'next/link'
import { RichText } from 'prismic-reactjs'

type HeroPostProps = {
  title?: any,
  coverImage?: any,
  date?: any,
  excerpt?: any,
  author?: any,
  slug?: string | any
}

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: HeroPostProps = {}) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage
          title={RichText.asText(title)}
          slug={slug}
          url={coverImage.url}
        />
      </div>
      <div className="mb-20 md:mb-28 md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8">
        <div>
          <h3 className="mb-4 leading-tight text-4xl lg:text-6xl">
            <Link href={`/posts/${slug}`}>
              <a className="hover:underline">
                <RichText render={title} />
              </a>
            </Link>
          </h3>
          <div className="text-lg mb-4 md:mb-0">
            <PostDate dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
      </div>
    </section>
  )
}


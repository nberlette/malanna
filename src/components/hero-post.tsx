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
    <section className="">
      <div className="md:mb-16 mb-8">
        <CoverImage
          title={RichText.asText(title)}
          slug={slug}
          url={coverImage.url}
        />
      </div>
      <div className="md:mb-28 md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20">
        <div>
          <h3 className="lg:text-6xl mb-4 text-4xl leading-tight">
            <Link href={`/posts/${slug}`} passHref>
              <a className="hover:underline">
                <RichText render={title} />
              </a>
            </Link>
          </h3>
          <div className="md:mb-0 mb-4 text-lg">
            <PostDate dateString={date} />
          </div>
        </div>
        <div>
          <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
      </div>
    </section>
  )
}


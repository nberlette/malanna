import Avatar from '@components/avatar'
import CoverImage from '@components/cover-image'
import Date from '@components/date'
import PostTitle from '@components/post-title'
import { RichText } from 'prismic-reactjs'

export default function PostHeader({ title, coverImage, date, author }: { title?: any; coverImage?: any; date?: any; author?: any } = {}) {
  return (
    <section className="post-header">
      <PostTitle>{title[0].text}</PostTitle>
      <div className="author">
        {author && <Avatar name={author.name} picture={author.picture} />}
      </div>
      <div className="cover-image">
        <CoverImage title={RichText.asText(title)} url={coverImage.url} />
      </div>
      <div className="meta">
        <div className="author">
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
        <div className="date">
          <Date dateString={date} />
        </div>
      </div>
    </section>
  )
}

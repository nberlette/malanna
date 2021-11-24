import markdownStyles from '@styles/markdown.module.css'
import { RichText } from 'prismic-reactjs'

export default function PostBody({ content }: { content?: any } = {}) {
  return (
    <div className="post-body">
      <div className={markdownStyles['markdown']}>
        <RichText render={content} />
      </div>
    </div>
  )
}


import markdownStyles from '@styles/markdown.module.css'
import { RichText } from 'prismic-reactjs'

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className={markdownStyles['markdown']}>
        <RichText render={content} />
      </div>
    </div>
  )
}


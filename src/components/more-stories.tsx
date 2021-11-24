import PostPreview from '@components/post-preview'

export default function MoreStories({ posts }: { posts?: any } = {}) {
  return (
    <section className="post--more-stories">
      <h2 className="section-title">
        More Stories
      </h2>
      <div className="section-content">
        {posts.map(({ node }) => (
          <PostPreview
            key={node._meta.uid}
            title={node.title}
            coverImage={node.coverimage}
            date={node.date}
            author={node.author}
            slug={node._meta.uid}
            excerpt={node.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

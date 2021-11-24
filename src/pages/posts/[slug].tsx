import Container from '@components/container'
import Header from '@components/header'
import Layout from '@components/layout'
import MoreStories from '@components/more-stories'
import PostBody from '@components/post-body'
import PostHeader from '@components/post-header'
import PostTitle from '@components/post-title'
import SectionSeparator from '@components/section-separator'
import { getAllPostsWithSlug, getPostAndMorePosts } from '@lib/api'
import { CMS_NAME } from '@lib/constants'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post?._meta?.uid) {
    return <ErrorPage statusCode={404} />
  }
  const coverImageUrl = post?.coverimage?.url;
  return (
    <Layout preview={preview}>
      <Container className="bg-light-100">
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title[0].text} | Next.js Blog Example with {CMS_NAME}
                </title>
                <meta property="og:image" content={coverImageUrl} />
		            <meta name="twitter:image" content={coverImageUrl} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverimage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
            <SectionSeparator />
            {morePosts && morePosts.length > 0 && (
              <MoreStories posts={morePosts} />
            )}
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview, previewData }: { params?: any, preview?: any, previewData?: any }) {
  const { slug } = params;
  const data = await getPostAndMorePosts(slug, previewData)

  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? [],
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths: allPosts?.map(({ node }) => `/posts/${node._meta.uid}`) || [],
    fallback: true,
  }
}

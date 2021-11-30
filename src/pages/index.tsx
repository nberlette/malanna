import Container from '@components/container'
import HeroPost from '@components/hero-post'
import Intro from '@components/intro'
import Layout from '@components/layout'
import MoreStories from '@components/more-stories'
import { getAllPostsForHome } from '@lib/api'
import {
  SITE_TITLE
} from '@lib/constants'
import Head from 'next/head'

export default function Index({ preview, allPosts }) {
  const heroPost = allPosts[0]?.node
  const morePosts = [...allPosts].slice(1)
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{SITE_TITLE}</title>
        </Head>
        <Container> 
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverimage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost._meta.uid}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getServerSideProps({ preview = false, previewData }) {
  const allPosts = await getAllPostsForHome(previewData)
  return {
    props: {
      preview,
      allPosts
    },
  }
}

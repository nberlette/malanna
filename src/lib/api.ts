import Prismic from 'prismic-javascript';
import pkg from '../../package.json';

const REPOSITORY = process.env.PRISMIC_REPOSITORY_NAME || pkg['prismic']?.repository;
const REF_API_URL = `https://${REPOSITORY}.cdn.prismic.io/api/v2`
const GRAPHQL_API_URL = `https://${REPOSITORY}.cdn.prismic.io/graphql`
export const API_TOKEN = process.env.PRISMIC_API_TOKEN
export const API_LOCALE = process.env.PRISMIC_REPOSITORY_LOCALE

export const PrismicClient = Prismic.client(REF_API_URL, {
  accessToken: API_TOKEN,
})

export type FetchAPIOptions = {
  previewData?: any,
  variables?: any,
  passThroughOnException?: boolean,
  morePostsCursor?: number,
  morePostsLimit?: number
}

async function fetchAPI(query, { previewData, variables, passThroughOnException }: FetchAPIOptions = {}) {
  const prismicAPI = await PrismicClient.getApi()
  const res = await fetch(
    `${GRAPHQL_API_URL}?query=${query}&variables=${JSON.stringify(variables)}`,
    {
      headers: {
        'Prismic-Ref': previewData?.ref || prismicAPI.masterRef.ref,
        'Content-Type': 'application/json;charset=utf-8;',
        'Accept-Language': API_LOCALE,
        'Authorization': `Token ${API_TOKEN}`,
      },
    }
  )

  if (res.status !== 200) {
    const responseText = await res.text()
    console.error('[ERROR:%s] %s', res.status, responseText)
    if (!passThroughOnException) throw new Error('Failed to fetch API')
    return null;
  }

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    if (!passThroughOnException) throw new Error('Failed to fetch API')
    return json.errors; 
  }
  return json.data
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      allPosts {
        edges {
          node {
            _meta {
              uid
            }
          }
        }
      }
    }
  `)
  return data?.allPosts?.edges
}

export async function getAllPostsForHome(
  { previewData = null, variables = { lang: API_LOCALE }, passThroughOnException = false }: FetchAPIOptions = {}
): Promise<any> {
  const data = await fetchAPI(
    `
    query {
      allPosts(sortBy: date_DESC) {
        edges {
          node {
            date
            title
            content
            coverimage
            excerpt
            author {
              ...on Author {
                name
                picture
              }
            }
            _meta {
              uid
            }
          }
        }
      }
    }
  `,
    {
      previewData,
      variables
    }
  )

  return data.allPosts.edges || Promise.resolve([]);
}

export async function getPostAndMorePosts(slug: string,
  { previewData = null, morePostsCursor = 0, morePostsLimit = 2 }: FetchAPIOptions = {}
): Promise<any> {

  const data = await fetchAPI(
    `
  query PostBySlug($slug: String!, $lang: String!) {
    post(uid: $slug, lang: $lang) {
      title
      content
      date
      coverimage
      author {
        ...on Author {
          name
          picture
        }
      }
      _meta {
        uid
      }
    }

   morePosts: allPosts(sortBy: date_DESC, first: ${(morePostsLimit || 2)+1}) {
      edges {
        node {
          title
          content
          date
          coverimage
          excerpt
          author {
            ...on Author {
              name
              picture
            }
          }
          _meta {
            uid
          }
        }
      }
    }
  }
  `,
    {
      previewData,
      variables: {
        slug,
        lang: API_LOCALE,
      },
    }
  )

  data.morePosts = data.morePosts.edges
    .filter(({ node }) => node._meta.uid !== slug)
    .slice(morePostsCursor || 0, morePostsLimit || 2)

  return data
}


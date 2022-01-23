import Document, { Html, Head, Main, NextScript } from 'next/document';
import Meta from '@components/meta';
import GitHubCorner from '@components/github-corner';
import { GITHUB_URL } from '@lib/constants';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
	        <Meta />
	      </Head>
        <body>
          <Main />
          <GitHubCorner url={GITHUB_URL} />
          <NextScript />
        </body>
      </Html>
    )
  }
}


import NextLink from 'next/link'
import { PrismicClient } from '@lib/api'
import type { NextApiRequest, NextApiResponse } from 'next'

const linkResolver = (doc: any): string => (
  (doc.type === 'post') ? `/posts/${doc.uid}` : `/${doc.uid}`
);

export default async function preview (req: NextApiRequest, res: NextApiResponse): Promise<any> {
  const documentId: any = req?.query?.documentId;
  const ref: any = req?.query?.token;

  // Check the token parameter against the Prismic SDK
  // const url = (
    await PrismicClient
      .getPreviewResolver(ref, documentId)
      .resolve(linkResolver, '/', (error, result) => {
        if (!error && result) {
          return result
        }
      })
      .then(url => {
        res.setPreviewData({ ref });
          res.writeHead(307, { 'Location': url });
          // https://bugs.chromium.org/p/chromium/issues/detail?id=696204
          res.write(`<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0;url=${url}"><script>window.location.href='${url}';</script></head>`);
          res.end();
      })
      .catch(console.error)
  // );
  // if (!url) {
    // return res.status(401).json({ message: 'Invalid token' });
  // }
  // Enable Preview Mode: set cookie ref so the draft ref can be fetched later

}

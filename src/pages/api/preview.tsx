import { PrismicClient } from '@lib/api'
import type { NextApiRequest, NextApiResponse } from 'next';

type ObjStub = Record<any, unknown>
const linkResolver = (doc: ObjStub): string => (doc.type === 'post') ? `/posts/${doc.uid}` : `/${doc.uid}`

export default async function preview(req: NextApiRequest, res: NextApiResponse): Promise<any> {
  const documentId: any = req?.query?.documentId;
  const ref: any = req?.query?.token;

  // Check the token parameter against the Prismic SDK
  const url = (
    await PrismicClient
      .getPreviewResolver(ref, documentId)
      .resolve(linkResolver, '/')
  );
  if (!url) {
    return res.status(401).json({ message: 'Invalid token' });
  }
  // Enable Preview Mode: set cookie ref so the draft ref can be fetched later
  res.setPreviewData({ ref });
  // https://bugs.chromium.org/p/chromium/issues/detail?id=696204
  res.write(`<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0;url=${url}"><script>window.location.href='${url}';</script></head>`);
  res.end();
}

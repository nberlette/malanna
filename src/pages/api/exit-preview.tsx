import { EXIT_PREVIEW_REDIRECT_URL } from '@lib/constants'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function exit (_: any, res: NextApiResponse) {
  res.clearPreviewData();
  res.writeHead(307, { 'Location': (EXIT_PREVIEW_REDIRECT_URL || '/') });
  res.end();
}


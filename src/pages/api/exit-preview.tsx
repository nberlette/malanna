import { EXIT_PREVIEW_REDIRECT_URL } from '@lib/constants'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function exit (req: NextApiRequest, res: NextApiResponse) {
  // Exit the current user from "Preview Mode". This function accepts no args.
  res.clearPreviewData();
  res.writeHead(307, {
    'Location': (EXIT_PREVIEW_REDIRECT_URL || '/')
  });
  res.end();
}


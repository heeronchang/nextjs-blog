import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.setPreviewData({ id: 1 });
  res.status(200).json({ text: 'Hello' });
}

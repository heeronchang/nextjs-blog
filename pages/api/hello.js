export default function handler(req, res) {
  res.setPreviewData({id:1})
  res.status(200).json({ text: 'Hello' });
}

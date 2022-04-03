export default function handler(req, res) {
  /**
   * sample api endpoint
   * http://localhost:3000/api/hello
   */
  res.status(200).json({ text: 'Hello' })
}

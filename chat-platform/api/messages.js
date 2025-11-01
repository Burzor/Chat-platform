let messages = [
  { sender: 'me', text: 'Welcome to the chat! 💞' }
];

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(messages);
  } else if (req.method === 'POST') {
    let body = req.body;
    if (typeof body === 'string') body = JSON.parse(body);
    const { sender, text } = body;
    if (!sender || !text) {
      return res.status(400).json({ error: 'Sender and text required' });
    }
    const message = { sender, text };
    messages.push(message);
    res.status(201).json(message);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

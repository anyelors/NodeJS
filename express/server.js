/** */
import express from 'express';
const app = express(); app.use(express.json());

const users = []; let id = 1;

app.get('/users', (_, res) => res.json(users));
app.get('/', (req, res) => res.json(req.url));

app.post('/users', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'name required' });
  const user = { id: id++, name };
  users.push(user);
  res.status(201).json(user);
});

app.listen(3000, ()=> console.log(`🚀 http://localhost:3000`));

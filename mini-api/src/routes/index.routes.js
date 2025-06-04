import express from 'express';

const router = express.Router();

router.get('/', (_req, res) => {
  res.json({ msg: 'API viva 🌱' });
});

router.post('/echo', (req, res) => {
  res.json(req.body);
});

export default router;
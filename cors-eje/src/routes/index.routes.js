import express from 'express';

const router = express.Router();

router.get('/api', (_req, res) => {
  res.json({ msg: 'API validando CORS 🌐' });
});

export default router;
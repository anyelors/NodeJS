import express from 'express';

const router = express.Router();

router.get('/', (_req, res) => {
  res.json({ msg: 'Kaixo Morgan 👋' });
});

export default router;
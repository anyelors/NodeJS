import { Router } from 'express';
const router = Router();

router.get('/', (_, res) => res.json({ msg: 'Hello API' }));

router.get('/ping', (_, res) => res.json({ ok: true }));

router.post('/echo', (req, res) => {
  res.status(201).json(req.body);
});

export default router;


import express from 'express';
import { validator } from '../middleware/validator.js';

const router = express.Router();

router.post('/registro', validator, (req, res) => {
  res.json({ mensaje: '🙋 Usuario registrado correctamente' });
});

export default router;
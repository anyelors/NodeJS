import express from 'express';
import { validarRegistro } from '../middleware/registerMiddleware.js';

const router = express.Router();

router.post('/registro', validarRegistro, (req, res) => {
  res.json({ mensaje: '🙋 Usuario registrado correctamente' });
});

export default router;
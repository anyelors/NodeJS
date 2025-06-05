import express from 'express';
import { validarFormulario } from '../middleware/validationMiddleware.js';

const router = express.Router();

router.post('/contacto', validarFormulario, (req, res) => {
  res.json({ mensaje: '📬 Formulario enviado correctamente' });
});

export default router;

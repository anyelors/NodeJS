import express from 'express';
import { login } from '../controllers/auth.controller.js';
import { verificarToken, soloAdmin } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/login', login);

router.get('/privado', verificarToken, (req, res) => {
  res.send(`🔒 Bienvenido, ${req.usuario.usuario}. Acceso autorizado.`);
});

router.get('/admin', verificarToken, soloAdmin, (req, res) => {
  res.send('🎩 Área solo para administradores');
});


export default router;

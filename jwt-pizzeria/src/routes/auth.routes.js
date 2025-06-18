import { Router } from 'express';
import { login, register } from '../controllers/auth.controller.js';
import { verificarToken, soloAdmin } from '../middlewares/auth.middleware.js';
import { validarRegistro } from '../middlewares/register.validator.js';

const router = Router();

router.post('/register', validarRegistro, verificarToken, soloAdmin, register);
router.post('/login', validarRegistro, login);
router.get('/privado', verificarToken, (req, res) => {
  res.json({ message: 'Acceso permitido al usuario autenticado' });
});
router.get('/admin', verificarToken, soloAdmin, (req, res) => {
  res.json({ message: '✅ Bienvenido administrador' });
});

export default router;

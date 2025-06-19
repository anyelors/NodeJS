import { Router } from 'express';
import { register, login } from '../controllers/auth.controller.js';
import { validarRegistro } from '../middleware/validation.middleware.js';

const router = Router();

router.post('/register', validarRegistro, register);
router.post('/login', login);

export default router;


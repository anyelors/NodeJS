import { Router } from 'express';
import { register,
         login, 
         loginGuest } from '../controllers/auth.controller.js';
import { validarRegistro, validarLogin } from '../middleware/validate.middleware.js';

const router = Router();

router.post('/register', validarRegistro, register);
router.post('/login', validarLogin, login);
router.post('/guest', loginGuest);

export default router;

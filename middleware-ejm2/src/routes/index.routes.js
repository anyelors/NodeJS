import express from 'express';
import validationMiddleware from'../middleware/validation.middleware.js';

const router = express.Router();

router.get('/', (_, res) => {
  res.send('🌍 ¡Bienvenido a la página principal!');
});

router.post('/registro', validationMiddleware, (req, res) => {
  res.json({ success: true, message: 'Usuario registrado correctamente' });
});

// Simulación de un error en `/error`
router.get('/error', (req, res, next) => {
  next(new Error('Esto es un error simulado'));
});

export default router;

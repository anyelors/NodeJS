import express from 'express';
import validationMiddleware from'../middleware/validation.middleware.js';
import path from 'path';

const router = express.Router();

router.post('/registro', validationMiddleware, (req, res) => {
  res.json({ success: true, message: '✅ Usuario registrado correctamente' });
});

//  Nueva ruta GET para servir el formulario
router.get('/registro', (req, res) => {
    res.sendFile(path.resolve('src/public/index.html'));
});

// Simulación de un error en `/error`
router.get('/error', (req, res, next) => {
  next(new Error('Esto es un error simulado'));
});

export default router;

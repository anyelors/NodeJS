import express from 'express';
import contactoRoutes from './contacto.routes.js';

const router = express.Router();

router.use('/api', contactoRoutes);

router.get('/', (_, res) => {
  res.send('🌍 ¡Bienvenido a la página principal Express Validator!');
});

export default router;

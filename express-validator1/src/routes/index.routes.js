import express from 'express';
import contactoRoutes from './contacto.routes.js';
import registroRoutes from './register.routes.js';

const router = express.Router();

router.use('/api', contactoRoutes);
router.use('/api/users', registroRoutes);

router.get('/', (_, res) => {
  res.send('🌍 ¡Bienvenido a la página principal Express Validator!');
});

export default router;

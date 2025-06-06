import express from 'express';
import registroRoutes from './register.routes.js';

const router = express.Router();

router.use('/api', registroRoutes);

router.get('/', (_, res) => {
  res.send('🌍 ¡Bienvenido a la página principal!');
});

export default router;

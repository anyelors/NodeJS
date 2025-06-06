import express from 'express';

const router = express.Router();

router.get('/', (_, res) => {
  res.send('🌍 ¡Bienvenido a la página principal!');
});

router.get('/registro', (req, res) => {
  res.json({ success: true, nom: 'Lupe', edad: 9 });
});

export default router;

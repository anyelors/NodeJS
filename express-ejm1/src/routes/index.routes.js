import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
  res.send('👋 ¡Hola desde Express!');
});

router.get('/hora', (req, res) => {
  const hora = new Date().toLocaleTimeString();
  res.json({ hora });
});

router.post('/ongiEtorri', (req, res) => {
  const { nombre } = req.body;
  if (!nombre) {
    return res.status(400).json({ error: 'Falta el campo nombre' });
  }
  res.status(201).json({ mensaje: `Kaixo, ${nombre}. Ongietorri a nuestra API 👋` });
});

export default router;
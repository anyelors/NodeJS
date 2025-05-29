const express = require('express');
const authMiddleware = require('../middleware/auth.middleware');

const router = express.Router();

router.get('/', (_, res) => {
  res.send('🌍 ¡Bienvenido a la página principal!');
});

// Ruta protegida con autenticación
router.get('/panel', authMiddleware, (req, res) => {
  res.send('🔒 Acceso autorizado al panel administrativo');
});

module.exports = router;

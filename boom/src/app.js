import express from 'express';
import usuariosRoutes from './routes/usuarios.routes.js';
import peliculasRoutes from './routes/peliculas.routes.js';

const app = express();

// Middlewares
app.use(express.json());

// Rutas
app.use('/usuarios', usuariosRoutes);
app.use('/peliculas', peliculasRoutes);

app.use((err, req, res, next) => {
  console.error('❌ Error:', err.message);
  res.status(500).json({ error: 'Error interno del servidor' });
});

export default app;

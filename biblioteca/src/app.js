import express from 'express';
import path from "path";
import { fileURLToPath } from "url";
import librosRoutes from './routes/libros.routes.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(express.json());

// Rutas
app.use('/api/libros', librosRoutes);
app.use(express.static(path.join(__dirname, '/public')))

app.use((err, req, res, next) => {
  console.error('❌ Error:', err.message);
  res.status(500).json({ error: 'Error interno del servidor' });
});

export default app;

import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import gimnasioRoutes from './routes/gimnasio.routes.js';
import errorMiddleware from './middleware/error.middleware.js';
import path from 'path';
import { fileURLToPath } from "url";

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middlewares globales
app.use(express.json());

// Servir archivos estáticos desde la carpeta /client
app.use(express.static(path.join(__dirname, '../client')));


// Rutas principales
app.use('/auth', authRoutes);
app.use('/gimnasio', gimnasioRoutes);

// Si ninguna de las rutas anteriores coincide, servir el index.html de la SPA
app.get(/(.*)/, (_req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

// Middleware de manejo de errores
app.use(errorMiddleware);

export default app;


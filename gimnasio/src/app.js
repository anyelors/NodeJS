import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import gimnasioRoutes from './routes/gimnasio.routes.js';
import errorMiddleware from './middleware/error.middleware.js';
dotenv.config();

const app = express();

// Middlewares globales
app.use(express.json());

// Rutas principales
app.use('/auth', authRoutes);
app.use('/gimnasio', gimnasioRoutes);

// Ruta raíz
app.get('/', (req, res) => {
  res.send('🎽 API Gimnasio funcionando correctamente');
});

app.use(errorMiddleware);

export default app;


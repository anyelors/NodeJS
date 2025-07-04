import express from 'express';
import authRoutes from './routes/auth.routes.js';
import negocioRoutes from './routes/negocio.routes.js';

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/negocio', negocioRoutes);

export default app;

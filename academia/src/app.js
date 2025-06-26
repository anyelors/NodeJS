import express from 'express';
import loggerMiddleware from './middleware/logger.middleware.js';
import error from './middleware/error.middleware.js';
import authRoutes from './routes/auth.routes.js';
import cursosRoutes from './routes/cursos.routes.js';
import adminRoutes from './routes/admin.routes.js';

//Creación del servidor express
const app = express();

//middleware globales
app.use(loggerMiddleware);
app.use(express.json());

app.use(express.static('src/public')); //para servir archivos estaticos

//creacion de rutas
app.use('/auth', authRoutes);
app.use('/cursos', cursosRoutes);
app.use('/admin', adminRoutes);

//error middleware
app.use(error);

export default app;

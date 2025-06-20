import express from 'express';
import loggerMiddleware from './middleware/logger.middleware.js';
import error from './middleware/error.middleware.js';
import authRoutes from './routes/auth.routes.js';
import cursosRoutes from './routes/cursos.routes.js';
import adminRoutes from './routes/admin.routes.js';
import {register} from './controllers/auth.controller.js';

//Creación del servidor express
const app = express();

//middleware globales
app.use(loggerMiddleware);
app.use(express.json());

//creacion de rutas
app.use('/auth', authRoutes);
app.use('/cursos', cursosRoutes);
app.use('/admin', adminRoutes);
app.post('/register',register); // esto solo para probar, en produccion no mola o sino lo meteis con soloAdmin

//error middleware
app.use(error);

export default app;

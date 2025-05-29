import express from 'express';
import cors from 'cors';
import limiter from './middleware/rate-limit.middleware.js';
import errorMiddleware from './middleware/error.middleware.js';
import routes from './routes/index.routes.js';

const app = express();

// Middleware globales
app.use(cors());
app.use(express.json());
app.use(express.static('src/public')); //para servir archivos estaticos
app.use(limiter); // Protección contra exceso de solicitudes

// Rutas principales
app.use('/', routes);

// Middleware de manejo de errores (Siempre al final)
app.use(errorMiddleware);

export default app;

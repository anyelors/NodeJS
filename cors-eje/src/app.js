import express from 'express';
import morgan  from 'morgan';
import miCors from './middleware/cors.middleware.js';
import routes from './routes/index.routes.js';

const app = express();

app.use(morgan('dev'));        // ① log
app.use(express.json());       // ③ body parser nativo

app.use(miCors); // Protección contra exceso de solicitudes

// Rutas principales
app.use('/', routes);

export default app;
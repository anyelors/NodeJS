import express from 'express';
import { securityMiddleware } from './middleware/helmet.config.js';
import miMorgan from './middleware/log.middleware.js';
import miCors from './middleware/cors.middleware.js';
import routes from './routes/index.routes.js';

const app = express();

app.use(miMorgan);          // ① log
app.use(miCors);            // Protección contra exceso de solicitudes
app.use(securityMiddleware);//Helmet

app.use(express.json());    // ③ body parser nativo

// Rutas principales
app.use('/', routes);

export default app;
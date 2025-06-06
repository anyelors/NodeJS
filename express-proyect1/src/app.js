import express from 'express';
import cors    from 'cors';
import routes  from './routes/index.js';
import logger from './middleware/logger.js'

const app = express();

app.use(logger);                // ① log   
app.use(cors());                // ② CORS abierto
app.use(express.json());        // ③ body parser nativo

// Rutas principales
app.use('/', routes);

export default app;
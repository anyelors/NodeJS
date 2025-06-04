import express from 'express';
import morgan  from 'morgan';
import cors    from 'cors';
import routes from './routes/index.routes.js';

const app = express();

app.use(morgan('dev'));        // ① log
app.use(cors());                // ② CORS abierto
app.use(express.json());        // ③ body parser nativo

// Rutas principales
app.use('/', routes);

export default app;
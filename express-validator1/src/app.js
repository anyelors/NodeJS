import express from 'express';
import cors    from 'cors';
import routes from './routes/index.routes.js';

const app = express();

// Middleware globales
app.use(cors());
app.use(express.json());
app.use(routes);

export default app;

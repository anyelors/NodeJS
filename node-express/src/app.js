import express from 'express';
import router from './routes/index.routes.js';

const app = express();
app.use(express.json());          // body parser integrado
app.use('/api', router);

export default app;

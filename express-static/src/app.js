import express from 'express';

const app = express();

// Middleware incorporado: servir archivos de /public
app.use(express.static('src/public'));

export default app;

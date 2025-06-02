/**1. 
import express from 'express';
import morgan  from 'morgan';
import cors    from 'cors';

const app = express();

app.use(morgan('dev'));        // ① log
app.use(cors());                // ② CORS abierto
app.use(express.json());        // ③ body parser nativo

app.get('/', (_req, res) => {
  res.json({ msg: '👋 Hola Express con middlewares de terceros' });
});

app.listen(3000, () => console.log('🚀 http://localhost:3000'));
*/

/** */
import app from './app.js'; // Importa la configuración de la app en app.js

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});

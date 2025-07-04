import express from 'express';
import path from 'path';
import { fileURLToPath } from "url";
import rutasCursos from './routes/cursos.routes.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());

// Servir archivos estáticos desde la carpeta /client
app.use(express.static(path.join(__dirname, '../client')));

app.use('/api/cursos', rutasCursos);

// Si ninguna de las rutas anteriores coincide, servir el index.html de la SPA
app.get(/(.*)/, (_req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

export default app;
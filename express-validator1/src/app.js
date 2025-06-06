import express from 'express';
import cors    from 'cors';
import path from "path";
import { fileURLToPath } from "url";
import routes  from './routes/index.routes.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware globales
app.use(cors());
app.use(express.json());
// Middleware incorporado: servir archivos de /public
app.use(express.static(path.join(__dirname, '/public')))
//app.use(express.static('src/public'));
app.use(routes);

export default app;

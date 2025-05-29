const express = require('express');
const cors = require('cors');
const logMiddleware = require('./middleware/log.middleware');
const routes = require('./routes/index.routes'); // Importamos las rutas

const app = express();

// Middleware global
app.use(cors()); // Permitir CORS
app.use(express.json()); // Procesar JSON
app.use(logMiddleware); // Registrar cada solicitud

// Rutas
app.use('/', routes);

module.exports = app;

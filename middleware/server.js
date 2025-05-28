const express = require('express');
const app = express();

//USE   ####################################################

// Middleware de aplicación (log básico)
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // continua
});

app.use((req, res, next) => {
  if (req.headers['x-api-key'] !== '12345') {
    return res.status(401).json({ error: '🔐 No autorizado' });
  }
  next(); // si pasa, continúa
});

app.use((req, res, next) => {
  if (req.url === '/prohibido') {
    return res.status(403).send('⛔ Acceso denegado');
  }
  next();
});

app.use((req, res, next) => {
  // Añadimos una propiedad a la petición
  req.inicio = Date.now();
  next();
});

//APIS  ###########################################

app.get('/', (_, res) => {
  res.send('Hola mundo 👋');
});

app.get('/panel', soloAdmins, (_, res) => {
  res.send('Bienvenido al panel administrativo 🧑💼');
});

app.get('/time', (req, res) => {
  const duracion = Date.now() - req.inicio;
  res.send(`⏱️ Tiempo de respuesta: ${duracion} ms`);
});


app.listen(3000, () => console.log('🟢 http://localhost:3000'));


//FUNCIONES ############################################

function soloAdmins(req, res, next) {
  if (req.query.rol !== 'admin') {
    return res.status(403).send('⛔ Acceso denegado no eres Administrador');
  }
  next();
}


/** 
const http = require('http');

const server = http.createServer((req, res) => {
  console.log('📩 Evento request');
  res.end('Kaixo desde Node.js');
});

// Evento de conexión TCP
server.on('connection', (socket) => {
  console.log('🔗 Evento connection');
});

// Evento cuando el servidor se apaga
server.on('close', () => {
  console.log('🛑 Evento close');
});

server.listen(3000, () => {
  console.log('🚀 Servidor en http://localhost:3000');
});

// Simular cierre tras 20 segundos
setTimeout(() => {
  server.close();
}, 20000);
*/

/** 
const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  console.log(`📩 Petición recibida: ${req.method} ${req.url}`);

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Petición procesada correctamente');
});

server.listen(3000, () => {
  console.log('🟢 Servidor escuchando en http://localhost:3000');
});
*/

/** 
const http = require('http');

const server = http.createServer();

server.on('connection', socket => {
  console.log('🔌 Nueva conexión TCP establecida');
});

server.on('request', (req, res) => {
  res.end('Kaixo desde el server');
});

server.listen(3001, () => {
  console.log('🟢 Servidor escuchando en http://localhost:3001');
});
*/

/** 
const http = require('http');

const server = http.createServer();

server.on('connection', socket => {
  console.log('🔌 Nueva conexión TCP establecida');
});

server.on('request', (req, res) => {
  res.end('Kaixo desde el server');
});

server.listen(3001, () => {
  console.log('🟢 Servidor escuchando en http://localhost:3001');
});

setTimeout(() => {
  server.close(()=>{console.log("Servidor cerrado")});
}, 60000); // Cierra después de 1 minuto

server.on('connection', socket => {
  console.log(`🔌 Conexión establecida desde ${socket.remoteAddress}:${socket.remotePort}`);
});

server.on('request', (req, res) => {
  console.log(`📩 Petición recibida: ${req.method} ${req.url}`);
});

server.on('error', err => {
  console.error(`❌ Error en el servidor: ${err.message}`);
});
*/

/** 
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Servidor se cerrará en 5 segundos...');
  setTimeout(() => server.close(), 5000);
});

server.on('close', () => {
  console.log('⛔ Servidor cerrado correctamente');
});

server.listen(3002, () => {
  console.log('🟢 Servidor escuchando en http://localhost:3002');
});
*/

/** 
const http = require("http");

let contador = 0;
let inicioServidor;

const server = http.createServer((req, res) => {
  if (req.url === "/stats") {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end(`Número total de peticiones: ${contador}`);
  } else if (req.url === "/agurServer") {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("⛔ Servidor cerrándose...");
    setTimeout(() => server.close(), 2000);
  } else {
    contador++;
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Petición recibida");
  }
});

server.on("request", (req) => {
  console.log(`📥 ${req.method} ${req.url}`);
});

server.on("close", () => {
  const tiempoActivo = (Date.now() - inicioServidor) / 1000;
  console.log(
    `⏳ Servidor cerrado tras ${tiempoActivo.toFixed(2)} segundos de actividad.`
  );
});

server.listen(3003, () => {
  inicioServidor = Date.now();
  console.log("🟢 Servidor en http://localhost:3003");
});
*/

/** 
const http = require('http');

let contador = 0;
const inicioServidor = Date.now();

const server = http.createServer((req, res) => {
  console.log(`📥 ${req.method} ${req.url}`);

  if (req.url === '/stats') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Número total de peticiones: ${contador}`);
  } else if (req.url === '/agurServer') {
    res.end('⛔ Servidor cerrándose...');
    setTimeout(() => server.close(), 2000);
  } else {
    contador++;
    res.end('Petición recibida');
  }
});

server.on('connection', (socket) => {
  console.log(`🔌 Nueva conexión desde ${socket.remoteAddress}:${socket.remotePort}`);
});

server.on('error', (err) => {
  console.error(`❌ Error en el servidor: ${err.message}`);
});

server.on('close', () => {
  const tiempoActivo = (Date.now() - inicioServidor) / 1000;
  console.log(`⏳ Servidor cerrado tras ${tiempoActivo.toFixed(2)} segundos de actividad.`);
});

server.listen(3003, () => {
  console.log('🟢 Servidor en http://localhost:3003');
});
*/

/**
 * Ejercicios   ####################################################################################
 */
/**1. 
const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
  console.log(`📩 Petición recibida: ${req.method} ${req.url}`);

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Servidor funcionando');
});

server.listen(5000, () => {
  console.log('🟢 Servidor escuchando en http://localhost:5000');
});
*/

/**2. 
const http = require('http');
let contador = 0;

const server = http.createServer((req, res) => {
  if (req.url === '/stats') {
    console.log(`Has hecho [${contador}] peticiones`);
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(`🌐 Has hecho [${contador}] peticiones`);
  } else {
    contador++;
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Petición recibida');
  }
});

server.on('request', (req) => {
  console.log(`📥 ${req.method} ${req.url}`);
});

server.listen(3003, () => {
  console.log('🟢 Servidor en http://localhost:3003');
});
*/

/**3. 
const http = require('http');
const server = http.createServer();

server.on('connection', socket => {
  console.log(`🔌 Nueva conexión desde ${socket.remoteAddress}`);
});

server.on('request', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });  
  res.end('Conexión TCP establecida');
});

server.listen(5002, () => {
  console.log('🟢 Servidor escuchando en http://localhost:5002');
});
*/

/**4. 
const http = require("http");
let inicioServidor;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Servidor se cerrará en 10 segundos...");
  setTimeout(() => server.close(), 10000);
});

server.on("close", () => {
  const tiempoActivo = (Date.now() - inicioServidor) / 1000;
  console.log(`⛔ Servidor cerrado [${tiempoActivo.toFixed(2)}]`);
});

server.listen(3002, () => {
  inicioServidor = Date.now();
  console.log("🟢 Servidor escuchando en http://localhost:3002");
});
*/

/**5. */
const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
  if (req.method === 'GET' && req.url === '/saludo') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({saludo: "🖖 Kaixo mundo"}));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: "❌ Ruta no encontrada" }));
  }
});

server.listen(5000, () => {
  console.log('🟢 Servidor escuchando en http://localhost:5000');
});
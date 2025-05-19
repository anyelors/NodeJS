/** 
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(201, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<h1>Página de inicio</h1>");
  } else if (req.url === "/contacto") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<h1>Contacto: contacto@example.com</h1>");
  } else if (req.url === "/info") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<h1>Información: informacion@example.com</h1>");  
  } else {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<h1>404 - Página no encontrada</h1>");
  }
});

server.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});
*/

/** 
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Servidor activo");
});

server.listen(4000, () => {
  console.log("Servidor en http://localhost:4000");

  console.log("¿Está escuchando?", server.listening);
  console.log("Dirección:", server.address());
  console.log("Timeout:", server.timeout, "ms");
});
*/

/**
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Servidor se cerrará en 5 segundos");
});

server.listen(3000, () => {
  console.log("Servidor en http://localhost:3000");

  setTimeout(() => {
    server.close(() => {
      console.log("Servidor cerrado correctamente");
    });
  }, 5000);
});
*/

/** 
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(201, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<h1>Página de inicio</h1>");
  } else if (req.url === "/conexiones") {
    server.getConnections((err, count) => {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(`<h1>🌐 Conexiones activas: ${count}<h1>`);
    });
  } else if (req.url === "/agurServer") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`<h1>❌ Servidor se va a cerrar<h1>`);
    setTimeout(() => {
      server.close(() => {
        console.log("Servidor cerrado correctamente");
      });
    }, 1500);
  } else {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<h1>🚨404 - Página no encontrada🚨</h1>");
  }
});

server.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});
*/

/** 
const http = require("http");

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Bienvenido a la página principal");
  } else if (method === "GET" && url === "/contacto") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Página de contacto");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Página no encontrada");
  }
});

server.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});
*/

/** */
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/mensaje') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString(); // Convertimos el buffer a string
    });

    req.on('end', () => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`Mensaje recibido: ${body}`);
    });
  } else {
    res.writeHead(404);
    res.end('Ruta no válida');
  }
});

server.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});

async function pruebaServerPOST(){
    try{
        const res = await fetch('http://localhost:3000/mensaje', {
         method: 'POST',
         headers: { 'Content-Type': 'text/plain' },
         body: 'Probando el servidor desde Node.js'
        });
        const data = await res.text();
        console.log(data);

    }
    catch(error){
        console.log("Error:",error)
    }
}

pruebaServerPOST();


/** 
const http = require('http');

const server = http.createServer((req, res) => {
  const userAgent = req.headers['user-agent'];

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Tu navegador es: ${userAgent}`);
});

server.listen(3002, () => {
  console.log('Escuchando en http://localhost:3002');
});
*/

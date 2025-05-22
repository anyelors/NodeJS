/**1. 
const http = require("http");

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Bienvenido a la página principal");
  } else if (method === "GET" && url === "/saludo") {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("🌐¡Kaixo, mundo!");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Página no encontrada");
  }
});

server.listen(4000, () => {
  console.log("Servidor escuchando en http://localhost:4000");
});
*/

/**2. 
const http = require('http');

let datos = [{
  id: 1,
  producto: "Camiseta",
  precio: 55
}];

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url.startsWith('/api/producto')) {
    const { searchParams } = new URL(req.url, 'http://localhost/api/producto');
    const id = Number(searchParams.get('id'));
    console.log(`id: ${id}`)
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const producto = datos.find((p) => p.id === id);

     if (producto) {
        res.end(JSON.stringify(producto));
    } else {
        res.end(JSON.stringify({ id, nombre: `Producto ${id}`, precio: id * 10 }));
    }
  }  else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: "❌ No encontrado" }));
  }
});

server.listen(4001, () => {
  console.log('API en http://localhost:4001/api/producto');
});
*/

/**3. 
const http = require('http');

const pages = {
  '/': `
  <!DOCTYPE html>
  <html lang="es">
  <head><meta charset="UTF-8"><title>Ejercicio 3</title></head>
  <body><h1>🏠 Página principal</h1></body>
  </html>
  `
};

const server = http.createServer((req, res) => {
  if (pages[req.url]) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(pages[req.url]);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>❌ Página no encontrada</h1>');
  }
});

server.listen(4002, () => {
  console.log('Servidor en http://localhost:4002');
});
*/

/**4. 
const http = require('http');

let datos = [{
  id: 1,
  mensaje: "Hola desde el cusro"
}];

const validarMensaje = (msg) => {
  return msg &&
         typeof msg.mensaje === 'string' && msg.mensaje.trim() !== '';
};

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/api/mensaje') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(datos));
  } else if (req.method === 'POST' && req.url === '/api/mensaje') {
    let body = '';

    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', () => {
      try {
        const nuevoMensaje = JSON.parse(body);

        if (!validarMensaje(nuevoMensaje)) {
          throw new Error("Estructura incorrecta");
        }

        datos.push(nuevoMensaje);
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ mensaje: "✅ Mensaje agregado", datos }));
      } catch (error) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: "❌ Datos inválidos, envía un mensaje" }));
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: "❌ No encontrado" }));
  }
});

server.listen(4003, () => {
  console.log('API en http://localhost:4003/api/mensaje');
});
*/

/**5. */
const http = require('http');

let tareas = [{id:1, texto:'Aprender Node'}, {id:2, texto:'Aprender Node se Elimina Mensaje'}];

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/api/tareas') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(tareas));
  }  else if (req.method === 'DELETE' && req.url.startsWith('/api/tareas/')) {
        const id = Number(req.url.split('/')[3]);
        //tareas = tareas.filter(t => t.id !== id);
        const indice = tareas.findIndex(objeto => objeto.id === id);
        if (indice !== -1) {
            let del = tareas.splice(indice,1);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ mensaje: "🗑️ Tarea eliminada", tareas }));
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ mensaje: "❌ No hay tarea para eliminar", tareas }));
        }
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: "❌ Ruta No encontrada" }));
  }
});

server.listen(3005, () => {
  console.log('API en http://localhost:3005/api/tareas');
});
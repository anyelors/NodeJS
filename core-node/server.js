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

/** 
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
*/

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

/** 
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('🏠 Bienvenido a la página principal');
  } else if (req.method === 'GET' && req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('ℹ️ Página de información');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('❌ Página no encontrada');
  }
});

server.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});
*/

/** 
const http = require('http');

const routes = {
  '/': '🏠 Bienvenido a la página principal',
  '/about': 'ℹ️ Página de información',
};

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && routes[req.url]) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(routes[req.url]);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('❌ Página no encontrada');
  }
});

server.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});
*/

/** 
const http = require('http');

const routes = {
  '/': '🏠 Bienvenido a la página principal',
  '/about': 'ℹ️ Página de información',
};

const server = http.createServer((req, res) => {
  console.log(`Solicitud recibida: ${req.method} ${req.url}`);

  if (req.method === 'GET' && routes[req.url]) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(routes[req.url]);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('❌ Página no encontrada');
  }
});

server.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});
*/

/** 
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/enviar') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString(); // Convertimos el buffer a string
    });

    req.on('end', () => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`📝 Datos recibidos: ${body}`);
    });
  } else {
    res.writeHead(404);
    res.end('Ruta no válida');
  }
});

server.listen(3001, () => {
  console.log('Servidor escuchando en http://localhost:3001');
});
*/

/** 
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/enviar') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ mensaje: '📝 Datos recibidos', contenido: body }));
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: '❌ Ruta no válida' }));
  }
});

server.listen(3001, () => {
  console.log('Servidor en http://localhost:3001');
});
*/

/** 
const http = require('http');

const server = http.createServer((req, res) => {
  //const headers = JSON.stringify(req.headers, null, 2);
  const headersFiltrados = {
    'host': req.headers['host'],
    'user-agent': req.headers['user-agent'],
    'accept': req.headers['accept']
  };

  res.writeHead(200, { 'Content-Type': 'application/json' });
  //res.end(headers);
  res.end(JSON.stringify(headersFiltrados));
});

server.listen(3002, () => {
  console.log('Servidor en http://localhost:3002');
});
*/

/** 
const http = require('http');

const server = http.createServer((req, res) => {
  const userAgent = req.headers['user-agent'] || '';

  const esMovil = /mobile|android|iphone|ipad/i.test(userAgent);

  const respuesta = esMovil
    ? { mensaje: '📱 Estás usando un dispositivo móvil' }
    : { mensaje: '💻 Estás en un ordenador' };

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(respuesta, null, 2));
});

server.listen(3002, () => {
  console.log('Servidor en http://localhost:3002');
});
*/

/** 
const http = require('http');

const html = `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><title>Servidor Node</title></head>
<body><h1>🚀 Servidor con Node.js</h1><p>Aupa desde el servidor sin Express</p></body>
</html>
`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
});

server.listen(3003, () => {
  console.log('Servidor en http://localhost:3003');
});
*/

/** 
const http = require('http');

const pages = {
  '/': `
  <!DOCTYPE html>
  <html lang="es">
  <head><meta charset="UTF-8"><title>Inicio</title></head>
  <body><h1>🏠 Página principal</h1></body>
  </html>
  `,
  '/contacto': `
  <!DOCTYPE html>
  <html lang="es">
  <head><meta charset="UTF-8"><title>Contacto</title></head>
  <body><h1>📞 Página de contacto</h1></body>
  </html>
  `
};

const server = http.createServer((req, res) => {
  if (pages[req.url]) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(pages[req.url]);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>❌ Página no encontrada</h1>');
  }
});

server.listen(3003, () => {
  console.log('Servidor en http://localhost:3003');
});
*/

/** 
const http = require("http");

let datos = [
  {
    nombre: "Maialen",
    edad: 44,
    ciudad: "Bilbao",
  },
];

const validarUsuario = (usuario) => {
  return usuario.nombre && usuario.edad && usuario.ciudad;
};

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/api/usuario") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(datos));
  } else if (req.method === "POST" && req.url === "/api/usuario") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      try {
        const nuevoUsuario = JSON.parse(body);

        if (!validarUsuario(nuevoUsuario)) {
          throw new Error("Estructura incorrecta");
        }

        datos.push(nuevoUsuario);
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ mensaje: "✅ Usuario actualizado", datos }));
      } catch (error) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            error: "❌ Datos inválidos, envía nombre, edad y ciudad",
          })
        );
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "❌ No encontrado" }));
  }
});

server.listen(3004, () => {
  console.log("API en http://localhost:3004/api/usuario");
});
*/

/** */
const http = require('http');

let datos = [{
  nombre: "Maialen",
  edad: 44,
  ciudad: "Bilbao"
}];

const validarUsuario = (usuario) => {
  return usuario &&
         typeof usuario.nombre === 'string' && usuario.nombre.trim() !== '' &&
         typeof usuario.edad === 'number' && usuario.edad >= 0 &&
         typeof usuario.ciudad === 'string' && usuario.ciudad.trim() !== '';
};

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/api/usuario') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(datos));
  } else if (req.method === 'POST' && req.url === '/api/addusuario') {
    let body = '';

    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', () => {
      try {
        const nuevoUsuario = JSON.parse(body);

        if (!validarUsuario(nuevoUsuario)) {
          throw new Error("Estructura incorrecta");
        }

        datos.push(nuevoUsuario);
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ mensaje: "✅ Usuario agregado", datos }));
      } catch (error) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: "❌ Datos inválidos, envía nombre, edad y ciudad" }));
      }
    });
  } else if (req.method === 'DELETE' && req.url === '/api/delusuario') {
    if (datos.length > 0) {
      datos.pop(); // Elimina el último usuario
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ mensaje: "🗑️ Último usuario eliminado", datos }));
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: "❌ No hay usuarios para eliminar" }));
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: "❌ No encontrado" }));
  }
});

server.listen(3004, () => {
  console.log('API en http://localhost:3004/api/usuario');
});

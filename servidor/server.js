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

/**5. 
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
*/

/** 
process.on('SIGINT',  () => gracefulShutdown('SIGINT'));
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));

function gracefulShutdown(signal) {
  console.log(`📥 Señal recibida: ${signal}`);
  // 1) Dejar de aceptar peticiones nuevas
  server.close(() => {
    console.log('✅ Conexiones cerradas. Bye!');
    process.exit(0); // éxito
  });
  // 2) Cortafuegos: forzar salida si tarda > 8 s
  setTimeout(() => process.exit(1), 8000);
}
*/  

/** 
const http = require('http');
const server = http.createServer((_, res) => res.end('Hola'));

server.listen(4000, () =>
  console.log('🟢 http://localhost:4000 — Ctrl-C para parar')
);

// ---> Bloque de señales
['SIGINT', 'SIGTERM'].forEach(sig =>
  process.on(sig, () => {
    console.log(`\n🔻 Recibido ${sig}. Cerrando...`);
    server.close(() => {
      console.log('🔒 Conexiones cerradas. Hasta luego.');
      process.exit(0);
    });
  })
);
*/

/** 
 * Ejemplos ##########################################################
*/
/**1. 
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Servidor activo');
});

server.listen(3000, () => {
  console.log('🟢 Servidor corriendo en http://localhost:3000');
});

// Manejamos SIGINT (Ctrl+C)
process.on('SIGINT', () => {
  console.log('\n🛑 SIGINT recibido (Ctrl+C). Cerrando servidor...');
  server.close(() => {
    console.log('✅ Servidor cerrado correctamente.');
    process.exit(0);
  });
});
*/

/**2. 
const http = require('http');
const server = http.createServer((req, res) => {
  res.end('Servidor en producción');
});

server.listen(3001, () => {
  console.log('🚀 Producción en http://localhost:3001');
});

function shutdown(signal) {
  console.log(`📦 Señal ${signal} recibida. Cerrando conexiones...`);
  server.close(() => {
    console.log('✅ Todo cerrado. Saliendo...');
    process.exit(0);
  });

  // Fallback por si alguna conexión no se cierra
  setTimeout(() => {
    console.log('⚠️ Tiempo de espera agotado. Forzando cierre.');
    process.exit(1);
  }, 5000);
}

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));
*/

/**3. 
const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Servidor con logging');
});

server.listen(3002, () => {
  console.log('📊 Servidor con logging en http://localhost:3002');
});

function cierreControlado(signal) {
  console.log(`📥 ${signal} recibido. Guardando log...`);
  fs.appendFileSync('shutdown.log', `Apagado por ${signal} a las ${new Date().toISOString()}\n`);
  server.close(() => {
    console.log('📝 Log guardado. Saliendo.');
    process.exit(0);
  });
}

process.on('SIGINT', () => cierreControlado('SIGINT'));
process.on('SIGTERM', () => cierreControlado('SIGTERM'));
*/

/**4. 
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Servidor con alerta de cierre');
});

server.listen(3003, () => {
  console.log('🛎️ Servidor escuchando en http://localhost:3003');
});

process.on('SIGTERM', () => {
  console.log('🚨 Apagando servidor... Notificando al equipo...');
  // Simulamos alerta (puede ser un webhook, email, etc.)
  console.log('📧 Enviando alerta: "Servidor apagado manualmente"');
  server.close(() => {
    process.exit(0);
  });
});
*/

/**5. 
const http = require('http');
let inicio;

const server = http.createServer((req, res) => {
  res.end('Servidor con temporizador');
});

server.listen(3004, () => {
  inicio = Date.now();
  console.log('⏱️ Servidor activo en http://localhost:3004');
});

process.on('SIGINT', () => {
  const duracion = ((Date.now() - inicio) / 1000).toFixed(1);
  console.log(`⛔ SIGINT recibido. Duración activa: ${duracion} segundos`);
  server.close(() => process.exit(0));
});
*/

/** 
 * Ejercicios ##########################################################
*/
/**1. */
const http = require('http');
const mensajes = [
  'Agur! ¡Hasta pronto!',
  'Bye bye 👋',
  'Cerrando servidor. ¡Nos vemos!',
  'Servidor apagado con estilo 😎',
  'Hasta la vista baby 🥸'
];

const server = http.createServer((req, res) => {
  res.end('Servidor activo');
});

server.listen(3000, () => {
  console.log('🟢 Servidor corriendo en http://localhost:3000');
});

process.on('SIGINT', () => {
  const mensaje = mensajes[Math.floor(Math.random() * mensajes.length)];
  console.log('\n🛑 SIGINT recibido (Ctrl+C). Cerrando servidor...');
  server.close(() => {
    console.log(`✅ ${mensaje}`);
    process.exit(0);
  });
});


/**2. 
const http = require('http');
let contador = 0;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    console.log(`Has hecho [${contador}] peticiones`);
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(`🌐 Has hecho [${contador}] peticiones`);
  } else {
    contador++;
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Petición recibida');
  }
});

server.listen(3000, () => {
  console.log('🟢 Servidor corriendo en http://localhost:3000');
});

process.on('SIGINT', () => {
  console.log('\n🛑 SIGINT recibido (Ctrl+C). Cerrando servidor...');
  server.close(() => {
    console.log(`✅ Realizo [${contador}] Peticiones`);
    process.exit(0);
  });
});
*/

/**3. 
const http = require('http');
const server = http.createServer((req, res) => {
  res.end('Servidor en producción');
});

server.listen(3001, () => {
  console.log('🚀 Producción en http://localhost:3001');
   setTimeout(() => shutdown('SIGTERM'), 10000);
});

function shutdown(signal) {
  console.log(`📦 Señal ${signal} recibida. Cerrando conexiones...`);
  server.close(() => {
    console.log('✅ Todo cerrado. Saliendo...');
    process.exit(0);
  });
}
*/

/**4. 
const http = require('http');
const mensajes = [
  '🟢 Servidor estableciendo conexión en http://localhost:3004',
  '🧹 Ejecutando tareas de limpieza antes del cierre...',
  '✅ Limpieza completada. Cerrando servidor.'
];

const server = http.createServer((req, res) => {
  res.end('Servidor activo');
});

server.listen(3004, () => {
  console.log('🟢 Servidor corriendo en http://localhost:3004');
});

process.on('SIGINT', () => {
  console.log('\n🛑 SIGINT recibido (Ctrl+C). Cerrando servidor...');
  server.close(() => {
    setTimeout(() => console.log(`✅ ${mensajes[0]}`), 1000);
    setTimeout(() => console.log(`✅ ${mensajes[1]}`), 2000);
    setTimeout(() => console.log(`✅ ${mensajes[2]}`), 3000);
    setTimeout(() => console.log(`🔒 Conexiones cerradas. Hasta luego.`), 4000);
    setTimeout(() => process.exit(0), 5000);
  });
});
*/
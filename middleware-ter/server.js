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

/** 
import app from './app.js'; // Importa la configuración de la app en app.js

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
*/

/** 
import express from 'express';
import helmet  from 'helmet';

const app = express();
app.use(helmet()); // 1 línea y cabeceras seguras!

app.get('/publico', (_req,res)=>res.send('Contenido'));

app.listen(8080, ()=> console.log("servidor lanzado en 8080"));
*/

/** 
import express from 'express';
import morgan  from 'morgan';

const app = express();

// ① Active el logger con formato 'dev'
//app.use(morgan('dev'));

morgan.token('id',     req => req.headers['x-request-id'] || 'anon');
morgan.token('body',   req => JSON.stringify(req.body || {}));

app.use(morgan(':id → :method :url :status :res[content-length] :response-time ms :body'));


app.get('/', (_req,res)=>res.send('Hola 🌍'));
app.listen(3000, ()=>console.log('🚀 http://localhost:3000'));
*/

/** 
import express from 'express';
import morgan  from 'morgan';

const app = express();
const isDev = process.env.NODE_ENV !== 'production';

if (isDev) app.use(morgan('dev'));        // ⇦ solo si estamos en DEV
app.get('/ping', (_req,res)=>res.send('pong'));

app.listen(4000,()=>console.log("Servidor lanzado en PORT 4000"));
*/

/** 
import express from 'express';
import { createStream } from 'rotating-file-stream';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import http from 'http';

const __dirname = path.dirname(fileURLToPath(import.meta.url)); // Corrección de __dirname

const app = express(); // Inicializa Express

// Configuración de registro de accesos
const accessLog = createStream('access.log', {
  interval: '1d',
  path: path.join(__dirname, 'logs'), // Ahora usa __dirname correctamente
});

app.use(morgan('combined', { stream: accessLog }));

const PORT = process.env.PORT || 3000; // Usa puerto 3000 por defecto

const server = http.createServer(app); // Crea el servidor HTTP

server.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
*/

/** 
import express from 'express';
import morgan  from 'morgan';

const app = express();

// token con usuario (si fuera auth real)
morgan.token('user', req => req.headers['x-user'] ?? 'guest');

// skip = omitir logging de ficheros estáticos
const skipStatic = (req) => req.path.startsWith('/static/');

app.use(morgan(':user :method :url :status - :response-time ms', { skip: skipStatic }));

// demo
app.get('/productos', (_req,res)=>res.json([{id:1, nombre:'Café'}]));
app.use('/static', express.static('public'));

app.listen(3001,()=>console.log("🚀Servidor lanzado en puerto 3001"));
*/

/** 
import express from 'express';
import morgan  from 'morgan';
import winston from 'winston';

const logger = winston.createLogger({
  level:'info',
  transports:[ new winston.transports.Console() ]
});

const app = express();

// morgan escribe en winston
app.use(morgan('combined', {
  stream: { write: msg => logger.info(msg.trim()) }
}));

app.get('/health', (_req,res)=>res.send('OK'));
app.listen(8080);
*/

/** 
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors()); // habilita CORS para TODAS las rutas y TODOS los orígenes

app.get('/api', (req, res) => {
  res.json({ message: 'Hola desde el servidor API 🛰️' });
});

app.listen(4000, () => console.log('🟢 API en http://localhost:4000'));
*/

/** 
import express from 'express';
import cors from 'cors';

const app = express();

//app.use(cors()); // habilita CORS para TODAS las rutas y TODOS los orígenes
app.use(cors({
  origin: 'https://www.google.com' // solo acepta peticiones desde aquí
}));

app.use((req,res,next)=>{
  console.log(`peticion: ${req.headers.origin}`)
  next();
})
app.get('/api', (req, res) => {
  res.json({ message: 'Hola desde el servidor API 🛰️' });
});

app.listen(4000, () => console.log('🟢 API en http://localhost:4000'));
*/

/** 
import express from 'express';
import cors from 'cors';

const app = express();

app.use((req,res,next)=>{
  console.log(`peticion: ${req.headers.origin}`)
  next();
})
//aki desde navegador no vamos a poder acceder
app.get('/api', (req, res) => {
  res.json({ message: 'Hola desde el servidor API 🛰️' });
});

//desde el navegador desde cualquier url
app.get('/public', cors(), (_req,res)=>res.json({ message: 'acceso publico 🛰️' }))

// solo desde navegador origin = google
app.get('/admin', cors({ origin: 'https://www.youtube.com' }), (_req,res)=>
  res.json({message : '🔐 Solo accesible desde https://www.youtube.com'}));


app.listen(4000, () => console.log('🟢 API en http://localhost:4000'));
*/

/** 
import express from 'express';
import cors from 'cors';

const app = express();

const whitelist = ['https://www.google.com', 'https://www.google.com.br'];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('⛔ Acceso CORS denegado'));
    }
  }
};

app.use((req,res,next)=>{
  console.log(`peticion: ${req.headers.origin}`)
  next();
})

app.use(cors(corsOptions));

app.get('/api', (req, res) => {
  res.json({ message: 'Hola desde el servidor API 🛰️' });
});

app.get('/public', (_req,res)=>res.json({ message: 'acceso publico 🛰️' }))

app.get('/admin',  (_req,res)=>
  res.json({message : '🔐 Solo accesible desde url en lista blanca'}));

app.listen(4000, () => console.log('🟢 API en http://localhost:4000'));
*/

/** 
import express from 'express';
import helmet from 'helmet';

const app = express();
app.use(helmet());

app.get('/', (req, res) => {
  res.send('🛡️ Web protegida con Helmet');
});

app.listen(3000, () => console.log('🟢 Servidor seguro en http://localhost:3000'));
*/

/** 
import express from 'express';
import helmet from 'helmet';

const app = express();
app.use(helmet());

app.get('/saludo', (_req, res) => {
  res.send('Kaixo desde servidor protegido 🚀');
});

app.listen(4000, () => {
  console.log('🟢 Servidor en http://localhost:4000');
});
*/

/** 
import express from 'express';
import helmet from 'helmet';

const app = express();

app.use(
  helmet({
    contentSecurityPolicy: false, // útil si aún no configuras CSP
  })
);

app.get('/saludo', (_req, res) => {
  res.send('Kaixo desde servidor protegido 🚀');
});

app.listen(4000, () => {
  console.log('🟢 Servidor en http://localhost:4000');
});
*/

/** */
import express from 'express';
import helmet from 'helmet';

const app = express();

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", 'https://cdn.jsdelivr.net'],
      styleSrc: ["'self'", 'https://fonts.googleapis.com'],
      fontSrc: ['https://fonts.gstatic.com'],
    },
  })
);


app.get('/saludo', (_req, res) => {
  res.send('Kaixo desde servidor protegido 🚀');
});

app.listen(4000, () => {
  console.log('🟢 Servidor en http://localhost:4000');
});

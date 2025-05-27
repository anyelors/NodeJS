import http from 'http';
import dotenv from 'dotenv';
import app from './app.js';

dotenv.config();                  // lee .env

const PORT = process.env.PORT ?? 3000;
http.createServer(app).listen(PORT, () =>
  console.log(`🚀 http://localhost:${PORT}`)
);

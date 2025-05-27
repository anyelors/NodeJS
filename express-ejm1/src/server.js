import dotenv from 'dotenv';
import http from 'http';
import app from './app.js';

dotenv.config();
const PORT = process.env.PORT || 3000;

http.createServer(app).listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
});

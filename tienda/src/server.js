import dotenv from 'dotenv';
import app from './app.js';

dotenv.config();                  // lee .env

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🟢 Servidor corriendo en http://localhost:${PORT}`);
});
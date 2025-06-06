import cors      from 'cors';
import rateLimit from 'express-rate-limit';

const whitelist = ['https://www.google.com', 'http://localhost:3000'];

const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || whitelist.includes(origin)) {
        callback(null, true);
        } else {
        callback(new Error('⛔ Acceso CORS denegado'));
        }
    }
};

export const securityCors = cors(corsOptions);


export const securitylimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minuto
  max: 10, // Máximo 10 solicitudes por IP
  message: '🚫 Demasiadas solicitudes, intenta más tarde'
});


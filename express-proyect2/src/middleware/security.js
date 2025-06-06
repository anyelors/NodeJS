import cors    from 'cors';
import rateLimit from 'express-rate-limit';

//#############################################
const whitelist = ['https://www.google.com', 'https://www.google.com.br'];

export const securityCors = cors(corsOptions = {
    origin: (origin, callback) => {
        if (!origin || whitelist.includes(origin)) {
        callback(null, true);
        } else {
        callback(new Error('⛔ Acceso CORS denegado'));
        }
    }
});


export const securitylimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minuto
  max: 10, // Máximo 5 solicitudes por IP
  message: '🚫 Demasiadas solicitudes, intenta más tarde'
});


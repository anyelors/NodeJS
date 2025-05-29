import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minuto
  max: 5, // Máximo 5 solicitudes por IP
  message: '🚫 Demasiadas solicitudes, intenta más tarde'
});

export default limiter;

import dotenv from 'dotenv';

dotenv.config();                  
const hhIni = process.env.HORA_INI || '00:00';
const hhFin = process.env.HORA_FIN || '23:59';

function validationMiddleware(req, res, next) {
  if (isWithinTimeRange(hhIni, hhFin)) {
    return res.status(503).json({ error: true, message: '🚫 Server en manteminiento' });
  }

  next();
}

function isWithinTimeRange(startTime, endTime, currentDate = new Date()) {
    // Convertir las horas de inicio y fin a objetos Date del mismo día
    const today = currentDate.toISOString().split('T')[0];
    const startDateTime = new Date(`${today}T${formatTimeString(startTime)}`);
    const endDateTime = new Date(`${today}T${formatTimeString(endTime)}`);
    
    // Si el horario cruza la medianoche (ej. 22:00 a 06:00)
    if (endDateTime <= startDateTime) {
        endDateTime.setDate(endDateTime.getDate() + 1);
    }
    
    // Comparar con la hora actual
    return currentDate >= startDateTime && currentDate <= endDateTime;
}

/**
 * Formatea una cadena de tiempo para asegurar el formato HH:MM:SS
 * @param {string} timeString - Cadena de tiempo en formato 'HH:MM' o 'HH:MM:SS'
 * @returns {string} - Cadena de tiempo en formato 'HH:MM:SS'
 */
function formatTimeString(timeString) {
    const parts = timeString.split(':');
    
    // Asegurar que tenemos horas y minutos
    if (parts.length < 2) {
        throw new Error('Formato de hora inválido. Use HH:MM o HH:MM:SS');
    }
    
    // Agregar segundos si no están presentes
    if (parts.length === 2) {
        return `${timeString}:00`;
    }
    
    return timeString;
}

export default validationMiddleware;
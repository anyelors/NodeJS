import { body, validationResult } from 'express-validator';

export const validarActLibro = [
  body('titulo')
    .notEmpty().withMessage('El título es obligatorio'),
  body('autor')
    .notEmpty().withMessage('El autor es obligatorio'),
  body('anio')
    .isInt().isFloat({ gt: 0 }).withMessage('El año debe ser un número entero positivo'),
  body('disponible')
    .isBoolean().withMessage('Disponible debe de ser un valor booleano'),  
  (req, res, next) => {
    console.log("Cuerpo de la solicitud:", req.body);
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      return res.status(400).json({ errores: errores.array() });
    }
    next();
  }
];
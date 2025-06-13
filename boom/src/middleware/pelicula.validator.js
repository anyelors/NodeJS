import { body, validationResult } from 'express-validator';

const fechaActual = new Date();
const añoActual = fechaActual.getFullYear();

export const validarPelicula = [
  body('titulo')
    .notEmpty().withMessage('El título de la pelicula es obligatorio'),
  body('director')
    .notEmpty().withMessage('El director es obligatorio'),
  body('anio').notEmpty().withMessage('El año de estreno es obligatorio')
    .isInt({ min: 1900, max: añoActual }).withMessage('El año debe ser valido'),
  body('genero')
    .notEmpty().withMessage('El genero de la pelicula es obligatorio'),
  body('stock').isInt({ min: 0 }).withMessage('El stock como minimo debe de ser 0'),  
  (req, res, next) => {
    console.log("Cuerpo de la solicitud:", req.body);
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      return res.status(400).json({ errores: errores.array() });
    }
    next();
  }
];
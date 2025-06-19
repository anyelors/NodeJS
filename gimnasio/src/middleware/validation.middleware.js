import { body, validationResult } from 'express-validator';

export const validarRegistro = [
  body('username')
    .notEmpty().withMessage('Usuario obligatorio')
    .isAlphanumeric().withMessage('Solo se permiten letras y números')
    .isLength({ min: 4, max: 20 }).withMessage('Debe tener entre 3 y 20 caracteres'),
  body('email').isEmail().withMessage('Debes introducir un correo válido'),  
  body('password')
    .isLength({ min: 6 }).withMessage('Contraseña demasiado corta'),
  body('role')
    .notEmpty().withMessage('El rol es obligatorio'),  
  (req, res, next) => {
    console.log("Cuerpo de la solicitud:", req.body);
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      return res.status(400).json({ errores: errores.array() });
    }
    next();
  }
];

export const validarClase = [
  body('nombre')
    .notEmpty().withMessage('Nombre de clase es obligatorio'),
  body('horario')
    .notEmpty().withMessage('Horario de clase es obligatorio'),
  body('plazas')
    .notEmpty().withMessage('Número de plazas es obligatorio'),  
  (req, res, next) => {
    console.log("Cuerpo de la solicitud:", req.body);
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      return res.status(400).json({ errores: errores.array() });
    }
    next();
  }
];

export const validarInscripcion = [
  body('nombre')
    .notEmpty().withMessage('Nombre de clase es obligatorio'),  
  (req, res, next) => {
    console.log("Cuerpo de la solicitud:", req.body);
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      return res.status(400).json({ errores: errores.array() });
    }
    next();
  }
];
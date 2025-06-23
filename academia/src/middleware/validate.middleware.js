import { body, validationResult } from 'express-validator';

export const validarRegistro = [
  body('nombre')
    .notEmpty().withMessage('Usuario obligatorio'),
  body('username')
    .notEmpty().withMessage('Usuario obligatorio')
    .isAlphanumeric().withMessage('Solo se permiten letras y números')
    .isLength({ min: 4, max: 20 }).withMessage('Debe tener entre 3 y 20 caracteres'),
  body('password')
    .isLength({ min: 6 }).withMessage('Contraseña demasiado corta'),
  body('rol')
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

export const validarLogin = [
  body('username')
    .notEmpty().withMessage('Usuario obligatorio'),
  body('password')
    .notEmpty().withMessage('Password obligatorio'),  
  (req, res, next) => {
    console.log("Cuerpo de la solicitud:", req.body);
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      return res.status(400).json({ errores: errores.array() });
    }
    next();
  }
];

export const validarCurso = [
  body('nombre')
    .notEmpty().withMessage('Nombre de curso es obligatorio'),  
  (req, res, next) => {
    console.log("Cuerpo de la solicitud:", req.body);
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      return res.status(400).json({ errores: errores.array() });
    }
    next();
  }
];

export const validarAsignatura = [
  body('nombre')
    .notEmpty().withMessage('Nombre de asignatura es obligatorio'),
  body('curso_id')
    .notEmpty().withMessage('Codigo del curso es obligatorio'),  
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
  body('username')
    .notEmpty().withMessage('Username es obligatorio'),
  body('curso_id')
    .notEmpty().withMessage('Codigo del curso es obligatorio'),   
  (req, res, next) => {
    console.log("Cuerpo de la solicitud:", req.body);
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      return res.status(400).json({ errores: errores.array() });
    }
    next();
  }
];

export const validarNota = [
  body('username')
    .notEmpty().withMessage('Username es obligatorio'),
  body('asignatura_id')
    .notEmpty().withMessage('Codigo de la asignatura es obligatorio'),
  body('nota')
    .isInt({ min: 0, max: 10 }).withMessage('El nota debe ser un número entre 0 y 10'),     
  (req, res, next) => {
    console.log("Cuerpo de la solicitud:", req.body);
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      return res.status(400).json({ errores: errores.array() });
    }
    next();
  }
];
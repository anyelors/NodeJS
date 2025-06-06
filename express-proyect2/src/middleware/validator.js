import { body, validationResult } from 'express-validator';

export const validator = [
  body('nombre')
    .notEmpty().withMessage('Nombre obligatorio'),
  body('usuario')
    .notEmpty().withMessage('Usuario obligatorio')
    .isAlphanumeric().withMessage('Solo se permiten letras y números')
    .isLength({ min: 5 }).withMessage('Usuario debe tener como minimo 5 caracteres'),
  body('password')
    .isLength({ min: 8 }).withMessage('Contraseña demasiado corta'),  
  body('email').isEmail().withMessage('Debes introducir un correo válido'),
  body('edad')
    .isInt({ min: 18 }).withMessage('Debes tener al menos 18 años'),
  (req, res, next) => {
    console.log("Cuerpo de la solicitud:", req.body);
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      return res.status(400).json({ errores: errores.array() });
    }
    next();
  }
];
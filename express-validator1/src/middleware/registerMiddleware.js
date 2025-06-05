import { body, validationResult } from 'express-validator';

export const validarRegistro = [
  body('usuario')
    .notEmpty().withMessage('Usuario obligatorio')
    .isAlphanumeric().withMessage('Solo se permiten letras y números')
    .isLength({ min: 3, max: 20 }).withMessage('Debe tener entre 3 y 20 caracteres'),
  body('email').isEmail().withMessage('Debes introducir un correo válido'),
  body('password')
    .isLength({ min: 6 }).withMessage('Contraseña demasiado corta'),
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
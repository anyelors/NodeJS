import { body, validationResult } from 'express-validator';

export const validarUsuario = [
  body('nombre')
    .notEmpty().withMessage('El nombre de usuario es obligatorio'),
  body('apellido')
    .notEmpty().withMessage('El apellido de usuario es obligatorio'),
  body('email').isEmail().withMessage('El email no es valido'),
  (req, res, next) => {
    console.log("Cuerpo de la solicitud:", req.body);
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      return res.status(400).json({ errores: errores.array() });
    }
    next();
  }
];
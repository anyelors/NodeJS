import { body, validationResult } from 'express-validator';

export const validarProducto = [
  body('nombre')
    .notEmpty().withMessage('El nombre del producto es obligatorio'),
  body('precio')
    .notEmpty().withMessage('El precio del producto es obligatorio').isCurrency( {digits_after_decimal: [2]} ).withMessage('El precio debe tener hasta dos decimales'),
  (req, res, next) => {
    console.log("Cuerpo de la solicitud:", req.body);
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      return res.status(400).json({ errores: errores.array() });
    }
    next();
  }
];
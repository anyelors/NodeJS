import { body, validationResult } from 'express-validator';

export const validarPedido = [
  body('nombre')
    .notEmpty().withMessage('El nombre del producto es obligatorio'),
  body('cantidad').notEmpty().withMessage('La cantidad es obligatoria')
    .isInt({ min: 1 }).withMessage('La cantidad como minimo debe de ser 1'),
  (req, res, next) => {
    console.log("Cuerpo de la solicitud:", req.body);
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      return res.status(400).json({ errores: errores.array() });
    }
    next();
  }
];
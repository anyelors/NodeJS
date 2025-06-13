import { Router } from 'express';
import {
  obtenerProductos,
  agregarProducto,
  actualizarProducto,
  eliminarProducto
} from '../controllers/productos.controller.js';
import { validarProducto } from '../middleware/productos.validator.js';

const router = Router();

router.get('/', obtenerProductos);
router.get('/:id', obtenerProductos);
router.post('/', validarProducto, agregarProducto);
router.put('/:id', validarProducto, actualizarProducto);
router.delete('/:id', eliminarProducto);

export default router;

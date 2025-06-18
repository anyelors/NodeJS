import { Router } from 'express';
import { verificarToken, soloAdmin } from '../middlewares/auth.middleware.js';
import { validarProducto } from '../middlewares/productos.validator.js';
import { validarPedido } from '../middlewares/pedido.validator.js';
import { crearProducto, listarProductos, eliminarProducto, realizarPedido } from '../controllers/productos.controller.js';

const router = Router();

router.get('/productos', verificarToken, listarProductos);
router.post('/productos', validarProducto, verificarToken, soloAdmin, crearProducto);
router.delete('/productos/:id', eliminarProducto);
router.post('/pedidos', validarPedido, verificarToken, realizarPedido);

export default router;

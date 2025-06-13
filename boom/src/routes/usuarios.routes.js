import { Router } from 'express';
import {
  obtenerUsuarios,
  agregarUsuario,
  actualizarUsuario,
  eliminarUsuario
} from '../controllers/usuarios.controller.js';
import { validarUsuario } from '../middleware/usuario.validator.js';

const router = Router();

router.get('/', obtenerUsuarios);
router.get('/:id', obtenerUsuarios);
router.post('/', validarUsuario, agregarUsuario);
router.put('/:id', validarUsuario, actualizarUsuario);
router.delete('/:id', eliminarUsuario);

export default router;

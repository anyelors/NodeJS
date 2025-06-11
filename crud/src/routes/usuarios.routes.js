import express from 'express';
import {
  getUsuarios,
  getUsuario,
  crearUsuario,
  actualizarUsuario,
  borrarUsuario,
  borrarUsuarioByName
} from '../controllers/usuarios.controller.js';

const router = express.Router();

router.get('/', getUsuarios);
router.get('/:id', getUsuario);
router.post('/', crearUsuario);
router.put('/:id', actualizarUsuario);
router.delete('/:id', borrarUsuario);
router.delete('/deletebyname/:name', borrarUsuarioByName);

export default router;

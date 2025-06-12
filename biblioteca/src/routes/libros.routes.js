import { Router } from 'express';
import {
  obtenerLibros,
  agregarLibro,
  actualizarLibro,
  eliminarLibro,
  prestarLibro
} from '../controllers/libros.controller.js';
import { validarLibro } from '../middleware/libros.validator.js';
import { validarActLibro } from '../middleware/actualizarLibros.validator.js';

const router = Router();

router.get('/', obtenerLibros);
router.get('/:id', obtenerLibros);
router.post('/', validarLibro, agregarLibro);
router.put('/:id', validarActLibro, actualizarLibro);
router.delete('/:id', eliminarLibro);
router.patch('/prestar/:id', prestarLibro);
router.patch('/devolver/:id', prestarLibro);

export default router;

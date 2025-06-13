import { Router } from 'express';
import {
  obtenerPeliculas,
  agregarPelicula,
  actualizarPelicula,
  eliminarPelicula,
  alquilarPelicula,
  devolverPelicula
} from '../controllers/peliculas.controller.js';
import { validarPelicula } from '../middleware/pelicula.validator.js';

const router = Router();

router.get('/', obtenerPeliculas);
router.get('/:id', obtenerPeliculas);
router.post('/', validarPelicula, agregarPelicula);
router.put('/:id', validarPelicula, actualizarPelicula);
router.delete('/:id', eliminarPelicula);
router.patch('/alquilar/:id', alquilarPelicula);
router.patch('/devolver/:id', devolverPelicula);

export default router;

import { Router } from 'express';
import {
  crearClase,
  listarClases,
  inscribirseClase,
  eliminarClase
} from '../controllers/gimnasio.controller.js';
import {
  validarClase,
  validarInscripcion
} from '../middleware/validation.middleware.js';
import { verificarToken, soloAdmin } from '../middleware/auth.middleware.js';

const router = Router();

router.get('/clases', verificarToken, listarClases);
router.post('/clases', verificarToken, soloAdmin, validarClase, crearClase);
router.post('/inscribirse', verificarToken, validarInscripcion, inscribirseClase);
router.delete('/clases/:id', eliminarClase);

export default router;


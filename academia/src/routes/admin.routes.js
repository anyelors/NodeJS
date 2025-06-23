import { Router } from 'express';
import { crearCurso, 
         crearAsignatura, 
         inscribirAlumno, 
         registrarNota,
         eliminarNota } from '../controllers/admin.controller.js';
import { verificarToken, soloAdmin } from '../middleware/auth.middleware.js';
import {
  validarCurso,
  validarAsignatura,
  validarInscripcion,
  validarNota
} from '../middleware/validate.middleware.js';

const router = Router();

router.post('/curso', verificarToken, soloAdmin, validarCurso, crearCurso);
router.post('/asignatura', verificarToken, soloAdmin, validarAsignatura, crearAsignatura);
router.post('/inscribir', verificarToken, soloAdmin, validarInscripcion, inscribirAlumno);
router.post('/nota', verificarToken, soloAdmin, validarNota, registrarNota);
router.delete('/eliminar-nota/:id', verificarToken, soloAdmin, eliminarNota);

export default router;

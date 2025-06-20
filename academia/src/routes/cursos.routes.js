import { Router } from 'express';
import { verificarToken, soloAlumno } from '../middleware/auth.middleware.js';
import { listarCursos,
         listarAsignaturas, 
         misCursos, 
         misNotas } from '../controllers/cursos.controller.js';

const router = Router();

router.get('/', verificarToken, listarCursos); // GET /cursos
router.get('/asignaturas', verificarToken, listarAsignaturas); // GET /cursos/asignaturas
router.get('/mis-cursos', verificarToken, soloAlumno, misCursos); // GET /cursos/mis-cursos
router.get('/mis-notas', verificarToken, soloAlumno, misNotas); // GET /cursos/mis-notas

export default router;

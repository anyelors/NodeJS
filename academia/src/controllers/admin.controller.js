import { academiaDB } from '../db/db.js';

export const crearCurso = async (req, res) => {
  const { nombre } = req.body;

  const conn = await academiaDB.getConnection();
  try {
    await conn.query('INSERT INTO cursos (nombre) VALUES (?)', [nombre]);
    res.status(201).json({ message: 'Curso creado' });
  } catch (error) {
    console.error("❌ Error al crear curso:", error.message);
    res.status(500).json({ error: "Error al crear curso" });
  } finally {
    if (conn) conn.release();
  }  
};

export const crearAsignatura = async (req, res) => {
  const { nombre, curso_id } = req.body;

  const conn = await academiaDB.getConnection();
  try {
    await conn.query('INSERT INTO asignaturas (nombre, curso_id) VALUES (?, ?)', [nombre, curso_id]);
    res.status(201).json({ message: 'Asignatura creada' });
  } catch (error) {
    console.error("❌ Error al crear asignatura:", error.message);
    res.status(500).json({ error: "Error al crear asignatura" });
  } finally {
    if (conn) conn.release();
  }  
};

export const inscribirAlumno = async (req, res) => {
  const { curso_id } = req.body;
  const usuario_id = req.usuario.id;

  const conn = await academiaDB.getConnection();
  try {
    await conn.query('INSERT INTO inscripciones (usuario_id, curso_id) VALUES (?, ?)', [usuario_id, curso_id]);
    res.status(201).json({ message: 'Inscripción creada' });
  } catch (error) {
    console.error("❌ Error al crear inscripción:", error.message);
    res.status(500).json({ error: "Error al crear inscripción" });
  } finally {
    if (conn) conn.release();
  }  
};

export const registrarNota = async (req, res) => {
  const { asignatura_id, nota } = req.body;
  const usuario_id = req.usuario.id;

  const conn = await academiaDB.getConnection();
  try {
    await conn.query('INSERT INTO notas (usuario_id, asignatura_id, nota) VALUES (?, ?, ?)', [usuario_id, asignatura_id, nota]);
    res.status(201).json({ message: 'Nota creada' });
  } catch (error) {
    console.error("❌ Error al crear la nota:", error.message);
    res.status(500).json({ error: "Error al crear la nota" });
  } finally {
    if (conn) conn.release();
  }  
};

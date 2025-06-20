import { academiaDB } from '../db/db.js';

export const listarCursos = async (req, res) => {
  const conn = await academiaDB.getConnection();
  try {
    const [rows] = await conn.execute('SELECT * FROM cursos');
    res.json(rows);
  } catch (error) {
    console.error("❌ Error al obtener cursos:", error.message);
    res.status(500).json({ error: "Error al obtener cursos" });
  } finally {
    if (conn) conn.release();
  }  
};

export const listarAsignaturas = async (req, res) => {
  const conn = await academiaDB.getConnection();
  try {
    const [rows] = await conn.execute(`select c.id, c.nombre, a.id, a.nombre
                                         from academia_db.asignaturas a, 
                                              academia_db.cursos c
                                        where  a.curso_id = c.id
                                        order by 2 asc`);
    rows.length
    ? res.json(rows)
    : res.status(404).json({ error: "No existen asignaturas" });
  } catch (error) {
    console.error("❌ Error al obtener asignaturas:", error.message);
    res.status(500).json({ error: "Error al obtener asignaturas" });
  } finally {
    if (conn) conn.release();
  }  
};

export const misCursos = async (req, res) => {
  const usuario_id = req.usuario.id;
  const conn = await academiaDB.getConnection();
  try {
    const [rows] = await conn.execute(`select c.id, c.nombre
                                         from academia_db.inscripciones i,
                                              academia_db.usuarios u,
                                              academia_db.cursos c
                                        where i.usuario_id = ?
                                          and i.usuario_id = u.id
                                          and i.curso_id = c.id;`, [usuario_id]);
    rows.length
    ? res.json(rows)
    : res.status(404).json({ error: "Usuario no tiene cursos" });
  } catch (error) {
    console.error("❌ Error al obtener mis cursos:", error.message);
    res.status(500).json({ error: "Error al obtener mis cursos" });
  } finally {
    if (conn) conn.release();
  }  
};

export const misNotas = async (req, res) => {
  const usuario_id = req.usuario.id;
  const conn = await academiaDB.getConnection();
  try {
    const [rows] = await conn.execute(`select a.nombre, n.nota
                                         from academia_db.notas n,
                                             academia_db.asignaturas a,
                                             academia_db.usuarios u
                                       where n.usuario_id = ?
                                         and n.usuario_id = u.id
                                         and n.asignatura_id = a.id
                                       order by 1 asc;`, [usuario_id]);
    rows.length
    ? res.json(rows)
    : res.status(404).json({ error: "Usuario no tiene notas" });
  } catch (error) {
    console.error("❌ Error al obtener mis cursos:", error.message);
    res.status(500).json({ error: "Error al obtener mis cursos" });
  } finally {
    if (conn) conn.release();
  }  
};

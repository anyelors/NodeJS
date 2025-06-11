import { pool } from "../models/conexion.js";

// GET - Leer todos
export const getUsuarios = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM usuarios");
  res.json(rows);
};

// GET - Leer uno
export const getUsuario = async (req, res) => {
  const vId = req.params.id;
  if (!isNaN(vId)) {
    const [rows] = await pool.query("SELECT * FROM usuarios WHERE id = ?", [
      req.params.id,
    ]);
    rows.length
      ? res.json(rows[0])
      : res.status(404).json({ error: "No encontrado" });
  } else {
    const [rows] = await pool.query("SELECT * FROM usuarios WHERE nombre = ?", [
      req.params.id,
    ]);
    rows.length
      ? res.json(rows)
      : res.status(404).json({ error: "No encontrado" });
  }
};

// POST - Crear
export const crearUsuario = async (req, res) => {
  const { nombre, email } = req.body;
  const [result] = await pool.query(
    "INSERT INTO usuarios (nombre, email) VALUES (?, ?)",
    [nombre, email]
  );
  res.status(201).json({ id: result.insertId, nombre, email });
};

// PUT - Actualizar
export const actualizarUsuario = async (req, res) => {
  const { nombre, email } = req.body;
  await pool.query("UPDATE usuarios SET nombre = ?, email = ? WHERE id = ?", [
    nombre,
    email,
    req.params.id,
  ]);
  res.json({ success: true });
};

// DELETE - Eliminar Usuario by ID
export const borrarUsuario = async (req, res) => {
  const vId = req.params.id;
  if (!isNaN(vId)) {
    await pool.query("DELETE FROM usuarios WHERE id = ?", [req.params.id]);
  } else {
    await pool.query("DELETE FROM usuarios WHERE nombre = ?", [req.params.id]);
  }
  res.json({ success: true });
};

// DELETE - Eliminar Usuario by Name
export const borrarUsuarioByName = async (req, res) => {
  let conn = null;
  try {
    conn = await pool.getConnection();

    await conn.query("START TRANSACTION");
    // Ahora puedes realizar tus consultas DELETE o UPDATE sin la restricción
    const deleteResult = await conn.execute(
      "DELETE FROM usuarios WHERE nombre = ?;",
      [req.params.name]
    );
    console.log(`${deleteResult[0].affectedRows} registros eliminados.`);
    res.json({ success: true, msg: `${deleteResult[0].affectedRows} registros eliminados.` });
    await conn.query("COMMIT");
  } catch (error) {
    if (conn) await conn.query("ROLLBACK");
    throw error;
  } finally {
    if (conn) conn.release();
  }
};

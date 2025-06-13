import { db } from "../db/connection.js";

// GET - Obtener todos los usuarios
export const obtenerUsuarios = async (req, res) => {
  const vId = req.params.id;
  let conn;
  
  try {
    conn = await db.getConnection();
    let [usuarios] = [];
    if (isNaN(vId)) {
      [usuarios] = await conn.query("SELECT * FROM usuarios");
    } else {
      [usuarios] = await conn.query("SELECT * FROM usuarios WHERE id = ?", [vId]);      
    }  
    
    usuarios.length
    ? res.json(usuarios)
    : res.status(404).json({ error: "Usuario no encontrado" });
  } catch (error) {
    console.error("❌ Error al obtener usuarios:", error.message);
    res.status(500).json({ error: "Error al obtener usuarios" });
  } finally {
    if (conn) conn.release();
  }
};

// POST - Agregar un nuevo usuario
export const agregarUsuario = async (req, res) => {
  const { nombre, apellido, email } = req.body;
  let conn;
  try {
    conn = await db.getConnection();
    const [resultado] = await conn.query(
      "INSERT INTO usuarios (nombre, apellido, email) VALUES (?, ?, ?)",
      [nombre, apellido, email]
    );

    res.status(201).json({ mensaje: "Usuario creado correctamente", id: resultado.insertId, nombre, apellido, email });
  } catch (error) {
    console.error("❌ Error al agregar usuario:", error.message);
    res.status(500).json({ error: "Error al agregar usuario" });
  } finally {
    if (conn) conn.release();
  }
};

// PUT - Actualizar un usuario
export const actualizarUsuario = async (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, email } = req.body;
  let conn;
  try {
    conn = await db.getConnection();

    const [resultado] = await conn.execute(
      "UPDATE usuarios SET nombre=?, apellido=?, email=? WHERE id=?",
      [nombre, apellido, email, id]
    );

    if (resultado.affectedRows === 0) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.json({ mensaje: "Usuario actualizado" });
  } catch (error) {
    console.error("❌ Error al actualizar usuario:", error.message);
    res.status(500).json({ error: "Error al actualizar usuario" });
  } finally {
    if (conn) conn.release();
  }
};

// DELETE - Eliminar un usuario
export const eliminarUsuario = async (req, res) => {
  const { id } = req.params;
  let conn;
  try {
    conn = await db.getConnection();

    const deleteResult = await conn.execute("DELETE FROM usuarios WHERE id = ?;", [id]);

    if (deleteResult[0].affectedRows === 0) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.json({ mensaje: `Usuario eliminado correctamente` });
  } catch (error) {
    console.error("❌ Error al eliminar usuario:", error.message);
    res.status(500).json({ error: "Error al eliminar usuario" });
  } finally {
    if (conn) conn.release();
  }
};

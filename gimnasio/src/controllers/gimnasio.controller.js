import { gimnasioDB } from '../db/gimnasio.db.js';

export const listarClases = async (req, res) => {
  const conn = await gimnasioDB.getConnection();
  try {
    const [rows] = await conn.execute('SELECT * FROM clases');
    res.json(rows);
  } catch (error) {
    console.error("❌ Error al obtener clases:", error.message);
    res.status(500).json({ error: "Error al obtener clases" });
  } finally {
    if (conn) conn.release();
  }  
};

export const crearClase = async (req, res) => {
  const { nombre, horario, plazas } = req.body;

  const conn = await gimnasioDB.getConnection();
  try {
    await conn.query('INSERT INTO clases (nombre, horario, plazas) VALUES (?, ?, ?)', [nombre, horario, plazas]);
    res.status(201).json({ message: 'Clase creada' });
  } catch (error) {
    console.error("❌ Error al crear clase:", error.message);
    res.status(500).json({ error: "Error al crear clase" });
  } finally {
    if (conn) conn.release();
  }  
};

export const eliminarClase = async (req, res) => {
  const { id } = req.params;
  
  const conn = await gimnasioDB.getConnection();
  try {
    const deleteResult = await conn.execute("DELETE FROM clases WHERE id = ?;", [id]);

    if (deleteResult[0].affectedRows === 0) {
      return res.status(404).json({ error: "Clase no encontrada" });
    }

    res.json({ mensaje: `Clase con ID ${id} eliminada correctamente` });
  } catch (error) {
    console.error("❌ Error al eliminar clase:", error.message);
    res.status(500).json({ error: "Error al eliminar clase" });
  } finally {
    if (conn) conn.release();
  }
};

export const inscribirseClase = async (req, res) => {
  const { nombre } = req.body;
  const usuario_id = req.usuario.id;
  
  const conn = await gimnasioDB.getConnection();
  try {
    const [clase] = await conn.query('SELECT id, plazas from clases WHERE nombre = ? ', [nombre]);

    if (clase.length === 0) {
      return res.status(404).json({ error: "Clase no encontrada" });
    }

    if (clase[0].plazas <= 0) {
      return res.status(400).json({ error: "No hay plazas disponibles para esta clase" });
    }

    await conn.execute('INSERT INTO inscripciones (usuario_id, clase_id, fecha) VALUES (?, ?, ?)', [usuario_id, clase[0].id, NOW()]); 
    await conn.execute("UPDATE clases SET plazas = plazas - 1 WHERE id=?", [clase[0].id]);

    res.status(201).json({ message: `Inscripción realizada correctamente para la clase: ${nombre}` });
  } catch (error) {
    console.error("❌ Error al realizar inscripción:", error.message);
    res.status(500).json({ error: "Error al realizar inscripción" });
  } finally {
    if (conn) conn.release();
  }   
};

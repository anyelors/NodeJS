import { db } from "../db/connection.js";

// GET - Obtener todos los libros
export const obtenerLibros = async (req, res) => {
  const vId = req.params.id;
  let conn;
  
  try {
    conn = await db.getConnection();
    let [libros] = [];
    if (isNaN(vId)) {
      [libros] = await conn.query("SELECT * FROM libros");
    } else {
      [libros] = await conn.query("SELECT * FROM libros WHERE id = ?", [vId]);      
    }  
    
    libros.length
    ? res.json(libros)
    : res.status(404).json({ error: "Libro No Encontrado" });
  } catch (error) {
    console.error("❌ Error al obtener libros:", error.message);
    res.status(500).json({ error: "Error al obtener libros" });
  } finally {
    if (conn) conn.release();
  }
};

// POST - Agregar un nuevo libro
export const agregarLibro = async (req, res) => {
  const { titulo, autor, anio } = req.body;
  let conn;
  try {
    conn = await db.getConnection();
    const [resultado] = await conn.query(
      "INSERT INTO libros (titulo, autor, anio) VALUES (?, ?, ?)",
      [titulo, autor, anio]
    );

    res.status(201).json({ mensaje: "Libro agregado correctamente", id: resultado.insertId, titulo, autor, anio });
  } catch (error) {
    console.error("❌ Error al agregar libro:", error.message);
    res.status(500).json({ error: "Error al agregar libro" });
  } finally {
    if (conn) conn.release();
  }
};

// PUT - Actualizar un libro
export const actualizarLibro = async (req, res) => {
  const { id } = req.params;
  const { titulo, autor, anio, disponible } = req.body;
  let conn;
  try {
    conn = await db.getConnection();

    const [resultado] = await conn.execute(
      "UPDATE libros SET titulo=?, autor=?, anio=?, disponible=? WHERE id=?",
      [titulo, autor, anio, disponible, id]
    );

    if (resultado.affectedRows === 0) {
      return res.status(404).json({ error: "Libro no encontrado" });
    }

    res.json({ message: "Libro actualizado" });
  } catch (error) {
    console.error("❌ Error al actualizar libro:", error.message);
    res.status(500).json({ error: "Error al actualizar libro" });
  } finally {
    if (conn) conn.release();
  }
};

// DELETE - Eliminar un libro
export const eliminarLibro = async (req, res) => {
  const { id } = req.params;
  let conn;
  try {
    conn = await db.getConnection();

    const deleteResult = await conn.execute("DELETE FROM libros WHERE id = ?;", [id]);

    if (deleteResult[0].affectedRows === 0) {
      return res.status(404).json({ error: "Libro no encontrado" });
    }

    res.json({ message: `Libro eliminado correctamente` });
  } catch (error) {
    console.error("❌ Error al eliminar libro:", error.message);
    res.status(500).json({ error: "Error al eliminar libro" });
  } finally {
    if (conn) conn.release();
  }
};

// PATCH - Actualizar Disponible de un libro
export const prestarLibro = async (req, res) => {
  const vId = req.params.id;
  let conn;
  try {
    conn = await db.getConnection();

    const [results] = await conn.query("SELECT disponible FROM libros WHERE id = ?", [vId]);
    if (!results.length) return res.status(404).json({ error: 'Libro no encontrado' });

    let disponible = !!results[0].disponible;
    let ruta = req.url.split('/');
    
    if (ruta[1] === "prestar"){
        if (disponible === false)
            return res.status(400).json({ error: "Libro no disponible" });
        
        disponible = false;    
    }
    
    if (ruta[1] === "devolver"){
        if (disponible === true)
            return res.status(400).json({ error: "Libro ya fue devuelto" });
        
        disponible = true;    
    }

    const [resultado] = await conn.execute("UPDATE libros SET disponible=? WHERE id=?",
      [disponible, vId]
    );

    res.json({ message: "Disponibilidad del Libro actualizada" });
  } catch (error) {
    console.error("❌ Error al actualizar libro:", error.message);
    res.status(500).json({ error: "Error al actualizar libro" });
  } finally {
    if (conn) conn.release();
  }
};

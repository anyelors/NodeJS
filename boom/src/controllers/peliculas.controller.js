import { db } from "../db/connection.js";

// GET - Obtener todos los peliculas
export const obtenerPeliculas = async (req, res) => {
  const vId = req.params.id;
  let conn;
  
  try {
    conn = await db.getConnection();
    let [peliculas] = [];
    if (isNaN(vId)) {
      [peliculas] = await conn.query("SELECT * FROM peliculas");
    } else {
      [peliculas] = await conn.query("SELECT * FROM peliculas WHERE id = ?", [vId]);      
    }  
    
    peliculas.length
    ? res.json(peliculas)
    : res.status(404).json({ error: "pelicula No Encontrado" });
  } catch (error) {
    console.error("❌ Error al obtener peliculas:", error.message);
    res.status(500).json({ error: "Error al obtener peliculas" });
  } finally {
    if (conn) conn.release();
  }
};

// POST - Agregar un nuevo pelicula
export const agregarPelicula = async (req, res) => {
  const { titulo, director, anio, genero, stock } = req.body;
  let conn;
  try {
    conn = await db.getConnection();
    const [resultado] = await conn.query(
      "INSERT INTO peliculas (titulo, director, anio, genero, stock) VALUES (?, ?, ?, ?, ?)",
      [titulo, director, anio, genero, stock]
    );

    res.status(201).json({ mensaje: "Pelicula creada correctamente", id: resultado.insertId, titulo, director, anio, genero, stock });
  } catch (error) {
    console.error("❌ Error al agregar pelicula:", error.message);
    res.status(500).json({ error: "Error al agregar pelicula" });
  } finally {
    if (conn) conn.release();
  }
};

// PUT - Actualizar un pelicula
export const actualizarPelicula = async (req, res) => {
  const { id } = req.params;
  const { titulo, director, anio, genero, stock } = req.body;
  let conn;
  try {
    conn = await db.getConnection();

    const [resultado] = await conn.execute(
      "UPDATE peliculas SET titulo=?, director=?, anio=?, genero=?, stock=? WHERE id=?",
      [titulo, director, anio, genero, stock, id]
    );

    if (resultado.affectedRows === 0) {
      return res.status(404).json({ error: "Pelicula no encontrado" });
    }

    res.json({ mensaje: "Pelicula se actualizo correctamente" });
  } catch (error) {
    console.error("❌ Error al actualizar pelicula:", error.message);
    res.status(500).json({ error: "Error al actualizar pelicula" });
  } finally {
    if (conn) conn.release();
  }
};

// DELETE - Eliminar un pelicula
export const eliminarPelicula = async (req, res) => {
  const { id } = req.params;
  let conn;
  try {
    conn = await db.getConnection();

    const deleteResult = await conn.execute("DELETE FROM peliculas WHERE id = ?;", [id]);

    if (deleteResult[0].affectedRows === 0) {
      return res.status(404).json({ error: "Pelicula no encontrado" });
    }

    res.json({ mensaje: `Pelicula se elimino correctamente` });
  } catch (error) {
    console.error("❌ Error al eliminar pelicula:", error.message);
    res.status(500).json({ error: "Error al eliminar pelicula" });
  } finally {
    if (conn) conn.release();
  }
};

// PATCH - Devolver de un pelicula
export const devolverPelicula = async (req, res) => {
  const { id } = req.params;
  let conn, msg;
  try {
    conn = await db.getConnection();

    const [results] = await conn.query("SELECT fecha_devolucion, pelicula_id FROM alquilado WHERE id = ?", [id]);
    if (!results.length) return res.status(404).json({ error: 'Alquiler de pelicula no encontrado' });
    
    if (!results[0].fecha_devolucion) {
      await conn.execute("UPDATE alquilado SET fecha_devolucion = NOW() WHERE id=?",
        [id]
      );
      
      await conn.execute("UPDATE peliculas SET stock = stock + 1 WHERE id=?",
        [results[0].pelicula_id]
      );
      msg = "Pelicula devuelta correctamente";
    } else {
      msg = "Pelicula ya habia sido devuelta";
    }

    res.json({ message: msg });
  } catch (error) {
    console.error("❌ Error al actualizar pelicula:", error.message);
    res.status(500).json({ error: "Error al actualizar pelicula" });
  } finally {
    if (conn) conn.release();
  }
};

// PATCH - Alquilar pelicula
export const alquilarPelicula = async (req, res) => {
  const { id } = req.params;
  const { usuario_id } = req.body;
  let conn;
  try {
    conn = await db.getConnection();

    const [results] = await conn.query("SELECT stock FROM peliculas WHERE id = ?", [id]);
    if (!results.length) return res.status(404).json({ error: 'Pelicula no existe' });
    
    if (results[0].stock <= 0)
      return res.status(400).json({ error: "Pelicula no disponible" });
        
    await conn.query(
      "INSERT INTO alquilado (usuario_id, pelicula_id, fecha_alquiler) VALUES (?, ?, NOW())",
      [usuario_id, id]
    );

    await conn.execute("UPDATE peliculas SET stock = stock - 1 WHERE id=?",
      [id]
    );

    res.json({ message: "Pelicula alquilada correctamente" });
  } catch (error) {
    console.error("❌ Error al actualizar pelicula:", error.message);
    res.status(500).json({ error: "Error al actualizar pelicula" });
  } finally {
    if (conn) conn.release();
  }
};

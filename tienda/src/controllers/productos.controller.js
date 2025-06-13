import { db } from "../db/connection.js";

// GET - Obtener uno o todos los productos
export const obtenerProductos = async (req, res) => {
  const vId = req.params.id;
  let conn;
  
  try {
    conn = await db.getConnection();
    let [productos] = [];
    if (isNaN(vId)) {
      [productos] = await conn.query("SELECT * FROM productos");
    } else {
      [productos] = await conn.query("SELECT * FROM productos WHERE id = ?", [vId]);      
    }  
    
    productos.length
    ? res.json(productos)
    : res.status(404).json({ error: "Producto No Encontrado" });
  } catch (error) {
    console.error("❌ Error al obtener productos:", error.message);
    res.status(500).json({ error: "Error al obtener productos" });
  } finally {
    if (conn) conn.release();
  }
};

// POST - Agregar un nuevo producto
export const agregarProducto = async (req, res) => {
  const { nombre, descripcion, precio, stock } = req.body;
  let conn;
  try {
    conn = await db.getConnection();
    const [resultado] = await conn.query(
      "INSERT INTO productos (nombre, descripcion, precio, stock) VALUES (?, ?, ?, ?)",
      [nombre, descripcion, precio, stock]
    );

    res.status(201).json({ mensaje: "Producto ingresado correctamente", id: resultado.insertId, nombre, descripcion, precio, stock });
  } catch (error) {
    console.error("❌ Error al agregar producto:", error.message);
    res.status(500).json({ error: "Error al agregar producto" });
  } finally {
    if (conn) conn.release();
  }
};

// PUT - Actualizar un producto
export const actualizarProducto = async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, precio, stock } = req.body;
  let conn;
  try {
    conn = await db.getConnection();

    const [resultado] = await conn.execute(
      "UPDATE productos SET nombre=?, descripcion=?, precio=?, stock=? WHERE id=?",
      [nombre, descripcion, precio, stock, id]
    );

    if (resultado.affectedRows === 0) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.json({ mensaje: "Producto actualizado" });
  } catch (error) {
    console.error("❌ Error al actualizar producto:", error.message);
    res.status(500).json({ error: "Error al actualizar producto" });
  } finally {
    if (conn) conn.release();
  }
};

// DELETE - Eliminar un producto
export const eliminarProducto = async (req, res) => {
  const { id } = req.params;
  let conn;
  try {
    conn = await db.getConnection();

    const deleteResult = await conn.execute("DELETE FROM productos WHERE id = ?;", [id]);

    if (deleteResult[0].affectedRows === 0) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.json({ mensaje: `Producto eliminado correctamente` });
  } catch (error) {
    console.error("❌ Error al eliminar producto:", error.message);
    res.status(500).json({ error: "Error al eliminar producto" });
  } finally {
    if (conn) conn.release();
  }
};

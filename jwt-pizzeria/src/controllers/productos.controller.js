import { negocioDB } from '../db/negocio.db.js';

export const listarProductos = async (req, res) => {
  const conn = await negocioDB.getConnection();
  try {
    const [rows] = await conn.query('SELECT * FROM productos');
    res.json(rows);
  } catch (error) {
    console.error("❌ Error al obtener productos:", error.message);
    res.status(500).json({ error: "Error al obtener productos" });
  } finally {
    if (conn) conn.release();
  }  
};

export const crearProducto = async (req, res) => {
  const { nombre, precio } = req.body;

  const conn = await negocioDB.getConnection();
  try {
    await conn.query('INSERT INTO productos (nombre, precio) VALUES (?, ?)', [nombre, precio]);
    res.status(201).json({ message: 'Producto creado' });
  } catch (error) {
    console.error("❌ Error al crear producto:", error.message);
    res.status(500).json({ error: "Error al crear producto" });
  } finally {
    if (conn) conn.release();
  }  
};

export const eliminarProducto = async (req, res) => {
  const { id } = req.params;
  
  const conn = await negocioDB.getConnection();
  try {
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

export const realizarPedido = async (req, res) => {
  const { nombre, cantidad } = req.body;
  const usuario_id = req.usuario.id;
  const usuarios_role = req.usuario.role;
  let descuento = 0;
  
  const conn = await negocioDB.getConnection();
  try {
    const [producto] = await conn.query('SELECT id, precio from productos WHERE nombre = ? ', [nombre]);
    await conn.query('INSERT INTO pedidos (usuario_id, producto_id, cantidad) VALUES (?, ?, ?)', [usuario_id, producto[0].id, cantidad]);
 
    producto[0].precio *= cantidad;
    if (usuarios_role === 'vip'){
      descuento = (producto[0].precio * 0.10);
    }  

    res.status(201).json({ message: `Pedido realizado: ${producto[0].precio} €, Descuento Aplicado: ${descuento} €, Total: ${producto[0].precio - descuento} €` });
  } catch (error) {
    console.error("❌ Error al realizar pedido:", error.message);
    res.status(500).json({ error: "Error al realizar pedido" });
  } finally {
    if (conn) conn.release();
  }   
};

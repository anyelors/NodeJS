const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const productos = [{ id: 1, nombre: "Camiseta", precio: 20 }];

// Endpoint GET para obtener un producto por ID
app.get('/productos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const producto = productos.find(p => p.id === id);
    
    if (producto) {
        res.json(producto);
    } else {
        res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
});

app.get("/productos", (req, res) => {
  res.json(productos)
});

app.post("/productos", (req, res) => {
  const nuevo = req.body;
  nuevo.id = productos.length + 1;
  productos.push(nuevo);
  res.status(201).json(nuevo);
});

app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});


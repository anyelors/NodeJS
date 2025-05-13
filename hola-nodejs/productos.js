async function buscar() {
  try {
    let productos = [];
    document.getElementById("productosList").innerHTML = "";
    const res = await fetch(`http://localhost:3000/productos`);

    if (!res.ok) {
      throw new Error("Error server");
    }
    console.log("Response status " + res.status);
    const data = await res.json();
    
    console.log(data);
    if (!Array.isArray(data)) {
      productos = [data];
    }

    productos.forEach((datos) => {
      const productoDiv = document.createElement("div");
      productoDiv.innerHTML = `
            <h3>${datos.nombre}</h3>
            <p><strong>ID:</strong> ${datos.id}</p>
            <p><strong>Precio:</strong> $${datos.precio}</p>
        `;
      productosList.appendChild(productoDiv);
    });
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

async function buscarPorID() {
  try {
    let productos = [];
    document.getElementById("productosList").innerHTML = "";
    const idP = document.getElementById("idP").value;
    const res = await fetch(`http://localhost:3000/productos/${idP}`);

    console.log("Response status " + res.status);
    const data = await res.json();

    if (!res.ok) {
      if (res.status === 404) {
        throw new Error(data.mensaje);
      }
      throw new Error("Error en la respuesta del servidor");
    }

    console.log(data);
    if (!Array.isArray(data)) {
      productos = [data];
    }

    productos.forEach((datos) => {
      const productoDiv = document.createElement("div");
      productoDiv.innerHTML = `
                <h3>${datos.nombre}</h3>
                <p><strong>ID:</strong> ${datos.id}</p>
                <p><strong>Precio:</strong> $${datos.precio}</p>
            `;
      productosList.appendChild(productoDiv);
    });
  } catch (error) {
    console.error(`${error}`);
  }
}

async function añadirProducto() {
  const nom_product = document.getElementById("nom_product").value;
  const precio_product = document.getElementById("precio_product").value;

  fetch("http://localhost:3000/productos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre: nom_product, precio: precio_product }),
  })
    .then((res) => res.json())
    .then((data) => console.log("Producto agregado:", data))
    .catch((error) => console.error("Error:", error));
}

/*
  fetch("http://localhost:3000/productos", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ nombre: "Zapatos", precio: 50 })
})
  .then(res => res.json())
  .then(data => console.log("Producto agregado:", data))
  .catch(error => console.error("Error:", error));

  fetch("http://localhost:3000/productos")
  .then(res => res.json())
  .then(data => console.log("Lista actualizada de productos:", data))
  .catch(error => console.error("Error:", error));
  */

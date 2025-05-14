async function buscar() {
  try {
    let productos = [];
    document.getElementById("productosList").innerHTML = "";
    const res = await fetch(`http://localhost:3000/productos`);

    if (!res.ok) {
      if (res.status === 404) {
        throw new Error(data.mensaje);
      }
      throw new Error(`Error en la respuesta del servidor ${res.status}`);
    }

    const data = await res.json();

    productos = data;
    if (!Array.isArray(data)) {
      productos = [data];
    }
    productos.forEach((datos) => {
      const productoDiv = document.createElement("div");
      productoDiv.innerHTML = `
            <h3>${datos.nombre || "No existe"}</h3>
            <p><strong>ID:</strong> ${datos.id}</p>
            <p><strong>Precio:</strong> $${datos.precio || " No existe"}</p>
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
      throw new Error(`Error en la respuesta del servidor ${res.status}`);
    }

    console.log(data);
    if (!Array.isArray(data)) {
      productos = [data];
    }

    productos.forEach((datos) => {
      const productoDiv = document.createElement("div");
      productoDiv.innerHTML = `
                <h3>${datos.nombre || "No existe"}</h3>
                <p><strong>ID:</strong> ${datos.id}</p>
                <p><strong>Precio:</strong> $${datos.precio || " No existe"}</p>
            `;
      productosList.appendChild(productoDiv);
    });
  } catch (error) {
    console.error(`${error}`);
  }
}

async function añadirProducto() {
  try {
    let productos = [];
    document.getElementById("productosList").innerHTML = "";
    const nom_product = document.getElementById("nom_product").value;
    const precio_product = document.getElementById("precio_product").value;

    const res = await fetch("http://localhost:3000/productos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre: nom_product, precio: precio_product }),
    });

    if (!res.ok) throw new Error(`Error HTTP ${res.status}`);

    const data = await res.json();
    console.log("Producto agregado:", data);

    productos = data;
    if (!Array.isArray(data)) {
      productos = [data];
    }
    productos.forEach((datos) => {
      const productoDiv = document.createElement("div");
      productoDiv.innerHTML = `
            <h3>Producto Agregado</h3>
            <h3>${datos.nombre || "No existe"}</h3>
            <p><strong>ID:</strong> ${datos.id}</p>
            <p><strong>Precio:</strong> $${datos.precio || " No existe"}</p>
        `;
      productosList.appendChild(productoDiv);
    });
  } catch (error) {
    console.error(`${error}`);
  }
}

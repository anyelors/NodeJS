async function pruebaPOST() {
  try {
    let datos = {
      id: 2,
      mensaje: "Prueba de agregar mensaje POST",
    };
    const res = await fetch("http://localhost:4003/api/mensaje", {
      mode: "no-cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos), // Convertimos los datos a JSON
    });

    if (!res.ok) throw new Error("❌ Respuesta no válida!");

    const data = await res.json(); // Parseamos la respuesta como JSON
    console.log(data);
  } catch (error) {
    console.error("🚨 Error:", error);
  }
}

//pruebaPOST();

async function eliminarTarea() {
  try {
    const res = await fetch("http://localhost:3005/api/tareas/2", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: null,
    });

    if (!res.ok) throw new Error(`❌ Error con el Servidor: ${res.status}`);

    const data = await res.json(); // Convertimos la respuesta a JSON
    console.log(data);
  } catch (error) {
    console.error("🚨 Error:", error);
  }
}

eliminarTarea();

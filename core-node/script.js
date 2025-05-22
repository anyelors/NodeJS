/** 
async function pruebaPOST(){
    try{
        const res = await fetch('http://localhost:3001/enviar', {
                    method: 'POST',
                    headers: {
                     'Content-Type': 'text/plain'
                    },
                     body: 'Kaixo estamos probando!'
                })
        if(!res.ok)
            throw new Error("res no ok!");

        const data = await res.json();
        console.log(data);
    }
    catch(error)
    {
        console.log(error);
    }
}

pruebaPOST();
*/

/** */
// Ejecutar la función
pruebaPOST();
eliminarUsuario();

async function pruebaPOST() {
  try {
    let datos = {
      nombre: "Lupe",
      edad: 8,
      ciudad: "Panama",
    };
    const res = await fetch("http://localhost:3004/api/addusuario", {
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


/** */
async function eliminarUsuario() {
    try {
        const res = await fetch('http://localhost:3004/api/delusuario', {
            method: 'DELETE'
        });

        if (!res.ok) throw new Error("❌ Error al eliminar usuario!");

        const data = await res.json(); // Convertimos la respuesta a JSON
        console.log(data);
    } catch (error) {
        console.error('🚨 Error:', error);
    }
}



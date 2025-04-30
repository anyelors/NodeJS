/**EJEMPLOS */
function algunaPromesa() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("¡Promesa resuelta!");
        }, 2000);
    });
}

async function miFuncion() {
    try {
      let resultado = await algunaPromesa();
      console.log(resultado);
      resultado = await algunaPromesa();
      console.log("1 "+resultado);
      resultado = await algunaPromesa();
      console.log("2 "+resultado);
      console.log("Espera la respuesta");
    } catch (error) {
      console.error("Error:", error);
    }
  }

  miFuncion();

  //--------------------------------------------------------------------------------

  async function obtenerDatos() {
    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts/5"); // Espera la respuesta
        const datos = await respuesta.json(); // Espera la conversión a JSON
        console.table(datos);
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
}

obtenerDatos();

//-------------------------------------------------------------------------------------

function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function iniciar() {
    console.log("Inicio");
    await esperar(2000); // Espera 2 segundos
    console.log("Han pasado 2 segundos");
  }
  
  iniciar();

//-------------------------------------------------------------------------------------

async function obtenerUsuario() {
try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/6');
    if (!response.ok) throw new Error("Error en la respuesta HTTP");
    const data = await response.json();
    console.table("Toda la info:", data);
    console.log("Usuario:", data.name);
    } catch (error) {
        console.error("Error al obtener usuario:", error.message);
    }
}
  
obtenerUsuario();



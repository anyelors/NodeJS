/**EJEMPLOS 
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

*/

/**
 * EJERCICIOS #####################################################################
 */

/**1. 
function saludaUsuario() {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve("¡Hola Usuario!");
      }, 1000);
  });
}

async function saludar() {
  try {
    let resultado = await saludaUsuario();
    console.log(resultado);
  } catch (error) {
    console.error("Error:", error);
  }
}

saludar();
*/

/**2. 
function suma(n1, n2) {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(n1 + n2);
      }, 1500);
  });
}

async function sumarNumeros(num1, num2) {
  try {
    let resultado = await suma(num1, num2);
    console.log(`La Suma de los numeros ${num1} y ${num2} es: ${resultado}`);
  } catch (error) {
    console.error("Error:", error);
  }
}

sumarNumeros(2, 4);
sumarNumeros(-5, 10);
*/

/**3.  
function validaEdad(edad) {
  return new Promise((resolve, reject) => {
    (edad >= 18) ? resolve("Persona Mayor de Edad") : reject("Persona No es Mayor de Edad");
  });
}

async function mayorEdad(edad) {
  try {
    let resultado = await validaEdad(edad);
    console.log(`${resultado} [${edad}]`);
  } catch (error) {
    console.error("Error:", `${error} [${edad}]`);
  }
}

mayorEdad(16);
mayorEdad(22);
*/

/**4. 
function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function iniciar(num = 3) {
  console.log("Inicio");
  for (let index = num; index > 0; index--) {
    console.log(index);
    await esperar(1000);
  }
  console.log("Finaliza Cuenta regresiva");
}

iniciar(5);
*/

/**5.  
function muestraFallo() {
  return new Promise((_, reject) => {
      setTimeout(() => {
        reject("¡Ha fallado!");
      }, 1500);
  });
}

async function fallar() {
  try {
    await muestraFallo();
  } catch (error) {
    console.error("Error:", error);
  }
}

fallar();
/**/

/**6. 
function buscarUsuario() {
  return new Promise((resolve) => {
    console.log("Consultando Usuario");
    setTimeout(() => {
      resolve({ user: "admin", pass: "1234" });
    }, 1500);      
  });
}

let user = "admin";
let pass = "1234";
function processData(data) {
  return new Promise((resolve, reject) => {
      if (user == data.user && pass == data.pass)
        resolve(`✅ Usuario [${data.user}] Bienvenido al Sistema!!`);
      else
        reject(`❌ Usuario [${user}] Credenciales inválidas`);
  });
}
async function processDataPromise() {
  try {
    const datoBD = await buscarUsuario();
    let resultado = await processData(datoBD);
    console.log(`${resultado}`);
  } catch (error) {
    console.error("Error:", error);
  }
}

processDataPromise();
/**/

/**7. */
function generaNumero() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          const valNumero = Math.floor(Math.random() * 100);
          resolve(valNumero);
      }, 1000);
  });
}

async function numAleatorio() {
  try {
    let resultado = await generaNumero();
    console.log(`Número Generado: [${resultado}]`);
  } catch (error) {
    console.error("Error:", error);
  }
}

numAleatorio();
/**/

/**8. 
function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function iniciar() {
  console.log("Inicio");
  await esperar(1000);
  console.log("✅ Tarea Completada");
  await esperar(1000);
  console.log("✅ Tarea Completada");
  await esperar(1000);
  console.log("Finaliza Tareas");
}

iniciar();
*/


/** 
function mostrarMensaje(msg) {
  console.log(msg);
}

setTimeout(() => {
  mostrarMensaje("Esto se muestra tras 2 segundos");
}, 2000);

mostrarMensaje("Esto no espera");

//-----------------------------------------------------------------------

let promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Operación exitosa");
  }, 2000);
});

//promesa
//    .then(res => console.log(res))
//    .catch(err => console.log(err));

async function mostrarMsg() {
  try {
    let res = await promesa;
    console.log(res);
  } catch (err) {
    console.error(err);
  } finally {
    console.log("Agurrrrrrrrrrrrrrr");
  }
}

mostrarMsg();

//-----------------------------------------------------------------------

let noPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Operación No exitosa");
  }, 2000);
});

noPromesa
  .then((res) => console.log(res))
  .catch((err) => console.log("Error: " + err))
  .finally(() => console.log("Chaluego"));

//-----------------------------------------------------------------------

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

async function obtenerProductos() {
  try {
    const res = await fetch("https://randomuser.me/api/");
    if (!res.ok) throw new Error("Error de red");
    const data = await res.json();
    console.log("Productos:", data);
  } catch (error) {
    console.error(error);
  }
}

obtenerProductos();

//----------------------------------------------------------------------

const datos = {
  nombre: "Juan",
  email: "juan@example.com",
};

fetch("https://api.example.com/registro", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(datos),
})
  .then((res) => res.json())
  .then((data) => console.log("Usuario creado:", data))
  .catch((err) => console.error("Error:", err));

//----------------------------------------------------------------------

function a(msj, callback) {
  let msjProcesado = msj.trim();
  callback(msjProcesado);
}

a("     Hello    ", (x) => console.log("Mensaje Procesado", x));

function concatenarStr(msj1, msj2 = "Agurrrrr") {
  console.log(msj1 + " " + msj2);
}

a("  me voy  ", concatenarStr);

//----------------------------------------------------------------------

function saludar(nombre, callback) {
  const mensaje = `Kaixo, ${nombre}!`;
  callback(mensaje);
}

document.getElementById("btnSaludar").addEventListener("click", function () {
  saludar("Ane", function (mensaje) {
    alert(mensaje);
  });
});

//----------------------------------------------------------------------

function saludar1(nombre, callback) {
  const mensajeStr = `Kaixo, ${nombre}!`;
  callback(mensajeStr);
}

function sAlert(str) {
  alert(str);
}

function sConsole(str) {
  console.log(str);
}

document.getElementById("btnSaludar1").addEventListener("click", function () {
  saludar1("Lupe", sAlert);
});

//----------------------------------------------------------------------

function saludar2(nombre, callback) {
  const mensaje3 = `Kaixo, ${nombre}!`;
  callback(mensaje3);
}

function addText2HTML(msj) {
  const msjElemento = document.createElement("p");
  msjElemento.textContent = msj;
  document.body.appendChild(msjElemento);
}

document.getElementById("btnSaludar2").addEventListener("click", function () {
  saludar2("Paco", addText2HTML);
});

//----------------------------------------------------------------------

function cambiarFondo(color, callback) {
  document.body.style.backgroundColor = color;
  callback(`Color cambiado a ${color}`);
}

document.getElementById("btnColor").addEventListener("click", () => {
  cambiarFondo("lightblue", sAlert);
});

//----------------------------------------------------------------------

function cambiarFondo1(color, callback1, callback2, callback3) {
  document.body.style.backgroundColor = color;
  callback1(`Color cambiado a ${color}`);
  callback2(`Color cambiado a ${color}`);
  callback3(`Color cambiado a ${color}`);
}

document.getElementById("btnColor1").addEventListener("click", () => {
  cambiarFondo1(
    "royalblue",
    sConsole, // Mostrar en consola
    sAlert, // Mostrar en una alerta
    addText2HTML
  );
});

//------------------------------------------------------------------------
/*
function cargarContenido(callback) {
  setTimeout(() => {
    callback("Contenido cargado correctamente.");
  }, 2000);
}

document.getElementById("btnCargar").addEventListener("click", () => {
  document.getElementById("resultado").textContent = "Cargando...";
  cargarContenido(function (mensaje) {
    document.getElementById("resultado").textContent = mensaje;
  });
});
*/
//-----------------------------------------------------------------------
/*
function cargarContenido(url, callback, errorCallback) {
  fetch(url) // Realiza una consulta HTTP GET a la URL proporcionada
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      return response.json(); // Convierte la respuesta a formato JSON
    })
    .then((data) => {
      callback(data); // Si la consulta es exitosa, pasa los datos al callback
    })
    .catch((error) => {
      errorCallback(`Hubo un problema: ${error.message}`); // Maneja los errores
    });
}

document.getElementById("btnCargar").addEventListener("click", () => {
  const url = "https://jsonplaceholder.typicode.com/posts/99"; // URL de la API
  document.getElementById("resultado").textContent = "Cargando...";
  cargarContenido(
    url,
    (data) => {
      document.getElementById(
        "resultado"
      ).textContent = `Título: ${data.title}`;
      console.log(data);
    },
    (error) => {
      document.getElementById("resultado").textContent = error;
    }
  );
});

*/

/**
 * EJEMPLOS ##################################################################
 
function sAlert(str) {
  alert(str);
}

function sConsole(str) {
  console.log(str);
}

function addText2HTML(msj) {
  const msjElemento = document.createElement("p");
  msjElemento.textContent = msj;
  document.body.appendChild(msjElemento);
}
*/  

/**1. 
function saludar2(nombre, callback) {
  const mensaje3 = `Kaixo, ${nombre}!`;
  callback(mensaje3);
}

document.getElementById("btnSaludarNew").addEventListener("click", function () {
  saludar2("Paco", addText2HTML);
});
*/

/**2. 
function cambiarFondo(color, callback) {
  document.body.style.backgroundColor = color;
  callback(`Color cambiado a ${color}`);
}

document.getElementById("btnColor").addEventListener("click", () => {
  cambiarFondo("red", sConsole);
});
*/

/**3. 
function cargarContenido(callback) {
  setTimeout(() => {
    callback("Tiempo Cumplido.");
  }, 2000);
}

document.getElementById("btnCargar").addEventListener("click", () => {
  document.getElementById("resultado").textContent = "Cargando...";
  cargarContenido(function (mensaje) {
    document.getElementById("resultado").textContent = mensaje;
  });
});
*/

/**4. 
function cargarSaludo(callback) {
  const nom = document.getElementById("saludoNom").value;
  if (!nom || nom.trim() == ""){
    alert("Debe ingresar un nombre");
    return false;
  }
  callback(`Hola <b>${nom}</b> esto es un mensaje personalizado`);
}

document.getElementById("saludar").addEventListener("click", () => {
  cargarSaludo(function (mensaje) {
    document.getElementById("saludoPer").innerHTML = mensaje;
  });
});
*/

/**5. 
function cambiarFondo(color, callback, callback1) {
  document.body.style.backgroundColor = color;
  callback(`Color cambiado a ${color}`);
  callback1(`Color cambiado a ${color}`)
}

document.getElementById("btnColor").addEventListener("click", () => {
  cambiarFondo("grey", 
    sConsole,
    addText2HTML);
});
*/

/**6. 
const msj = document.getElementById("resultado");
function cargarContenido(callback) {
  setTimeout(() => {
    callback("Datos Listos.");
  }, 2000);
}

document.getElementById("btnCargar").addEventListener("click", () => {
  msj.textContent = "Cargando...";
  cargarContenido(function (mensaje) {
    msj.textContent = mensaje;
  });
});
*/

/**7. 
function validarNumeroAlto(num, callback) {
  let msj;
  
  if(isNaN(num) || num.trim() == "") {
    msj = "Numero Invalido";
  } else {
    msj = "Numero Bajo";
    if (parseInt(num) > 10)
      msj = "Numero Alto";
  }  
  
  callback(`Validador: ${msj}`);
}

document.getElementById("btnValidar").addEventListener("click", () => {
  const num = document.getElementById("numero").value;
  validarNumeroAlto(num, 
                    sConsole
  );
});
*/


//----------------------------------------------------------------------
/** 
document.getElementById("btnFetch").addEventListener("click", () => {
  const url = "https://jsonplaceholder.typicode.com/users/1";
  document.getElementById("result").textContent = "Cargando...";

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Error HTTP: " + response.status);
      }
      return response.json();
    })
    .then(data => {
      document.getElementById("result").textContent =
        `Nombre: ${data.name}\nEmail: ${data.email}`;
    })
    .catch(error => {
      document.getElementById("result").textContent = `❌ Error: ${error.message}`;
    });
});
*/

/** 
document.getElementById("btnFetch").addEventListener("click", async () => {
  const url = "https://jsonplaceholder.typicode.com/users/1";
  const resultadoElemento = document.getElementById("result");

  resultadoElemento.textContent = "Cargando...";

  try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
      }

      const data = await response.json();
      resultadoElemento.textContent = `Nombre: ${data.name}\nEmail: ${data.email}`;
  } catch (error) {
      resultadoElemento.textContent = `❌ Error: ${error.message}`;
  } finally {
      // Se ejecuta siempre, éxito o error
      console.log("Petición finalizada");
      resultadoElemento.style.fontStyle = "italic"; // Dar un estilo visual para indicar que terminó la operación
  }
});
*/

//---------------------------------------------------------------------------
/** 
function obtenerDatos() {
  return new Promise((resolve, reject) => {
    const exito = Math.random() > 0.5;
    setTimeout(() => {
      if (exito) resolve("✅ Datos correctos");
      else reject("❌ Fallo al obtener datos");
    }, 1500);
  });
}

obtenerDatos()
  .then(mensaje => {
    console.log(mensaje);
    return mensaje + " De nuevo";
  })  
  .then( x => {
    console.log(x);
    return x + " Otra vez más";
  })
  .then( y => {
    console.log(y);
  })
  .catch(error => console.error(error))
  .finally(() => console.log("Este es el final!!!"));
*/

/**
 * EJERCICIOS ########################################################
*/

/**1. 
function esperarSegundos(seg) {
  return new Promise((resolve) => {
          resolve({ id: 1, value: 3, msg: "Tiempo Cumplido..." });
  });
}

function processDataPromise(data) {
  return new Promise((resolve) => {
    let reley = data.value * 1000;
      setTimeout(() => {
          console.log(data.msg.toUpperCase());
      }, reley);
  });
}

esperarSegundos(4)
  .then(processDataPromise)
  .catch(error => console.error("Error:", error));
*/

/**2. 
function verificarEdad(edad) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (edad >= 18) resolve("✅ Acceso permitido");
      else reject("❌ Acceso denegado");
    }, 1000);
  });
}

let edad = 22;
verificarEdad(edad)
  .then(mensaje => {
    console.log(mensaje);
  })
  .catch(error => console.error(error))
  .finally(() => console.log("Finaliza proceso de Acceso al Sistema"));
*/  

/**3. 
function verificarNumero() {
  return new Promise((resolve, reject) => {
    const valNumero = Math.floor(Math.random() * 10);
    setTimeout(() => {
      if (valNumero > 5) resolve(`✅ Número aceptado: ${valNumero}`);
      else reject(`❌ Número demasiado bajo: ${valNumero}`);
    }, 1000);
  });
}

verificarNumero()
  .then(mensaje => {
    console.log(mensaje);
  })
  .catch(error => console.error(error))
  .finally(() => console.log("Finaliza verificar Número!!!"));
*/  

/**4. */
let user = "lupe";
function buscarUsuario() {
  return new Promise((resolve) => {
          resolve({ id: "admin", value: "Administrador" });
  });
}

function processDataPromise(data) {
  return new Promise(() => {
      setTimeout(() => {
        if (user == data.id)
          console.log(`✅ Usuario: [${data.id}] Rol: [${data.value}]`);
        else
          console.log(`❌ Usuario: [${user}] no encontrado`);
      }, 1500);
  });
}

buscarUsuario()
  .then(processDataPromise)
  .catch(error => console.error("Error:", error));


/**5. */

/**6. */

/**7. */

/**8. */



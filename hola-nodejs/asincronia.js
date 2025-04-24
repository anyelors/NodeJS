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

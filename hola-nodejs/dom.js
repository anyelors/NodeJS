/** 
function mostrarMensaje() {
    document.getElementById("mensaje").innerHTML = "<strong>Kaixo, DOM!</strong>";
  }

//--------------------------------------------------------------------------------

let items = ["pantalon","zapato"];

function addToCart(product) {
    items.push(product);
    document.getElementById("cart").innerHTML = "Carrito: " + items.join(", ");
}
console.log(items);
console.log(items.join(", "));

//--------------------------------------------------------------------------------
function cambiarTexto() {
    document.getElementById("parrafo").textContent = "Texto actualizado";
}

//--------------------------------------------------------------------------------
function mostrarTexto() {
     const entrada = document.getElementById("input").value;
     document.getElementById("salida").innerHTML = entrada;
}
    
//--------------------------------------------------------------------------------
function resaltar() {
    //document.getElementById("texto").classList.toggle("resaltado");
    if (document.getElementById("texto").classList.contains("resaltado"))
        document.getElementById("texto").classList.remove("resaltado");
    else
        document.getElementById("texto").classList.add("resaltado");
}

//--------------------------------------------------------------------------------
function validar() {
    const email = document.getElementById("email").value.trim();
    const error = document.getElementById("error");
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email))  {
      error.textContent = "Email no válido";
      error.classList.add("error");
      alert("Email no válido");
      document.getElementById("email").focus();
      return false;
    } else {
      error.textContent = "Email válido";
      error.classList.remove("error");
    }
}
*/

/**
 * EJERCICIOS DOM
 */
/**1. 
function cambiarTexto() {
  const text = document.getElementById("saludo");
  const textButton = document.getElementById("cambiar");

  if (text.innerHTML === "Kaixo") {
    text.innerHTML = "Hola";
    textButton.innerHTML = "Cambiar a Euskera";
  } else {  
    text.innerHTML = "Kaixo";
    textButton.innerHTML = "Cambiar a Español";
  }
}
*/

/**2.  
function resaltar() {
  if (document.getElementById("destacado").classList.contains("amarrillo"))
        document.getElementById("destacado").classList.remove("amarrillo");
    else
        document.getElementById("destacado").classList.add("amarrillo");
}
*/

/**3. 
function alternarVisibilidad() {
  document.getElementById("info").classList.toggle("oculto");
}
*/

/**4. 
function cambiarNombre() {
  document.getElementById("nombre").value = "Ane";
}
*/

/**5. 
function crearParrafo() {
  const nuevoParrafo = document.createElement("p");
  nuevoParrafo.textContent = "Este es un nuevo párrafo.";
  document.body.appendChild(nuevoParrafo);
}
*/

/**6. 
function eliminarElemento() {
  const elemento = document.getElementById("borrar");
  if (elemento)
    elemento.remove();
}
*/

/**7. 
function colorear() {
  const textoParrafo = document.getElementById("texto");
  textoParrafo.style.color = "Red";
  textoParrafo.style.backgroundColor = "Yellow";
}
*/

/**8. 
function agregarElemento() {
  const nuevoElemento = document.createElement("li");
  nuevoElemento.textContent = "Nuevo elemento";
  document.getElementById("miLista").appendChild(nuevoElemento);
  if (document.getElementById("miLista").childElementCount %2 === 0) {
    nuevoElemento.style.color = "blue";
  } else {
    nuevoElemento.style.color = "red";
  }
}
*/

/**9. */
function mostrar() {
  const element = document.getElementById("mensaje");

  if (element.style.display === "block") {
    element.style.display = "none";
    document.getElementById("mostrar").textContent = "Mostrar mensaje";
  } else {
    element.style.display = "block";
    document.getElementById("mostrar").textContent = "Ocultar mensaje";
  }
}


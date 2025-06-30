const input = document.querySelector("input");
const boton1 = document.getElementById("mostrar");

boton1.addEventListener("click", () => {
  alert(`Texto ingresado: ${input.value}`);
});

const img = document.querySelector("img");
console.log(img.getAttribute("alt"));

img.setAttribute("alt", "Nueva descripción");
console.log(img.alt);

const valueSrc = img.getAttribute("src");

setTimeout(() => {
  img.removeAttribute("src");
}, 2000);

setTimeout(() => {
  img.setAttribute("src", valueSrc);
}, 5000);

//################################################################
const boton = document.getElementById("boton");

// ✅ Ver si está deshabilitado (propiedad)
console.log(boton.disabled); // true

// ✅ Consultar el atributo en HTML
console.log(boton.getAttribute("disabled")); // "" o "disabled"

setTimeout(() => {
  // ✅ Habilitar el botón (quitamos el atributo)
  boton.removeAttribute("disabled");

  // ✅ Comprobamos la propiedad
  console.log(boton.disabled); // false
}, 5000);

const input2 = document.getElementById("texto");
const boton2 = document.getElementById('habilitar');

boton2.addEventListener('click', () => {
  input2.disabled = false;
  input2.focus(); // para que el cursor aparezca directamente en el campo
});

const checkbox = document.getElementById("check");
const boton3 = document.getElementById('habilitar1');

boton3.addEventListener('click', () => {
    if (checkbox.checked)
        checkbox.checked = false;
    else
        checkbox.checked = true;
});

const opciones = document.querySelectorAll('option');
const boton4 = document.getElementById('habilitar2');

boton4.addEventListener('click', () => {
  opciones[1].selected = true; 
});


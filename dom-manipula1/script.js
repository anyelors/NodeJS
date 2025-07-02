/**
 * 1.
 */
const lista = document.querySelector("ol"); // 1. Seleccionamos la lista donde agregaremos los elementos
const fragmento = document.createDocumentFragment(); // 2. Creamos un fragmento para contener temporalmente los nodos

for (let i = 1; i <= 50; i++) {
  const li = document.createElement("li"); // 3. Creamos un nuevo <li>
  li.textContent = `Elemento ${i}`; // 4. Le asignamos el texto correspondiente
  fragmento.appendChild(li); // 5. Lo añadimos al fragmento (no al DOM directamente)
}

lista.appendChild(fragmento); // 6. Insertamos el fragmento completo en el DOM en un solo paso (solo 1 repintado)

/**
 * 2.
 */

const div = document.getElementById("saludo");

document.getElementById("text").addEventListener("click", (event) => {
  div.textContent = "<strong>Hola</strong>";
});

document.getElementById("html").addEventListener("click", (event) => {
  div.innerHTML = "<strong>Hola</strong>";
});

/**
 * 3.
 */
const parrafo = document.getElementById("contenedor"); 
const fragmentoParafo = document.createDocumentFragment();

document.getElementById("generar").addEventListener("click", (event) => {
  for (let i = 1; i <= 5; i++) {
    const parrafo = document.createElement("p");
    parrafo.textContent = `Párrafo número ${i}`;
    fragmentoParafo.appendChild(parrafo);
  }

  parrafo.appendChild(fragmentoParafo);
});

document.getElementById("borrar").addEventListener("click", (event) => {
  const contenedor = document.getElementById("contenedor");
  for (let i = contenedor.children.length - 1; i >= 0; i--) {
    contenedor.removeChild(contenedor.children[i]);
  }
});

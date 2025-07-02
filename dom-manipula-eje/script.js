/**
 * 1.
 */
const linkNavega = document.querySelector('a');

linkNavega.addEventListener('click', (e) => {
  e.preventDefault();
  alert('Navegación cancelada por JS');
});

/**
 * 2.
 */

const btn = document.getElementById('btn');
const msg = document.getElementById('msg');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  msg.textContent = 'Boton se desactiva';
  btn.disabled = true;
});

/**
 * 3.
 */
document.getElementById('contenedor').addEventListener('click', () => {
  console.log('Clic en el DIV contenedor');
});

document.getElementById('miBoton').addEventListener('click', (e) => {
  e.stopPropagation();
  console.log('Clic en el BOTÓN');
});

/**
 * 4.
 */
const formulario = document.getElementById('miFormulario');
const nom = document.getElementById('nombre');
const saludo = document.getElementById('saludo');

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  saludo.innerHTML = `<b>Kaixo, ${nom.value} 👋</b>`
});
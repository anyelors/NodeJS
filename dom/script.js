const div = document.getElementById('mensaje');
console.log(div.textContent);

const items = document.getElementsByTagName('li');
console.log(items.length); // 2

const campos = document.getElementsByName('usuario');
console.log(campos.length); // 2

const caja = document.querySelector('.caja');
const principal = document.querySelector('#principal');

const items1 = document.querySelectorAll('.item');
items1.forEach(el => console.log(el.textContent)); // A, B

const boton = document.getElementById('cambiar');
const titulo = document.querySelector('.titulo');
const parrafo = document.querySelector('.parrafo');

boton.addEventListener('click', () => {
  titulo.textContent = "¡Hola desde el DOM!";
  parrafo.style.color = 'blue';
});




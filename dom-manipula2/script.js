// Seleccionamos el botón por su ID
const boton = document.getElementById('saludar');

// Asociamos un "event listener" al botón que responde al evento "click"
boton.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  console.log('Kaixo!');
});

// Escuchamos el evento en el DIV padre
document.getElementById('padre').addEventListener('click', () => {
  console.log('Div clicado');
});

// Escuchamos el evento en el botón hijo
document.getElementById('hijo').addEventListener('click', () => {
  console.log('Botón clicado');
});

// Escuchamos el evento 'submit' en el formulario
document.querySelector('form').addEventListener('submit', (e) => {
  // Detenemos el comportamiento predeterminado (enviar el formulario)
  e.preventDefault();

  // Mostramos un mensaje en la consola
  console.log('Formulario interceptado');
});

// Escuchamos el clic en el div contenedor
document.getElementById('contenedor').addEventListener('click', () => {
  console.log('Clic en el DIV contenedor');
});

// Escuchamos el clic en el botón, y evitamos que se propague al contenedor
document.getElementById('miBoton').addEventListener('click', (e) => {
  e.stopPropagation(); // Detiene la burbuja
  console.log('Clic en el BOTÓN');
});

// Manejamos el evento 'submit' en el formulario
const formulario = document.getElementById('miFormulario');

formulario.addEventListener('submit', (e) => {
  e.preventDefault(); // Evita que se recargue la página o se envíe el formulario
  alert('Formulario enviado de forma controlada');
});

// Escuchamos clics en el contenedor
document.getElementById('contenedor-1').addEventListener('click', () => {
  console.log('Has hecho clic en el contenedor');
});





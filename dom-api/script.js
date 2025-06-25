/**
 * 3.1 DOM API – Manipulación del DOM 
 */
function cambiarTexto() {
  const parrafo = document.getElementById('demo');
  parrafo.textContent = 'Texto cambiado con DOM API ✅';
}

/**
 * 3.2 Storage API – Guardar datos en el navegador 
 */
// Guardar el estado de la sesión
sessionStorage.setItem('sesion', 'Activa');

// Verificar si ya tenemos un nombre guardado
const nombreGuardado = localStorage.getItem('nombre');
const bienvenida = document.getElementById('bienvenida');
const formulario = document.getElementById('formulario');

if (nombreGuardado) {
  bienvenida.textContent = `Kaixo de nuevo, ${nombreGuardado} 👋`;
  formulario.style.display = 'none';
}

// Guardar nuevo nombre en localStorage
formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  const nombreInput = document.getElementById('nombre').value;
  localStorage.setItem('nombre', nombreInput);
  bienvenida.textContent = `Gracias, ${nombreInput}. Tu nombre ha sido guardado ✅`;
  formulario.style.display = 'none';
});

/**
 * 3.3 Geolocation API – Localización del usuario 
 */
function obtenerUbicacion() {
  const resultado = document.getElementById('resultado');

  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude.toFixed(6);
        const long = pos.coords.longitude.toFixed(6);
        resultado.textContent = `📍 Latitud: ${lat}, Longitud: ${long}`;
      },
      (err) => {
        resultado.textContent = `❌ Error: ${err.message}`;
      }
    );
  } else {
    resultado.textContent = '🚫 La geolocalización no está soportada en este navegador.';
  }
}


/**
 * 3.4 History API 
 */
const contenido = document.getElementById('contenido');

// Contenido simulado de páginas
const paginas = {
  inicio: `
    <h2>Inicio</h2>
    <p>Kaixo página principal.</p>
  `,
  about: `
    <h2>Acerca</h2>
    <p>Esta es una página sobre nosotr@s.</p>
  `,
  contacto: `
    <h2>Contacto</h2>
    <p>Puedes contactarnos por este medio.</p>
  `
};

function navegar(pagina) {
  // Cambia la URL sin recargar
  history.pushState({ pagina }, '', `/${pagina}`);
  cargarContenido(pagina);
}

function cargarContenido(pagina) {
  contenido.innerHTML = paginas[pagina] || `<h2>404</h2><p>Página no encontrada</p>`;
}

// Manejar el botón "atrás y adelante" del navegador
window.onpopstate = function(event) {
  if (event.state?.pagina) {
    cargarContenido(event.state.pagina);
    console.log("Navegaste con postate hacia atrás o adelante:", event.state.pagina);
  } else {
    contenido.innerHTML = `<h2>Kaixo</h2><p>Esta es una SPA con JavaScript puro y la History API.</p>`;
  }
};

/**
 * 3.5 Fetch API – Solicitudes HTTP modernas
 */
function cargarUsuarios() {
  const lista = document.getElementById('lista-usuarios');
  lista.innerHTML = '<li>Cargando...</li>';

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) throw new Error('Respuesta no válida');
      return response.json();
    })
    .then(data => {
      lista.innerHTML = '';
      data.forEach(usuario => {
        const li = document.createElement('li');
        li.textContent = `${usuario.name} (${usuario.email}) [${usuario.phone}]`;
        lista.appendChild(li);
      });
    })
    .catch(error => {
      lista.innerHTML = `<li style="color: red">❌ Error: ${error.message}</li>`;
    });
}




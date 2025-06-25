// Mostrar saludo personalizado desde localStorage
function mostrarSaludo() {
  const nombre = localStorage.getItem('nombre');
  const saludo = document.getElementById('saludo');
  if (nombre) {
    saludo.textContent = `Welcome de nuevo, ${nombre}!`;
    document.getElementById('nombre').style.display = 'none';
    document.getElementById('btn-nombre').style.display = 'none';
  } else {
    saludo.textContent = '';
    document.getElementById('nombre').style.display = 'inline';
    document.getElementById('btn-nombre').style.display = 'inline';
  }
}

// Guardar el nombre en localStorage
function guardarNombre() {
  const inputNombre = document.getElementById('nombre');
  const nombre = inputNombre.value.trim();
  if (nombre) {
    localStorage.setItem('nombre', nombre);
    mostrarSaludo();
  }
}

// Guardar tarea en sessionStorage
function guardarTareas(tareas) {
  sessionStorage.setItem('tareas', JSON.stringify(tareas));
}

// Mostrar tareas actuales
function mostrarTareas() {
  const lista = document.getElementById('lista-tareas');
  lista.innerHTML = '';
  const tareas = JSON.parse(sessionStorage.getItem('tareas')) || [];

  tareas.forEach((tarea, i) => {
    const li = document.createElement('li');
    li.textContent = tarea;
    lista.appendChild(li);
  });
}

// Manejar el formulario
document.getElementById('form-tarea').addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.getElementById('nueva-tarea');
  const texto = input.value.trim();

  if (texto) {
    const tareas = JSON.parse(sessionStorage.getItem('tareas')) || [];
    tareas.push(texto);
    guardarTareas(tareas);
    mostrarTareas();
    input.value = '';
  }
});

// Al cargar la página
mostrarSaludo();
mostrarTareas();

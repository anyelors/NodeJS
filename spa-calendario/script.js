const rutas = {
  "/": `<h2>🏠 Bienvenido</h2><p>Esta es tu agenda personal. Todo funciona sin conexión y sin servidores.</p>`,
  "/calendario": `<div id="calendar"></div>`,
  "/nuevo": `
    <h2>📝 Nuevo Evento</h2>
    <form id="evento-form">
      <label>Título:<br><input type="text" name="titulo" required /></label><br>
      <label>Fecha:<br><input type="date" name="fecha" required /></label><br>
      <button>Guardar evento</button>
    </form>
  `,
  "/editar": `
  <h2>✏️ Editar o Eliminar Evento</h2>
  <button id="btn-editar">Editar evento</button>
  <button id="btn-borrar">Eliminar evento</button>
`,
};

function navegar(url) {
  history.pushState(null, null, url);
  render(url);
}

function render(url) {
  const app = document.getElementById("app");
  app.innerHTML = rutas[url] || "<h2>404</h2><p>Página no encontrada</p>";

  if (url === "/calendario") renderCalendario();
  if (url === "/nuevo") {
    const form = document.getElementById("evento-form");
    form.addEventListener("submit", guardarEvento);
  }
  if (url === "/editar") {
    document
      .getElementById("btn-editar")
      .addEventListener("click", editarEvento);
    document
      .getElementById("btn-borrar")
      .addEventListener("click", borrarEvento);
  }
}

function obtenerEventos() {
  return JSON.parse(localStorage.getItem("eventos")) || [];
}

function guardarEvento(e) {
  e.preventDefault();
  const form = e.target;
  const titulo = form.titulo.value.trim();
  const fecha = form.fecha.value;
  const id = obtenerNuevoId();

  if (!titulo || !fecha) return;

  const eventos = obtenerEventos();
  eventos.push({ id, title: titulo, date: fecha });
  localStorage.setItem("eventos", JSON.stringify(eventos));

  alert("✅ Evento guardado correctamente");
  navegar("/calendario");
}

function renderCalendario() {
  const calendarEl = document.getElementById("calendar");
  const calendario = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    locale: "es",
    events: obtenerEventos().map(ev => ({
        ...ev,
        title: `${ev.title} (ID: ${ev.id})`
    }))
  });
  calendario.render();
}

document.addEventListener("click", (e) => {
  if (e.target.matches("a[data-link]")) {
    e.preventDefault();
    navegar(e.target.getAttribute("href"));
  }
});

function obtenerNuevoId() {
  const ultimoId = parseInt(localStorage.getItem("ultimoId") || "0", 10);
  const nuevoId = ultimoId + 1;
  localStorage.setItem("ultimoId", nuevoId);
  return nuevoId.toString();
}


function editarEvento() {
  const id = prompt("ID del evento a editar:");
  if (!id) return;

  const nuevoTitulo = prompt("Nuevo título:");
  const nuevaFecha = prompt("Nueva fecha (YYYY-MM-DD):");

  let eventos = obtenerEventos();
  const index = eventos.findIndex(ev => ev.id === id);

  if (index !== -1) {
    eventos[index].title = nuevoTitulo;
    eventos[index].date = nuevaFecha;
    localStorage.setItem("eventos", JSON.stringify(eventos));
    alert("✅ Evento editado.");
  } else {
    alert("❌ Evento no encontrado.");
  }
}

function borrarEvento() {
  const id = prompt("ID del evento a eliminar:");
  if (!id) return;

  let eventos = obtenerEventos();
  const nuevosEventos = eventos.filter(ev => ev.id !== id);

  if (nuevosEventos.length === eventos.length) {
    alert("❌ No se encontró ningún evento con ese ID.");
  } else {
    localStorage.setItem("eventos", JSON.stringify(nuevosEventos));
    alert("🗑️ Evento eliminado.");
  }
}


window.addEventListener("popstate", () => render(location.pathname));
window.addEventListener("DOMContentLoaded", () => render(location.pathname));

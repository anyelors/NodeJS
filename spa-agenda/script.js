const rutas = {
  "/": `
    <h2>📌 Inicio</h2>
    <p>Bienvenido a tu agenda de eventos. Consulta y organiza tu tiempo fácilmente.</p>
  `,
  "/calendario": `
    <h2>📅 Calendario de Eventos</h2>
    <ul>
      <li>🎤 12 de julio - Charla sobre UX</li>
      <li>💻 18 de julio - Taller de JavaScript</li>
      <li>🎨 25 de julio - Workshop de diseño</li>
    </ul>
  `,
  "/contacto": `
    <h2>📬 Contacto</h2>
    <p>Escríbenos a: agenda@eventos.com</p>
  `
};

function navegar(url) {
  history.pushState(null, null, url);
  render(url);
}

function render(url) {
  const app = document.getElementById("app");
  app.innerHTML = rutas[url] || "<h2>404</h2><p>Página no encontrada</p>";
}

document.addEventListener("click", (e) => {
  if (e.target.matches("a[data-link]")) {
    e.preventDefault();
    navegar(e.target.getAttribute("href"));
  }
});

window.addEventListener("popstate", () => render(location.pathname));
window.addEventListener("DOMContentLoaded", () => render(location.pathname));

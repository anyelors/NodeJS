// Contenido dinámico
const rutas = {
  "/": "<h2>🏠 Inicio</h2><p>Bienvenido a la página de inicio</p>",
  "/about": "<h2>ℹ️ Sobre nosotros</h2><p>Somos una empresa educativa.</p>",
  "/contact": "<h2>📞 Contacto</h2><p>Correo: hola@ejemplo.com</p>",
};

const navegar = (url) => {
  history.pushState(null, null, url);
  render(url);
};

const render = (url) => {
  const app = document.getElementById("app");
  app.innerHTML = rutas[url] || "<h2>404</h2><p>Página no encontrada</p>";
};

document.addEventListener("click", (e) => {
  if (e.target.matches("a[data-link]")) {
    e.preventDefault();
    navegar(e.target.getAttribute("href"));
  }
});

window.addEventListener("popstate", () => render(location.pathname));
window.addEventListener("DOMContentLoaded", () => render(location.pathname));

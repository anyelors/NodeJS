import { loginUsuario } from '../utils/auth.js';

export function renderLogin() {
  document.getElementById('app').innerHTML = `
    <h2>Iniciar Sesión</h2>
    <form id="loginForm">
      <input type="text" name="username" placeholder="Usuario" required />
      <input type="password" name="password" placeholder="Contraseña" required />
      <button type="submit">Entrar</button>
    </form>
    <div id="mensajeError"></div>
  `;

  document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const usuario = Object.fromEntries(form);
    const resultado = await loginUsuario(usuario);
    if (resultado.ok) {
      window.history.pushState({}, '', '/clases'); // después añadiremos esa vista
      window.dispatchEvent(new Event('popstate'));
    } else {
      document.getElementById('mensajeError').textContent = resultado.error;
    }
  });
}

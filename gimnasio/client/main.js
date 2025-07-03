import { renderLogin } from './views/login.js';
import { renderClases } from './views/clases.js';
import { renderNotFound } from './views/notFound.js';
import { renderAbout } from './views/about.js';

function render() {
  const path = window.location.pathname;
  if (path === '/login' || path === '/') {
    renderLogin();
  } else if (path === '/clases') {
    renderClases();
  } else if (path === '/about') {
    renderAbout();
  } else {
    renderNotFound();
  }
}

window.addEventListener('popstate', render);
window.addEventListener('DOMContentLoaded', render);

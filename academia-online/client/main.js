import { renderHome } from "./views/home.js";
import { renderCursos } from "./views/cursos.js";
import { renderContacto } from "./views/contacto.js";
import { renderMetodologia } from "./views/metodologia.js";
import { renderFaq } from "./views/faq.js";
import { renderObjetivos } from "./views/objetivos.js";
import { notFound } from "./views/notFound.js";

function render(){
    const path = window.location.pathname;
    if (path === '/' ){
        renderHome();
    } else if(path === '/cursos'){
        renderCursos();
    } else if(path === '/contacto'){
        renderContacto();
    } else if(path === '/metodologia'){
        renderMetodologia();
    } else if(path === '/faq'){
        renderFaq();
    } else if(path === '/objetivos'){
        renderObjetivos();
    } else{
        notFound();
    }
}

document.addEventListener('click', e => {
  if (e.target.matches('a[data-link]')) {
    e.preventDefault();
    window.history.pushState({}, '', e.target.href);
    render();
  }
});

window.addEventListener('popstate', render);
window.addEventListener('DOMContentLoaded',render);
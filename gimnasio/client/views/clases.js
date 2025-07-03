import { obtenerToken, eliminarToken } from '../utils/token.js';

export function renderClases() {
  const token = obtenerToken();

  if (!token) {
    window.history.pushState({}, '', '/login');
    window.dispatchEvent(new Event('popstate'));
    return;
  }

  document.getElementById('app').innerHTML = `
    <div id="clasesContainer">
      <h2>📋 Clases disponibles</h2>
      <div id="listaClases">Cargando...</div>
      <br><br>
      <button id="logoutBtn">Cerrar sesión</button>
    </div>
  `;

  document.getElementById('logoutBtn').addEventListener('click', () => {
    eliminarToken();
    window.history.pushState({}, '', '/login');
    window.dispatchEvent(new Event('popstate'));
  });

  fetch('http://localhost:3000/gimnasio/clases', {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  })
    .then(res => res.ok ? res.json() : Promise.reject())
    .then(data => {
      if (!Array.isArray(data)) throw new Error('Respuesta inválida');
      let html = `<table> 
                    <thead>
                        <tr>
                            <th>Clase</th>
                            <th>Horario</th>
                            <th>Plazas</th>
                        </tr>
                    </thead>
                    <tbody>`;
      html = html + data.map(clase =>        
         `<tr> 
             <td>${clase.nombre}</td>
             <td>${clase.horario}</td>
             <td>${clase.plazas}</td> 
          <tr>`
      ).join('');
      html = html + ` </tbody> </table>`
      document.getElementById('listaClases').innerHTML = html || 'No hay clases aún';
    })
    .catch(() => {
      document.getElementById('listaClases').innerHTML = '⚠️ No autorizado o error al cargar clases';
    });
}

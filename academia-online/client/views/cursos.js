export function renderCursos() {
  
  document.getElementById('app').innerHTML = `
    <div id="clasesContainer">
      <h2>📋 Cursos</h2>
      <div id="listaClases">Cargando...</div>
    </div>
  `;

  fetch('http://localhost:3000/api/cursos')
    .then(res => res.ok ? res.json() : Promise.reject())
    .then(data => {
      if (!Array.isArray(data)) throw new Error('Respuesta inválida');
      let html = `<table> 
                    <thead>
                        <tr>
                            <th>Codigo</th>
                            <th>Nombre</th>
                            <th>Nivel</th>
                        </tr>
                    </thead>
                    <tbody>`;
      html = html + data.map(clase =>        
         `<tr> 
             <td>${clase.id}</td>
             <td>${clase.name}</td>
             <td>${clase.nivel}</td> 
          <tr>`
      ).join('');
      html = html + ` </tbody> </table>`
      document.getElementById('listaClases').innerHTML = html || 'No hay cursos aún';
    })
    .catch(() => {
      document.getElementById('listaClases').innerHTML = '⚠️ Error al cargar los cursos';
    });
}
document.getElementById('btn-ubicacion').addEventListener('click', obtenerUbicacion);

function obtenerUbicacion() {
  const resultado = document.getElementById('resultado');
  const lista = document.getElementById('sugerencias');

  if (!navigator.geolocation) {
    resultado.textContent = '🚫 Geolocalización no compatible con tu navegador.';
    return;
  }

  resultado.textContent = '📡 Obteniendo ubicación...';

  setTimeout(() => {
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const { latitude, longitude } = pos.coords;
      resultado.textContent = `📍 Estás en: ${latitude.toFixed(5)}, ${longitude.toFixed(5)}`;

      // Simulación de locales cercanos (en un caso real, harías una consulta a una API con coords)
      const locales = [
        { nombre: "Pizzería Don Mario", distanciaKm: 0.3 },
        { nombre: "Cafetería Luna", distanciaKm: 0.6 },
        { nombre: "Tienda BioMarket", distanciaKm: 1.2 }
      ];

      lista.innerHTML = '';
      locales.forEach(local => {
        const li = document.createElement('li');
        li.textContent = `${local.nombre} — a ${local.distanciaKm} km`;
        lista.appendChild(li);
      });
    },
    (err) => {
      resultado.textContent = `❌ Error: ${err.message}`;
    }
  )}, "2000");
}

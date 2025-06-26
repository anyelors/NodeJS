const API_KEY = '9a6b73d8191348495d92529beae28de7';

document.getElementById('boton-ubicacion').addEventListener('click', obtenerDatos);

function obtenerDatos() {
  const ubicacion = document.getElementById('ubicacion');
  const clima = document.getElementById('clima');
  const hora = document.getElementById('hora');
  const mapa = document.getElementById('mapa');

  if (!navigator.geolocation) {
    ubicacion.textContent = '🚫 Tu navegador no soporta geolocalización.';
    return;
  }

  ubicacion.textContent = '📡 Obteniendo ubicación...';

  navigator.geolocation.getCurrentPosition(async (pos) => {
    const { latitude, longitude } = pos.coords;

    // Mostrar ubicación textual
    ubicacion.textContent = `📌 Coordenadas: ${latitude.toFixed(5)}, ${longitude.toFixed(5)}`;

    // Mostrar hora local desde el navegador
    const ahora = new Date();
    hora.textContent = `🕒 Hora local: ${ahora.toLocaleTimeString()}`;

    // Mostrar clima actual
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=es`);
      const data = await res.json();
      const desc = data.weather[0].description;
      const temp = data.main.temp;
      clima.textContent = `🌦️ Clima: ${desc}, ${temp} °C`;
    } catch (error) {
      clima.textContent = '❌ Error al obtener el clima';
    }

    // Mostrar mapa con Leaflet
    mapa.innerHTML = ''; // Limpiar mapa anterior si existe

    const map = L.map('mapa').setView([latitude, longitude], 14);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    L.marker([latitude, longitude]).addTo(map)
      .bindPopup('📍 Estás aquí')
      .openPopup();
  }, () => {
    ubicacion.textContent = '❌ No se pudo obtener tu ubicación';
  });
}

function obtenerUbicacion() {
  const resultado = document.getElementById('resultado');

  if (!navigator.geolocation) {
    resultado.textContent = '🚫 Tu navegador no admite geolocalización.';
    return;
  }

  resultado.textContent = '⏳ Obteniendo ubicación...';

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const lat = pos.coords.latitude.toFixed(5);
      const lon = pos.coords.longitude.toFixed(5);
      const enlace = `https://www.google.com/maps?q=${lat},${lon}`;
      resultado.innerHTML = `✅ <a href="${enlace}" target="_blank">Abrir ubicación en Google Maps</a>`;
    },
    () => {
      resultado.textContent = '❌ No se pudo obtener tu ubicación.';
    }
  );
}

//###############################################################

function obtenerOpenCage() {
  const KEY_OPEN_CAGE = '3af6f384f5a84019bdf47fc7a12577ec';
  const ubicacion_city = document.getElementById('ubicacion-ciudad');

  if (!navigator.geolocation) {
    ubicacion_city.textContent = '🚫 Tu navegador no soporta geolocalización.';
    return;
  }

  ubicacion_city.textContent = '📡 Obteniendo ubicación...';

  navigator.geolocation.getCurrentPosition(async (pos) => {
    const { latitude, longitude } = pos.coords;
    try {
      const res = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}%2C${longitude}&key=${KEY_OPEN_CAGE}`);
      const data = await res.json();
      const country = data.results[0].components.country;
      const city = data.results[0].components._normalized_city;
      ubicacion_city.textContent = `Pais: ${country} - Ciudad: ${city}`;

      console.log(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=es`)
      const res1 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=es`);
      const data1 = await res1.json();
      const desc = data1.weather[0].description;
      const temp = data1.main.temp;
      (temp > 25) ? calor.textContent = `🌤️ Clima: ${desc}, ${temp} °C Hace Calor` : calor.textContent = `🌦️ Clima: ${desc}`;
    } catch (error) {
      ubicacion_city.textContent = '❌ Error al obtener OpenCage';
    }
  }, () => {
    ubicacion_city.textContent = '❌ No se pudo obtener tu ubicación';
  });
}

obtenerOpenCage();

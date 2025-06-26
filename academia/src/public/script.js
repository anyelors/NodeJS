function obtenerDatos() {
  const API_KEY = '9a6b73d8191348495d92529beae28de7';  
  const clima = document.getElementById('clima');
  const hora = document.getElementById('hora');

  if (!navigator.geolocation) {
    clima.textContent = '🚫 Tu navegador no soporta geolocalización.';
    return;
  }

  clima.textContent = '📡 Obteniendo ubicación...';

  navigator.geolocation.getCurrentPosition(async (pos) => {
    const { latitude, longitude } = pos.coords;

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
  }, () => {
    clima.textContent = '❌ No se pudo obtener tu ubicación';
  });
}

obtenerDatos();
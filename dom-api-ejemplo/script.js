function guardarNombre() {
  const nombre = prompt("Introduce tu nombre:");
  localStorage.setItem("nombre", nombre);
  document.getElementById('titulo').textContent = `Hola ${nombre}`;
}

function verNombre() {
  const nombre = localStorage.getItem("nombre");
  alert(nombre ? `Nombre guardado: ${nombre}` : 'No hay nombre guardado');
}

function verUbicacion() {
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const lat = pos.coords.latitude.toFixed(5);
      const long = pos.coords.longitude.toFixed(5);
      alert(`📍 Estás en: Latitud ${lat}, Longitud ${long}`);
    },
    () => alert('❌ No se pudo obtener la ubicación')
  );
}

function pedirUsuarios() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => {
      if (!res.ok) throw new Error('Respuesta inválida del servidor');
      return res.json();
    })
    .then(data => {
      const lista = document.getElementById("usuarios");
      lista.innerHTML = '';
      data.forEach(user => {
        const li = document.createElement("li");
        li.textContent = `${user.name} - [${user.username}]`;
        lista.appendChild(li);
      });
    })
    .catch(err => {
      alert(`❌ Error al cargar usuarios: ${err.message}`);
    });
}

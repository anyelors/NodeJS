document.getElementById('formulario').addEventListener('submit', async e => {
  e.preventDefault();

  const datos = {
    titulo: e.target.titulo.value,
    autor: e.target.autor.value,
    anio: e.target.anio.value,
    disponible: e.options[disponible.selectedIndex]
  };

  const res = await fetch('http://localhost:3000/api/libros', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos)
  });

  const result = await res.json();
  if (res.status === 400) {
    alert('Errores: ' + result.errores.map(e => e.msg).join(', '));
  } else {
    alert(result.mensaje);
  }
});

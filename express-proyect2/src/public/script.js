document.getElementById('formulario').addEventListener('submit', async e => {
  e.preventDefault();

  const datos = {
    nombre: e.target.nombre.value,
    usuario: e.target.usuario.value,
    password: e.target.password.value,
    email: e.target.email.value,
    edad: e.target.edad.value
  };

  const res = await fetch('http://localhost:3000/api/registro', {
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

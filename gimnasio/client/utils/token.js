export function obtenerToken() {
  return localStorage.getItem('token');
}

export function eliminarToken() {
  localStorage.removeItem('token');
}

export function usuarioAutenticado() {
  const token = obtenerToken();
  return token && token.length > 10; // chequeo simple
}

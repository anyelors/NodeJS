export async function loginUsuario({ username, password }) {
  try {
    const res = await fetch('/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    if (!res.ok) {
      const data = await res.json();
      return { ok: false, error: data.message || 'Error de login' };
    }

    const { token } = await res.json();
    localStorage.setItem('token', token);
    return { ok: true };
  } catch (err) {
    return { ok: false, error: 'Error de red o servidor' };
  }
}

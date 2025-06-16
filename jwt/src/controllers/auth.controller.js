import jwt from 'jsonwebtoken';

export const login = (req, res) => {
  const { usuario, password } = req.body;

  // En producción: verificar contra una base de datos
  if (usuario === 'admin' && password === '1234') {
    const token = jwt.sign(
      { usuario: 'admin', rol: 'admin' },
      'mi_clave_secreta',
      { expiresIn: '1h' }
    );
    res.json({ token });
  } else if(usuario === 'guest'){
    const token = jwt.sign(
      { usuario: 'guest', rol: 'guest' },
      'mi_clave_secreta',
      { expiresIn: '1h' }
    );
    res.json({ tokenGuest : token });
  } else {
    res.status(401).json({ error: '❌ Usuario o Password incorrecto' });
  }
};

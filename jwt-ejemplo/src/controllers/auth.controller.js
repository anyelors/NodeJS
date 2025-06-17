import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { db } from '../db/connection.js';

export const register = async (req, res) => {
  const { username, password, role } = req.body;
  const hash = await bcrypt.hash(password, 10);
  try {
    await db.execute('INSERT INTO users (username, password, role) VALUES (?, ?, ?)', [
      username,
      hash,
      role || 'user'
    ]);
    res.status(201).json({ message: 'Usuario registrado' });
  } catch {
    res.status(400).json({ message: 'Error en el registro' });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  const [rows] = await db.execute('SELECT * FROM users WHERE username = ?', [username]);
  const user = rows[0];
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Credenciales inválidas' });
  }
  const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: '1h'
  });
  res.json({ token });
};

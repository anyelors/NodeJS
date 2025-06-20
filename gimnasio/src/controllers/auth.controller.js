import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { usersDB } from '../db/users.db.js';

export const register = async (req, res) => {
  const { username, email, password, role } = req.body;
  const hash = await bcrypt.hash(password, 10);
  
  const conn = await usersDB.getConnection();
  try {
    await conn.query('INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)', [
      username,
      email,
      hash,
      role || 'cliente'
    ]);
    res.status(201).json({ message: 'Usuario registrado' });
     } catch {
    res.status(400).json({ message: 'Error en el registro' });
  }  finally {
    if (conn) conn.release();
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  
  const conn = await usersDB.getConnection();
  try {
    const [rows] = await conn.execute('SELECT id, username, password, role FROM users WHERE username = ?', [username]);
    const user = rows[0];
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }
    const token = jwt.sign({ id: user.id, username: user.username, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    });
    res.json({ token });
  } catch (error) {
    console.error("❌ Error al obtener usuario:", error.message);
    res.status(500).json({ error: "Error al obtener usuario" });
  } finally {
    if (conn) conn.release();
  }  
};

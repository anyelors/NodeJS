import express from "express"
import cookieParser from 'cookie-parser';
import session from 'express-session';

const app = express();

app.use(cookieParser());
app.use(session({
  secret: 'mi-clave-secreta',
  resave: false,
  saveUninitialized: false
}));

app.get('/set-cookie', (req, res) => {
  res.cookie('usuario', 'Jon', { maxAge: 3600000 }); // 1 hora
  res.send('Cookie creada');
});

app.get('/get-cookie', (req, res) => {
  const usuario = req.cookies.usuario;
  res.send(`Cookie recuperada: ${usuario}`);
});

app.get('/login', (req, res) => {
  req.session.usuario = 'Jone';
  res.send('Sesion iniciada ✅');
});

app.get('/panel', (req, res) => {
  if (req.session.usuario) {
    res.send(`🙋 Bienvenido ${req.session.usuario}`);
  } else {
    res.status(403).send('Debes iniciar sesión');
  }
});

app.get('/logout', (req, res) => {
  req.session.destroy();
  res.send('Sesion cerrada ❌');
});


export default app;

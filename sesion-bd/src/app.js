import dotenv from 'dotenv';
import express from 'express'
import session from 'express-session';
import MySQLStore from 'express-mysql-session';

dotenv.config();    // lee .env
const HOST = process.env.HOST || '127.0.0.1';
const PORTBD = process.env.PORTBD || 3306;
const USER = process.env.USER;
const PASS = process.env.PASS;
const DATABD = process.env.DATABD;

const dbOptions = {
  host: HOST,
  port: PORTBD,
  user: USER,
  password: PASS,
  database: DATABD
};

const sessionStore = new MySQLStore(dbOptions);
const app = express();

app.use(session({
  secret: 'clave-secreta-mysql',
  resave: false,
  saveUninitialized: false,
  store: sessionStore,
  cookie: { maxAge: 3600000 }
}));

app.get('/test-db', async (req, res) => {
  try {
    const connection = await sessionStore.connection;
    connection.query('SELECT 1', (err, results) => {
      if (err) {
        console.error('Error al conectar con la BBDD:', err);
        return res.status(500).send('Error de conexión');
      }
      res.send('Conexión a MySQL exitosa');
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Error general');
  }
});

app.get('/set-session', (req, res) => {
  req.session.usuario = "Lupe";
  res.send("Sesión creada.");
});

app.get('/get-session', (req, res) => {
  res.send(`Sesión almacenada: <b>${req.session.usuario || "No hay sesión"}</b>`);
});

export default app;

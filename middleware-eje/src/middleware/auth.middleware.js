function authMiddleware(req, res, next) {
  if (req.headers.rol !== 'admin') {
    return res.status(403).send('⛔ Acceso denegado: No eres administrador');
  }
  next();
}

export default authMiddleware;

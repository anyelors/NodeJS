function validationMiddleware(req, res, next) {
  const { nombre, edad } = req.body;

  if (!nombre || typeof nombre !== 'string') {
    return res.status(400).json({ error: true, message: 'Nombre inválido' });
  }

  if (!edad || isNaN(edad) || edad < 18) {
    return res.status(400).json({ error: true, message: 'Edad inválida (debe ser mayor de 18)' });
  }

  next();
}

export default validationMiddleware;
function logMiddleware(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // Sigue con la siguiente función
}

module.exports = logMiddleware;

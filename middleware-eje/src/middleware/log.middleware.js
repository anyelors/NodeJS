import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function logMiddleware(req, res, next) {
  guardarLog(`${req.method} ${req.url}`);
  console.log(`[${new Date().toString()}] ${req.method} ${req.url}`);
  next();
}

export default logMiddleware;

const guardarLog = (mensaje) => {
  const logPath = path.join(__dirname, "../logs", "accesos.log");
  const logMensaje = `[${new Date().toString()}] ${mensaje}\n`;

  // Agrega el mensaje al final del archivo
  fs.appendFile(logPath, logMensaje, (err) => {
    if (err) {
      console.error("Error al escribir en el log:", err);
    }
  });
};
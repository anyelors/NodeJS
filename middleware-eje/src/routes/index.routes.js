import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import validationMiddleware from "../middleware/validation.middleware.js";
import hits from "../middleware/count.middleware.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

// ✅ Definir `__dirname` correctamente en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get("/", (_, res) => {
  res.send("🌍 ¡Bienvenido a la página principal!");
});

router.get("/acceso", validationMiddleware, (req, res) => {
  res.json({ success: true, message: "✅ Servidor funcionando correctamente" });
});

// Simulación de un error en `/error`
router.get("/error", (req, res, next) => {
  next(new Error("Esto es un error simulado"));
});

router.get("/stats", (req, res) => {
  res.json({
    success: true,
    total: hits.hits.total,
    totalHome: hits.hits["/"],
    totalAcceso: hits.hits["/acceso"],
  });
});

router.get("/logsAcceso", authMiddleware, (req, res) => {
  const logPath = path.join(__dirname, "../logs", "accesos.log");
  fs.readFile(logPath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Error al leer el archivo log");
    }

    // Mostrar el log como texto plano en el navegador
    res.setHeader("Content-Type", "text/plain");
    res.send(data);
  });
});

export default router;

import express from "express";
import cors from "cors";
import countMiddleware from "./middleware/count.middleware.js";
import errorMiddleware from "./middleware/error.middleware.js";
import logMiddleware from "./middleware/log.middleware.js";
import routes from "./routes/index.routes.js";

const app = express();

// Middleware globales
app.use(cors());
app.use(express.json());
app.use(countMiddleware.countMiddleware);

app.use(logMiddleware);

// Rutas principales
app.use("/", routes);

// Middleware de manejo de errores (Siempre al final)
app.use(errorMiddleware);

export default app;

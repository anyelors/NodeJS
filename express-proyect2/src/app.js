import express from 'express';
import cors    from 'cors';
import routes  from './routes/index.js';
import logger  from './middleware/logger.js'
import { securityCors, securitylimiter }  from './middleware/security.js';

const app = express();

app.use(logger);                
app.use(securityCors); 
app.use(securitylimiter);               
app.use(express.json());        
// Middleware incorporado: servir archivos de /public
app.use('/api/registro', express.static('src/public'));


// Rutas principales
app.use('/', routes);

export default app;
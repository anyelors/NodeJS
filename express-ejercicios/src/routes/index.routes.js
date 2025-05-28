import { Router } from 'express';
const router = Router();

/**1. 
router.get('/saludo/:nombre', function (req, res) {
    const name = req.params.nombre.toUpperCase();
    res.send(`👋 Kaixo, ${name} !Qué bueno que viniste!`);
});
*/

/**2. 
function esUnNumero(input) {
  return !isNaN(input) && typeof input === 'number';
}

router.post('/calcular', (req, res) => {
  const { a = 0, b = 0 } = req.body;

  if (!esUnNumero(a) || !esUnNumero(b))
    return res.status(400).json({ error: 'Los parametros deben de ser numeros' });

  let suma = a + b;
  res.status(201).json({ resultado: suma });
});
*/

/**3. 
router.get('/info', function (req, res) {
    const hostname = req.hostname;
    const host = req.host;
    const hostversion = req.httpVersion;
    
    let info =  `{"hostName": "${hostname}", "host": "${host}", "httpVersion": "${hostversion}"}`
    let jsonInfo = JSON.parse(info);
    res.json( jsonInfo );
});
*/

/**4.  
router.get('/edad/:anioNacimiento', function (req, res) {
    const anioNacimiento = parseInt(req.params.anioNacimiento);
    const añoActual = new Date().getFullYear();
    if (anioNacimiento > añoActual)
      return res.status(400).json({ error: 'Los parametros incorrectos' });

    const edad = añoActual - anioNacimiento;
    res.json({ edad: edad });
});
*/

/** */
router.use((req, res, next) => {
  console.log('🧩 Middleware en routes.js - Paso 1');
  next();
});

router.use((req, res, next) => {
  console.log('🧩 Middleware en routes.js - Paso 2');
  next();
});

router.get('/saludo/:nombre', (req, res) => {
  console.log('🧩 Middleware en routes.js - Paso final');
  const { nombre } = req.params;
  res.send(`Kaixo, ${nombre} !Qué bueno que viniste!`);
});


export default router;
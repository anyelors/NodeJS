/** 
function calcularEdad(añoNacimiento) {
  const añoActual = new Date().getFullYear();
  const edad = añoActual - añoNacimiento;
  return edad;
}

const resultado = calcularEdad(1982);
console.log("Edad:", resultado);
*/

/** 
function dividir(a, b) {
  return a / b;
}

const x = 10;
const y = 0;

const resultado = dividir(x, y);
console.log("Resultado:", resultado);
*/

/** */
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    console.log("Solicitud recibida en '/'");
    debugger; // Punto de interrupción para inspección
    res.send('Kaixo, mundo!');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});



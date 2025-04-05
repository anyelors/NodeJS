/** 
const sumarFlecha = (a, b) => a + b;
console.log("La Suma es: "+sumarFlecha(5, 7));

const saludar = () => {
    console.log("Hola!! Lupe");
     return 0;
};
console.log(saludar());

const cuadrado = num => num * num;
console.log(cuadrado(4));

const multiplicar = (a = 2,b = 2) => a * b;
console.log(multiplicar(4, 2));
console.log(multiplicar(4));

const obtenerNombreCompleto = (nombre = "John", apellido = "Doe") => {
    return `Tu nombre completo es ${nombre} ${apellido}`;
};
console.log(obtenerNombreCompleto("Juan", "Pérez"));
console.log(obtenerNombreCompleto());

const persona = {
    nombre: "Ana",
    edad: 23,
    saludar: function() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
    }
};
persona.saludar(); // Salida: Hola, soy Ana

persona.nombre = "Lupe";
persona.edad = 9
persona.saludar();

const persona2 = {
    nombre: "Ana",
    saludar: () => {
        console.log(`Hola, soy ${this.nombre}`);
    }
};
persona2.saludar(); // Salida: Hola, soy undefined

let now = new Date();
console.log("Tiempo start:", now)
setTimeout(() => {
    console.log("Tiempo cumplido")
    let now = new Date();
    console.log("Tiempo finaly:", now)
}, 1000);

const numeros = [1, 2, 3, 4];
const cuadrados = numeros.map(num => num ** 2);
console.log(cuadrados); // Salida: [1, 4, 9, 16]

document.getElementById("boton").addEventListener("click", () => {
    console.log("Botón clickeado");
});

const saludo = nom => "Kaixo, " + nom;
console.log(saludo("Lupe"));

const creaPerson = (nombre, edad) => ({nombre, edad});
console.table(creaPerson("Lupe", 23));

const calcularArea = (base, altura) => `El area es: ${((base * altura)/2)}`
console.log(calcularArea(5,10));

function kaixo(nombre, nom, callback1, callback2, callback3 = despedir) {
    console.log(`Hola, ${nombre}, Que tal ${nom}`);
    callback1();
    callback2();
    callback3();
}

function despedir() {
    console.log("Chaluego!!");
}

function queTal() {
    console.log(`, Como estas?`);
}

function respuesta() {
    console.log(`Bien`);
}

kaixo("Lupe", "Paco", queTal, respuesta, despedir);

const hello = (nombre, callback) => {
    console.log(`Hola, ${nombre}`);
    callback();
};
hello("Ana", () => console.log("Espero que tengas un excelente día."));

const cargarDatos = (callback) => {
    let now = new Date();
    console.log("Tiempo Inicio:", now)
    console.log("Cargando datos...");
    setTimeout(() => {
        const datos = ["1", "2", "3"];
        callback(datos);
    }, 3000);
};

cargarDatos((datos) => {
    console.log("Datos cargados:", datos);
    let now = new Date();
    console.log("Tiempo Fin:", now)
});
*/

//EJERCICIOS    ##########################################################
/**1. 
//function calcularDoble(num) {
//    return num * 2;
//}

const calcularDoble = num => num * 2;
console.log(calcularDoble(8));
*/

/**2.  
//function esPositivo(num) {
//    return num > 0;
//}

const esPositivo = num => `El numero ${num} es Positivo`;
const esNegativo = num => `El numero ${num} es Negativo`;

let n1 = 5;
console.log(n1 > 0 ? esPositivo(n1) : esNegativo(n1));
let n2 = -4;
console.log(n2 > 0 ? esPositivo(n2) : esNegativo(n2));
*/

/**3. 
//function generarSaludo(nombre) {
//    return `Kaixo, ${nombre}!`;
//}

const generarSaludo = nom => `Kaixo, ${nom}!`;
console.log(generarSaludo("Lupe"));
*/

/**4. 
//function convertirAFahrenheit(celsius) {
//    return (celsius * 9/5) + 32;
//}

const convertirAFahrenheit = celsius => (celsius * 9/5) + 32;
let cel = 45;
console.log(`${cel} Grados Celsius son ${convertirAFahrenheit(45)} Grados Fahrenheit`);
*/

/**5. 
const palabras = ["hola", "sol", "cielo", "es"];
const longPalabra = palabras.map(num => num.length >= 4 ? num : null).filter(Boolean);
const palabrasFiltradas = palabras.filter(palabra => palabra.length >= 4);
console.log(palabras);
console.log(longPalabra);
console.log(palabrasFiltradas);
*/

/**6. */  
const palabras = "hola";
const vocales = "aeiou"
const conteo = [...palabras].filter(letra => vocales.includes(letra)).length;
console.log(conteo);


/**7. 
const numeros = [1, 2, 3, 4];
const potenciaCubo = numeros.map(num => Math.pow(num, 3));
console.log(potenciaCubo);
*/

/**8. 
const palabras = ["sol", "cielo", "montaña"];
const longPalabra = palabras.map(num => num.length);
console.log(palabras);
console.log(longPalabra);
*/
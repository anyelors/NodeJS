/** 
function saludar() {
    console.log("Epa, welcome al curso de JavaScript!");
}
saludar();

let nom;
console.log(nom);
nom = "Lupe";

 
class Persona {
    constructor() {
        this.nombre = "Juan";
    }
}
const obj = new Persona();


const despedir = function() {
    console.log("Gero arte!!");
}
despedir();


const sumar = (a, b) => a + b;
console.log(sumar(3,4));


function producto(a, b) {
    return a * b;
}
console.log(producto(3,4));


function saludo(nombre = "Invitado") {
    return `Hola, ${nombre}!`;
}
console.log(saludo()); // "Hola, Invitado!"
console.log(saludo("Pedro")); // "Hola, Pedro!"


function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    if (nombre.trim() === "") {
        alert("El campo no puede estar vacío");
        return false;
    }
    return true;
}

function cambiarColor() {
    document.getElementById("miBoton").style.backgroundColor = "red"
    setTimeout(function(){
        document.getElementById("miBoton").style.backgroundColor = "buttonface"; 
    },2000);   
}
*/

//EJEMPLOS########################################################################

/*1.* 
function contarPares(numeros) {
    let contador = 0;
        for (let i = 0; i < numeros.length; i++) {
            if (numeros[i] % 2 === 0) {
                contador++;
            }
        }
    return `Hay ${contador} números Pares en la lista.`;
}

function contarImpares(numeros) {
    let contador = 0;
        for (let i = 0; i < numeros.length; i++) {
            if (numeros[i] % 2 !== 0) {
                contador++;
            }
        }
    return `Hay ${contador} números Impares en la lista.`;
}

let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log(contarPares(lista));
console.log(contarImpares(lista));
*/

/**2. 
function verificarPassword() {
    let passwordCorrecta = "1234";
    let intentos = 3;
    while (intentos > 0) {
        let passwordUsuario = prompt(`Introduce tu contraseña [Intento ${intentos}]:`);
        
        if (passwordUsuario === passwordCorrecta) {
            console.log("Acceso concedido.");
            return;
        } else {
            intentos--;
            console.log(`Contraseña incorrecta. Te quedan ${intentos} intentos.`);
        }
    }
    console.log("Acceso bloqueado. Demasiados intentos fallidos.");
}

verificarPassword();
*/

/**3.
function calcularFactorial(num) {
    if (num < 0) return "No se puede calcular el factorial de un número negativo.";

    let resultado = 1;
    for (let i = 1; i <= num; i++) {
        resultado *= i;
    }
    return `El factorial de ${num} es ${resultado}`;
}
console.log(calcularFactorial(5));
*/

/**4. 
function validarCorreos(correos) {
    const listaCorrectos = document.getElementById("correos-validos");
    const listaInCorrectos = document.getElementById("correos-invalidos");
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar correos
    for (let correo of correos) {
        if (regexEmail.test(correo)) {
            const elemento = document.createElement("li");
            elemento.textContent = correo;
            listaCorrectos.appendChild(elemento);
        } else {
            const elementoIn = document.createElement("li");
            elementoIn.textContent = correo;
            listaInCorrectos.appendChild(elementoIn);
        }
    }
}
const listaCorreos = ["jonn@example.com", "mari@", "ane@gmail", "peio@yahoo.com"];
validarCorreos(listaCorreos);
*/

//EJERCICIOS########################################################################

/*1.* 
let arrayNom = [];
let text;

function capturarNombres(nom) {
    if (nom.toLowerCase() != "fin")
        arrayNom.push(nom);
}

do{
    text = prompt("Ingrese nombre [fin para terminar]:");
    if (!text || !text.trim() || text == "") {
        console.log("Favor digite un nombre valido");
    } else {
        capturarNombres(text);
    }
} while(text.toLowerCase() != "fin");
console.table(arrayNom);
*/

/**2.  
let precio;
function calcularPrecioConIVA(precio = 10, iva = 21) {
    return (precio * (1 + iva / 100));
}

precio = parseFloat(prompt("Digite Precio: "));
if (!precio || isNaN(precio)) {
    console.log("Por favor, ingresa un precio válido.");
} else {
    console.log(calcularPrecioConIVA(precio, 10).toFixed(2));
    console.log(calcularPrecioConIVA(precio).toFixed(2));
    console.log(calcularPrecioConIVA().toFixed(2));
}
*/

/*3.* 
let text;

function contarVocales(str) {
    let vocales = "aeiou";
    let i = 0;
    let cont = 0;
    str = str.toLowerCase();
    while (i <= str.length - 1) {
        if (vocales.includes(str[i]))
            cont++;   
        i++;
    }
    return cont;
}

function contarVocalesFor(str) {
    let vocales = "aeiou";
    let cont = 0;

    for (const letra of str.toLowerCase()) {
        if (vocales.includes(letra))
            cont++;
    }
    return cont;
}

text = prompt("Ingrese palabra para contar vocales:");
if (!text || !text.trim() || text == "") {
    console.log("Favor digite un nombre valido");
} else {
    console.log(`En la palabre ${text} existen ${contarVocales(text)} vocales`);
    console.log(`En la palabre ${text} existen ${contarVocalesFor(text)} vocales`);
}
*/

/**4. */ 
let radio;

function areaCirculo(radio) {
    return Math.PI * Math.pow(radio, 2);
}

radio = parseFloat(prompt("Digite radio: "));
if (!radio || isNaN(radio)) {
    console.log("Por favor, ingresa un valor válido.");
} else {
    console.log(`El radio ${radio} tiene un area del circulo de ${areaCirculo(radio).toFixed(2)}`);
}    


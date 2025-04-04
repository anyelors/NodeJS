/*
console.log("Hola Mundo !!!");

const reverseStr = str => str.split('').reverse().join('');
console.log(reverseStr('Lupe'));

console.log("5" + 3);
console.log(+"5" + 3);

let nom = "Lupe";
console.log("Hello, " + nom + "!");
console.log(typeof nom);

let frutas = ["Manzana", "Banano", "Pera"];
console.log(frutas[0]);
frutas.push("Pepino");
console.log(frutas[3]);
console.table(frutas);

let num = 10;
if (num > 5) {
    console.log(`Numero ${num} mayor a 5`);
}else{
    console.log(`Numero ${num} menor igual a 5`);
}

saludar("Lupe");
function saludar(nom) {
    console.log(`Hello, ${nom}, que haces?`);
}

function resta(a, b) {
    return a - b;
}
console.log("La resta es: ", resta(5,3));

let n1 = 3;
let n2 = 2;
console.log("La suma es: ", n1 + n2);
console.log("La resta es: ", n1 - n2);
console.log("La Mutiplicacion es: ", n1 * n2);
console.log("La Divide es: ", n1 / n2);
console.log("La Modulo es: ", n1 % n2);
console.log("La Exponente es: ", n1 ** n2);

n1 = 10;
n2 = "10";
console.log(n1 == n2);
console.log(n1 === n2);
console.log(typeof n1);
console.log(typeof n2);

let edad = 20;
let tienePermiso = true;

if (edad >= 18 && tienePermiso)
    console.log("Puede Manejar");
else
    console.log("No puede Manejar");


let nombre = "Lucas";
edad = 25;
let esMayor = edad >= 18;
let amigos = ["Ana", "Juan", "Pedro"];

console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Es mayor de edad:", esMayor);
console.log("Primer amigo:", amigos[0]);

// Operadores
console.log("¿Edad es igual a 25?", edad === 25);
console.log("¿Edad es menor a 30?", edad < 30);

console.log(false == 0);
console.log(false == 1);

let array = ["Hola","chau"]
let elementoEliminado;

console.log(array);
console.log(array[1]);

elementoEliminado = array.pop();
console.log(elementoEliminado);
console.log(array);

let numeros = [1,2,3];
let cuadrados = numeros.map(num => num * num);
console.log(numeros);
console.log(cuadrados);

numeros = [1,2,3,4,5,6];
let pares = numeros.filter(num => num % 2 === 0);
let impares = numeros.filter(num => num % 2 !== 0);
console.log(pares);
console.log(impares);

const pi = 3.1416
//npm install prompt-sync
//const prompt = require ("prompt-sync")({sigint: true});
let radio = prompt("Valor Radio: ",0);
let area = pi * (radio ** 2);
console.log(`El Area es: ${area}`);

let array1 = ["Hola","pedro","chau","camion"];
let array2 = array1.filter(str => str.length === 4);
console.log(array2);

let edad1 = Number(prompt("Ingresa tu edad:"));
if (isNaN(edad1))
    console.log("Favor, Introduce un numero valido");
else
    console.log(`Tienes ${edad1} años`);

let precio = Number(prompt("Ingresa precio del producto"));
let descuento = Number(prompt("Ingrese porcentaje de descuento"));
let precioFinal = precio - (precio * descuento / 100);
console.log("El precio final con descuento es: €", precioFinal);

let nom1 = prompt("Ingresa Nombre a Saludar!");
if (nom1){
    console.log(`kaixo, ${nom1} ! Welcom a nuestra aplicacion.`);
}else{
    console.log("No ingresaste ningun nombre");
}

let anioNacimiento = prompt("¿En que año naciste?");
let anioActual = new Date().getFullYear();
if (anioNacimiento && !isNaN(anioActual) && anioNacimiento <= anioActual){
    let edadAnio = anioActual - parseInt(anioNacimiento);
    console.log(`Tienes aproximadamente ${edadAnio} años.`)
}else {
    console.log("Por Favor, Ingresa un año valido");
}

let pass = prompt("Ingrese la contraseña de acceso");
if (pass === "1234") {
    console.log("Acceso concedido. ¡Bienvenido...!");
} else {
    console.log("Contraseña incorrecta. Intenta nuevamente");
}

let numero = prompt("Ingresa un numero");
if (numero && !isNaN(numero)) {
    let num = parseInt(numero);
    if (num % 2 === 0) {
        console.log(`El numero ${num} es Par`);F
    } else {
        console.log(`El numero ${num} es Impar`);
    }
} else {
    console.log("Por favor, ingrese un numero valido");
}
*/

/*
let nom = prompt("Ingresa nombre");
let edad = parseInt(prompt("Ingrese edad"));
if (isNaN(edad) || edad <= 0) {
    console.log("Por favor, ingrese un numero valido");
} else if (nom || nom.trim().length === 0) {
    console.log("Por favor, ingrese un nombre");
} else {
    console.log(`${nom} tiene ${edad} Años`);
}
*/

/*
let edad = parseInt(prompt("Ingrese edad"));
if (isNaN(edad) || edad <= 0) {
    console.log("Por favor, ingrese una edad valida");
} else if (edad >= 18) {
    console.log("Persona Mayor de edad");
} else {
    console.log(`Persona Menor de edad`);
}
*/

/*
let correo = prompt("Ingresa correo electronico");
if (correo.trim().length == 0) {
    console.log("Por favor, ingrese un correo electronico");
} else if (!correo.includes("@") || !correo.includes(".")) {
    console.log("Por favor, ingrese un correo electronico valido");
} else {
    console.log(`El correo electronico ${correo} es valido`);
}

if (validarEmail(correo)) {
    console.log("El email es válido.");
} else {
    console.log("El email no es válido.");
}

function validarEmail(email) {
    // Expresión regular para validar un correo electrónico
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}
*/

/*
let usuario = "Editor";
switch (usuario) {
    case "Admin":
        console.log("Tienes todos los permisos.");
        break;
    case "Editor":
        console.log("Puedes modificar, pero no borrar.");
        break;
    case "Usuario":
        console.log("Solo puedes ver el contenido.");
        break;
    default:
        console.log("Rol no reconocido.");
}
*/

/*
// Obtener el ancho de la ventana del navegador
let anchoVentana = window.innerWidth;
// Verificar el tipo de dispositivo según el ancho
if (anchoVentana <= 768) {
    console.log("Estás usando un dispositivo móvil.");
} else if (anchoVentana > 768 && anchoVentana <= 1024) {
    console.log("Estás usando una tablet.");
} else {
    console.log("Estás usando un ordenador.");
}
*/

/*
// Solicitar la cantidad de productos comprados
let cantidad = Number(prompt("¿Cuántos productos has comprado?"));
// Verificar el descuento aplicado
if (!isNaN(cantidad) && cantidad > 0) {
    if (cantidad >= 10) {
        console.log("Se aplica un 20% de descuento.");
    } else if (cantidad >= 5) {
        console.log("Se aplica un 10% de descuento.");
    } else {
        console.log("No tienes descuento.");
    }
} else {
    console.log("Por favor, introduce un número válido.");
}
*/

/*
// Solicitar el idioma preferido
let idioma = prompt("Selecciona tu idioma: es (español), en (inglés), fr (francés):");
// Mostrar el mensaje en el idioma seleccionado
switch (idioma.trim()) {
    case "es":
        console.log("Bienvenido a nuestra página web.");
        break;
    case "en":
        console.log("Welcome to our website.");
        break;
    case "fr":
        console.log("Bienvenue sur notre site web.");
        break;
    default:
        console.log("Idioma no reconocido. Mostrando en inglés pordefecto.");
}
*/

/*
// Simular el rol de un usuario
let rolUsuario =  prompt("Introduce tu rol (admin, editor, visitante):");
// Verificar permisos según el rol
if (rolUsuario.trim().toString() === "admin") {
    console.log("Tienes acceso total para editar y gestionar.");
} else if (rolUsuario.trim().toString() === "editor") {
    console.log("Tienes acceso para editar contenido.");
} else if (rolUsuario.trim().toString() === "visitante") {
    console.log("Solo puedes visualizar el contenido.");
} else {
    console.log("Rol no reconocido. Por favor, introduce un rol válido.");
}
*/

/** 
// Solicitar la edad del usuario
let edad = parseInt(prompt("¿Cuál es tu edad?"));
// Determinar el precio según la edad
if (!isNaN(edad) && edad > 0) {
    if (edad < 12) {
        console.log("El precio de la entrada es 5€ (niño).");
    } else if (edad >= 12 && edad <= 65) {
        console.log("El precio de la entrada es 10€ (adulto).");
    } else {
        console.log("El precio de la entrada es 7€ (mayor de 65 años).");
    }
} else {
    console.log("Por favor, ingresa una edad válida.");
}
*/

//###################################################################################
/**  
let numero = prompt("Digite numero: ");
if (numero == null || isNaN(numero)) {
    console.log("Por favor, ingresa un numero válido.");
} else if (numero === 0) {
    console.log("El numero es 0.");
} else if (numero > 0) {
    console.log("El numero es Positivo.");
} else {
    console.log("El numero es Negativo.");
}
*/

/**  
let n1 = parseInt(prompt("Digite numero 1: "));
let n2 = parseInt(prompt("Digite numero 2: "));
let n3 = parseInt(prompt("Digite numero 3: "));

let arrayNum = [];
arrayNum.push(n1);
arrayNum.push(n2);
arrayNum.push(n3);
console.log(`El Mayor es: ${Math.max(...arrayNum)}`);
console.log(arrayNum);
console.log(...arrayNum);

if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
    console.log("Por favor, ingresa numeros válidos.");
} else if ((n1 == n2) && (n1 == n3)) {
    console.log(`Los numeros ${n1}, ${n2}, ${n3} son Iguales`);
} else if ((n1 > n2) && (n1 > n3)) {
        console.log(`El numero ${n1} es el Mayor`);
} else if ((n2 > n1) && (n2 > n3)) {
    console.log(`El numero ${n2} es el Mayor`);
} else if ((n3 > n1) && (n3 > n2)) {
    console.log(`El numero ${n3} es el Mayor`);
} else if ((n1 == n2) && (n1 > n3)) {
    console.log(`El numero ${n1} es el Mayor`);
} else if ((n1 == n3) && (n1 > n2)) {
    console.log(`El numero ${n1} es el Mayor`);
} else if ((n2 == n3) && (n2 > n1)) {
    console.log(`El numero ${n2} es el Mayor`);
}  else if ((n2 == n3) && (n3 > n1)) {
    console.log(`El numero ${n3} es el Mayor`);
}
*/

/** 
let tempCel = parseFloat(prompt("Digite Temperatura en Celsius: "));
let formula = ((tempCel * 1.8) + 32);
console.log(`${tempCel} grados Celsius son ${formula} grados Fahrenheit`);
*/

/** 
let nota = parseInt(prompt("Ingrese Nota del Estudiante"));
if (!isNaN(nota) && (nota > 0 && nota <= 100)) {
    if (nota >= 90 ) {
        console.log("Excelente!!.");
    } else if (nota >= 50 && nota < 90) {
        console.log("Aprobo.");
    } else {
        console.log("Suspendido.");
    }
} else {
    console.log("Por favor, ingresa una nota válida.");
}

let calificacion =
  nota < 50 ? "Suspendido" :
  nota < 90 ? "Aprobo" :
  "Excelente";

console.log("He obtenido un", calificacion);
*/

/** */
let dia = parseInt(prompt("Ingrese numero de día:"));
switch (dia) {
    case 1:
        console.log("Lunes.");
        break;
    case 2:
        console.log("Martes.");
        break;
    case 3:
        console.log("Miercoles.");
        break;
    case 4:
        console.log("Jueves.");
        break;
    case 5:
        console.log("Viernes.");
        break;       
    case 6:
        console.log("Sabado.");
        break;         
    case 7:
        console.log("Domingo.");
        break;    
    default:
        console.log("Numero de día no reconocido.");
}


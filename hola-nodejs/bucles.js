/** 
let suma = 0;
let cantidad = 0;
let nota;

do {
    nota = parseFloat(prompt(`Ingresa Nota [Cantidad de Notas ${cantidad}] [0 para finalizar]:`));

    if (nota > 0) {
        suma += nota;
        cantidad++;
    }
} while (nota !== 0);

let promedio = (suma / cantidad);
console.log("El promedio es:", promedio.toFixed(2));
*/

/** 
const productos = ["Camiseta", "Zapatos", "Gorra", "Pantalones"];
//for (let i = 0; i < productos.length; i++) {
let i = 0;
while(i < productos.length) {
    console.log("Producto: " + productos[i]);
    i++;
}
*/

/** 
const productos = ["Camiseta", "Zapatos", "Gorra", "Pantalones"];
for (let i = 0; i < productos.length; i++) {
    console.log("Producto: " + productos[i]);
    for (let j = 0; j < productos[i].length; j++) {
        console.log("Producto: " + productos[i][j]);
    }
}
*/

/** 
let numero;
let intento = 0;
do {
    intento ++;
    numero = parseInt(prompt(`Introduce un numero valido [Intentos ${intento}]`));
} while((!numero || isNaN(numero)) && intento < 3)

if (!numero || isNaN(numero)) {   
    console.log(`Cantidad Intentos Fallidos [${intento}]`);
} else {
    console.log(`Numero introducido es: ${numero}, Intentos[${intento}]`);
}
*/

/** 
const tareas = ["Limpiar", "Cocinar", "Comprar"];
const lista = document.getElementById("lista-tareas");
for (let tarea of tareas) {
    const elemento = document.createElement("li");
    elemento.textContent = tarea;
    lista.appendChild(elemento);
}

let addTarea = ["Dormir", "Comer"];
for (let i = 0; i < addTarea.length; i++) {
    const elemento = document.createElement("li");
    elemento.textContent = addTarea[i];
    lista.appendChild(elemento);
}
*/

/** 
let email;
do {
    email = prompt("Introduce tu correo electrónico:").trim();
} while (!validarEmail(email));
console.log("Correo válido: " + email);

function validarEmail(email) {
    // Expresión regular para validar un correo electrónico
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}
*/

/** 
const resultados = ["Item1", "Item2", "Item3", "Item4", "Item5"];
const resultadosPorPagina = 2;
for (let i = 0; i < resultados.length; i += resultadosPorPagina) {
    const pagina = resultados.slice(i, i + resultadosPorPagina);
    console.log("Página: ", pagina);
}
*/

//###################################################################################
/*1.*  
const nombres = ["Lupe", "Pepa", "Paco", "Pino", "Perez", "Manolo", "Jose"];
const lista = document.getElementById("lista-nombres");
for (let nom of nombres) {
    const elemento = document.createElement("li");
    elemento.textContent = nom;
    lista.appendChild(elemento);
}
*/

/*2.*  
let arrayImpar = [];
for(let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        arrayImpar.push(i);
    }
}
console.table(arrayImpar);
*/

/*3.1*  
let text = prompt("Ingrese texto para contar palabras");

if (!text || !text.trim() || text == "") {
    console.log("Favor digite un texto");
} else {
    const words = text.split(" ");
    console.table(words);
    console.log(`El texto tiene ${words.length} palabras`);
    
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            console.log(words[i][j]);
        }
        console.log(" ");
    }
}
*/    

/*3.2* 
let text = prompt("Ingrese texto para contar palabras");

if (!text || !text.trim() || text == "") {
    console.log("Favor digite un texto");
} else {
    const words = text.split(" ");
    let i = words.length - 1;
    while(i >= 0){
        let j = words[i].length - 1;
        while(j >= 0) {
            console.log(words[i][j]);
            j --; 
        }
        i--;       
        console.log(" ");
    }
}
*/

/*3.3* 
let text = prompt("Ingrese texto para contar palabras");

if (!text || !text.trim() || text == "") {
    console.log("Favor digite un texto");
} else {
    const words = text.split(" ");
    for (let i = words.length - 1; i >= 0 ; i--) {
        for (let j = 0; j < words[i].length; j++) {
            console.log(words[i][j]);
        }
        console.log(" ");
    }
}
*/

/*3.4* */
let text = prompt("Ingrese texto para contar palabras");

if (!text || !text.trim() || text == "") {
    console.log("Favor digite un texto");
} else {
    const words = text.split(" ");
    for (let i = 0; i < words.length ; i++) {
        for (let j = words[i].length - 1; j >= 0 ; j--) {
            console.log(words[i][j]);
        }
        console.log(" ");
    }
}

/*4.* 
for (let i = 10; i > 0; i--) {
    console.log(i);
}
*/

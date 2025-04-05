/** 
//Agrega uno o más elementos al final del array
let frutas = ["Manzana", "Banana"];
console.log(frutas.push("Naranja", "Mango", 2));
console.table(frutas);

//Elimina y devuelve el último elemento del array.
let frutas1 = ["Manzana", "Banana", "Naranja"];
let ultimaFruta = frutas1.pop();
console.log(frutas1); // ["Manzana", "Banana"]
console.log(ultimaFruta); // "Naranja"

//Elimina y devuelve el primer elemento del array.
let numeros = [10, 20, 30];
let primero = numeros.shift();
console.log(numeros); // [20, 30]
console.log(primero); // 10

//Agrega uno o más elementos al inicio del array
let colores = ["Rojo", "Verde"];
colores.unshift("Azul");
console.log(colores); // ["Azul", "Rojo", "Verde"]

//Crea un nuevo array aplicando una función a cada elemento.
let numeros1 = [1, 2, 3, 4];
let cuadrados = numeros1.map(num => num * num);
console.log(numeros1); 
console.log(cuadrados);// [1, 4, 9, 16]

//Crea un nuevo array con los elementos que cumplan una condición.
let edades = [15, 22, 30, 17];
let adultos = edades.filter(edad => edad >= 18);
console.log(edades);
console.log(adultos); // [22, 30]

//Aplica una función acumuladora a los elementos del array, reduciéndolos a un único valor.
let precios = [10, 20, 30];
let total = precios.reduce((acumulado, precio) => acumulado + precio, 0);
console.log(total); // 60
console.log(precios); //Igual no modifica

//Ejecuta una función para cada elemento del array (no devuelve un nuevo array).
let nombres = ["Ana", "Luis", "Carlos"];
nombres.forEach(nombre => console.log("Hola " + nombre));

//Devuelve el primer elemento que cumpla la condición dada.
let usuarios = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Juan", edad: 30 }
];
let usuario = usuarios.find(user => user.nombre === "Juan");
console.table(usuario); // { nombre: "Juan", edad: 30 }

let usuarioInd = usuarios.findIndex(user => user.nombre === "Juan");
console.table(usuarioInd); // { nombre: "Juan", edad: 30 }

//Devuelve true si al menos un elemento cumple la condición.
let edades1 = [10, 15, 18, 25];
let hayAdultos = edades1.some(edad => edad >= 18);
console.log(hayAdultos); // true

//Devuelve true si todos los elementos cumplen la condición.
let notas = [80, 90, 100];
let todosAprobados = notas.every(nota => nota >= 60);
console.log(todosAprobados); // true

//Ordena los elementos del array.
let numeros2 = [4, 2, 9, 1];
numeros2.sort((a, b) => a - b); //ASC
console.log(numeros2); // [1, 2, 4, 9]

let productos = [
    { nombre: "Laptop", precio: 800 },
    { nombre: "Mouse", precio: 20 },
    { nombre: "Teclado", precio: 50 }
];
productos.sort((a, b) => a.precio - b.precio);
console.log(productos);
*/

/** 
//EJEMPLOS #################################################################
let productos = [
    { nombre: "Laptop", stock: 5 },
    { nombre: "Teclado", stock: 0 },
    { nombre: "Mouse", stock: 3 }
];

let prod = [];
let prod1 = [];

let disponibles = productos.filter(p => p.stock > 0);
console.table(disponibles);
// [{ nombre: "Laptop", stock: 5 }, { nombre: "Mouse", stock: 3 }]

for (const disponible of productos) {
    if (disponible.stock > 0)
        prod.push(disponible);
}
console.table(prod);

productos.forEach(prodStock => {
    if (prodStock.stock > 0)
        prod1.push(prodStock);
});
console.table(prod1);
*/

/** 
 * Ejercicios ###############################################################
*/
/**1.
let frutas = ["Manzana", "Banana"];
console.log(frutas.push("Guanabana", "Aguacate"));
console.table(frutas);
*/

/**2.  
let transportes = ["Casa", "Carro", "Patinete"];
let eliminaTrans = transportes.pop();
console.log(eliminaTrans);
console.table(transportes);
*/

/**3. 
let nombres = ["Paco", "Pepa Pig", "Lupe"];
let eliminaNom = nombres.shift();
console.log(eliminaNom);
console.log(nombres);
*/

/**4. 
let colors = ["Red", "Blue"];
console.log(colors.unshift("Green"));
console.table(colors);
*/

/**5. 
let precios = [100, 200, 150];
let newPrecios = precios.map(sumPorcent => (sumPorcent * 1.10).toFixed(2));
console.log(precios);
console.log(newPrecios);
*/

/**6. 
let edades = [55, 45, 34, 72, 85];
let jubilados = edades.filter(ano => ano >= 65);
console.log(edades);
console.log(jubilados);
*/

/**7. 
let number = [60, 40, 50];
let sumatoria = number.reduce((acumulado, num) => acumulado + num, 0);
console.log(number);
console.log(sumatoria);
*/

/**8. 
let arrayNumber = [12, 18, 22, 32];
let valido = arrayNumber.find(num => num > 20);
console.log(valido);
*/

/**9.  
let arrayNumber = [12, 35, 56, 45];
let indxValid = arrayNumber.findIndex(num => num > 50);
console.log(indxValid);
*/

/**10. 
let nombres = ["Paco", "Pepa Pig", "Pedro", "Lupe"];
console.log(nombres.includes("Pedro"));
*/

/**11. 
let arrayNumber = [12, 35, -2, 45];
console.log(arrayNumber.some(num => num < 0));
*/

/**12. 
let arrayNumber = [12, 35, -2, 45];
console.log(arrayNumber.every(num => num >= 0));
*/
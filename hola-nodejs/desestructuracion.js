const numeros = [10, 20, 30];

// Extraer valores individuales
const [a, b, c] = numeros;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

//----------------------------------------------------------------------------
const persona = {
nombre: "Ane",
edad: 25,
ciudad: "Bilbao"
};

// Extraer valores del objeto
const { nombre, edad, ciudad } = persona;

 console.log(nombre); // Ane
 console.log(edad); // 25
 console.log(ciudad); // Bilbao

//----------------------------------------------------------------------------
const numeros1 = [1, 2, 3];
const copiaNumeros = [...numeros1];

console.log(copiaNumeros); // [1, 2, 3]

//----------------------------------------------------------------------------
const lista1 = [1, 2, 3];
const lista2 = [4, 5, 6];

const combinada = [...lista1, ...lista2];

console.log(combinada); // [1, 2, 3, 4, 5, 6]

//----------------------------------------------------------------------------
const usuario = { nombre: "Jon", edad: 30 };
const usuarioActualizado = { ...usuario, ciudad: "Donostia" };

console.log(usuarioActualizado);
// { nombre: "Jon", edad: 30, ciudad: "Donostia" }

//----------------------------------------------------------------------------
const sumar = (...numeros) => numeros.reduce((total, num) => total + num, 0);
console.log(sumar(1, 2, 3, 4)); // 10

//----------------------------------------------------------------------------
const [primero, segundo, ...resto] = [1, 2, 3, 4, 5];
console.log(primero); // 1
console.log(segundo); // 2
console.log(resto); // [3, 4, 5]

//----------------------------------------------------------------------------
const objeto = { a1: 1, b1: 2, c1: 3, d1: 4, fnSaludo(){console.log("Hello!!")} };
const { a1, b1, ...resto1 } = objeto;
console.log(a1); // 1
console.log(b1); // 2
console.log(resto1); // { c: 3, d: 4 }
objeto.fnSaludo();

//----------------------------------------------------------------------------
const usuarios = [
    { id: 1, nombre: "Ane", edad: 25 },
    { id: 2, nombre: "Jon", edad: 30 }
];

// Queremos obtener solo los nombres
const nombres = usuarios.map(({ nombre, edad }) => [nombre, edad]);

console.log(nombres); // ["Ane", "Jon"]

/**
 * Ejemplos ####################################################################

const frutas = ["manzana", "naranja", "plátano"];

// Desestructuración del array
const [fruta1, fruta2, fruta3] = frutas;

console.log(fruta1); // "manzana"
console.log(fruta2); // "naranja"
console.log(fruta3); // "plátano"

//----------------------------------------------------------------------------
const productos = [
    { id: 1, nombre: "Laptop", precio: 1200 },
    { id: 2, nombre: "Mouse", precio: 25 }
];

// Extraemos solo los nombres de los productos
const nombresProductos = productos.map(({ nombre }) => nombre);

console.log(nombresProductos); // ["Laptop", "Mouse"]

//----------------------------------------------------------------------------
const numeros2 = [1, 2, 3];
const copiaNumeros1 = [...numeros2];

console.log(copiaNumeros1); // [1, 2, 3]

const referenciaNumeros = numeros2;
referenciaNumeros.push(4);
console.log(numeros2); // [1, 2, 3, 4] (el array original también se modifica)
console.log(referenciaNumeros);

//----------------------------------------------------------------------------
const carrito = ["Teclado", "Monitor"];
const nuevoProducto = "Ratón";

// Se crea un nuevo carrito sin modificar el original
const nuevoCarrito = [...carrito, nuevoProducto];

console.log(carrito); // ["Teclado", "Monitor", "Ratón"]
console.log(nuevoCarrito); // ["Teclado", "Monitor", "Ratón"]

//----------------------------------------------------------------------------
const carrito1 = ["Teclado", "Monitor"];
const nuevoProducto1 = ["Ratón", "Mesa", "Laptop"];

// Se crea un nuevo carrito sin modificar el original
const nuevoCarrito1 = [...carrito1, ...nuevoProducto1];

console.log(carrito1); // ["Teclado", "Monitor", "Ratón"]
console.log(nuevoCarrito1); // ["Teclado", "Monitor", "Ratón"]

//----------------------------------------------------------------------------
const colores1 = ["rojo", "azul"];
const colores2 = ["verde", "amarillo"];

const todosLosColores = [...colores1, ...colores2];

console.log(todosLosColores); // ["rojo", "azul", "verde", "amarillo"]

//----------------------------------------------------------------------------
const colores11 = ["rojo", "azul"];
const colores22 = ["verde", "amarillo"];

const todosLosColores1 = [...colores1, ...colores2];

console.log(todosLosColores1); // ["rojo", "azul", "verde", "amarillo"]

const todo= [colores11,colores22]
console.log(todo)
colores1.push("morado")
console.log(todo)

//----------------------------------------------------------------------------
const usuarioBase = { nombre: "Ane", edad: 30 };
const nuevaInfo = { ciudad: "Bilbao", email: "ane@email.com" };

// Fusionamos los objetos sin modificar el original
const usuarioActualizado1 = { ...usuarioBase, ...nuevaInfo };

console.log(usuarioActualizado1);
// { nombre: "Ane", edad: 30, ciudad: "Bilbao", email: "ane@email.com" }

//----------------------------------------------------------------------------
function sumar1(...numeros) {
    return numeros.reduce((total, num) => total + num, 0);
}

console.log(sumar1(1, 2, 3, 4, 5)); // 10

//----------------------------------------------------------------------------
function filtrarPorCategoria(categoria, ...productos) {
    return productos.filter(producto => producto.categoria === categoria);
}

const listaProductos = [
    { nombre: "Teclado", categoria: "Accesorios" },
    { nombre: "Portátil", categoria: "Electrónica" },
    { nombre: "Ratón", categoria: "Accesorios" }
];

console.log(filtrarPorCategoria("Accesorios", ...listaProductos));
// [{ nombre: "Teclado", categoria: "Accesorios" }, { nombre: "Ratón", categoria: "Accesorios" }]

//----------------------------------------------------------------------------
const person = { nombre1: "Jon", edad1: 25 };

// Si "ciudad" no existe, se asigna "Desconocido"
const { nombre1, edad1, ciudad1 = "Desconocido" } = person;

console.log(ciudad1); // "Desconocido"

//----------------------------------------------------------------------------
function mostrarConfiguracion({ tema = "claro", idioma = "es" }) {
    console.log(`Tema: ${tema}, Idioma: ${idioma}`);
}

const usuario1 = { tema: "oscuro" };
mostrarConfiguracion(usuario1); // "Tema: oscuro, Idioma: es"

const usuario2 = {};
mostrarConfiguracion(usuario2); // "Tema: claro, Idioma: es"
 */

/**
 * Ejercicios
 */
/**1. */


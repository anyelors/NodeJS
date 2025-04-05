/** 
let usuario = {
    nombre: "Ana",
    edad: 25,
    email: "ana@example.com"
};
console.log(usuario.nombre);
console.log(usuario["email"]);

usuario.pais = "España";
console.log(usuario.pais); // "España"
console.table(usuario);

//Eliminar Propiedad
delete usuario.pais;
console.table(usuario);

let persona = new Object();
persona.nombre = "Carlos";
persona.edad = 30;
console.log(persona.nombre);

function Person(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}
let juan = new Person("Juan", 28);
console.log(juan.nombre); // "Juan"

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}
let laptop = new Producto("Laptop", 1200);
console.log(laptop.nombre); // "Laptop"

let coche = {
    marca: "Toyota",
    modelo: "Corolla",
    arrancar: function() {
        console.log("El coche ha arrancado");
    }
};
coche.arrancar(); // "El coche ha arrancado"

const perro = {
    nombre: "Max",
    ladrar: function() {
        console.log("¡Guau guau!");
    }
};

// Usando el método
perro.ladrar(); // Salida: ¡Guau guau!

const gato = {
    nombre: "Minina",
    maullar: function() {
        console.log("¡Miau! ¡Miau!");
    },
    niNombre: function() {
        console.log(`Mi nombre es ${this.nombre} y soy juguetona`);
    }
};

// Usando el método
gato.maullar();
gato.niNombre();

const personita = {
    nombre: "Carlos",
    edad: 25,
    profesion: "Diseñador"
};

for (let clave in personita) {
    console.log(clave); // Imprime las claves: nombre, edad, profesion
    console.log(personita[clave]); // Imprime los valores: Carlos, 25, Diseñador
}

let carrito = {
    productos: [
        { nombre: "Camisa", precio: 20 },
        { nombre: "Zapatos", precio: 50 }
    ],
    total: function() {
        return this.productos.reduce((sum, prod) => sum + prod.precio, 0);
    }
};
console.log(carrito.total()); // 70
*/

/**
 * Ejemplos #####################################################################
 

let coche = {
    marca: "Peugeot",
    modelo: "Panmera",
    año: 2022
};
console.log(coche.marca);

//------------------------------------------------------------------------------
let usuario = {
    nombre: "Ane",
    email: "ane@example.com",
    rol: "admin",
    mostrarInfo: () => console.log(`Usuario: ${usuario.nombre}, Rol: ${usuario.rol}, Email: ${usuario.email}`),
    saludo() { console.log(`Hola ${this.nombre} Bienvenida al Sistema`) }
};
usuario.mostrarInfo();
usuario.saludo();

//------------------------------------------------------------------------------
let mascota = {
    nombre: "Lur",
    tipo: "Perro",
    edad: 3,
    calAnos: () => mascota.edad * 7,
    anosHum: function () { 
        return (this.edad * 7) 
    }
};

delete mascota.tipo; // Eliminar propiedad

console.log(mascota); // { nombre: "Lur", edad: 3 }
console.log("Tengo "+mascota.calAnos()+" Años Humanos");
console.log("Tengo "+mascota.anosHum()+" Años Humanos otra funcion");

//------------------------------------------------------------------------------
let configuracion = {
    tema: "oscuro",
    idioma: "es",
};
configuracion.notificaciones = true; // Agregar propiedad
delete configuracion.tema; // Eliminar propiedad

console.log(configuracion); // { idioma: "es", notificaciones: true }

//------------------------------------------------------------------------------
let libro = {
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    mostrarInfo: function() {
        console.log(`Libro: ${this.titulo}, Autor: ${this.autor}`);
    },
    mostrarGenero: function() {
        console.log(`Libro: ${this.titulo}, Genero: ${this.genero}`);
    }
};

libro.genero = "Infantil";

libro.mostrarInfo();
libro.mostrarGenero();

//------------------------------------------------------------------------------
let reserva = {
    cliente: "Jon",
    fecha: "2025-04-10",
    esCeliaco: true,
    mostrarReserva: function() {
        console.log(`Reserva de ${this.cliente} para el ${this.fecha}`);
    },
    fnEsCeliaco: function() {
        console.log(`El Cliente ${this.cliente} es Celiaco`);
    }
};

reserva.mostrarReserva();
if (reserva.esCeliaco) {
    reserva.fnEsCeliaco();
}

//------------------------------------------------------------------------------
let productos = [
    { nombre: "Laptop", precio: 1000 },
    { nombre: "Ratón", precio: 20 }
];

productos.push({ nombre: "Laptop", precio: 1000 });

console.log(productos[0].nombre); // "Laptop"
console.log(productos[2]);
console.table(productos);

productos.pop();
console.table(productos);

//------------------------------------------------------------------------------
let cont = 0;
let carrito = {
    productos: [
        { nombre: "Camisa", precio: 25 },
        { nombre: "Zapatos", precio: 50 }
    ],
    calcularTotal: function() {
        return this.productos.reduce((total, prod) => total + prod.precio, 0);
    },
    calcularNroProd: function() {
        productos.forEach(totalProd => {
            cont++;
        });
        return cont;
    }
};

console.table(carrito.productos);
console.log(`Total: $${carrito.calcularTotal()}`);
console.log(`Total Productos: ${carrito.calcularNroProd()}`);

carrito.productos.push({ nombre: "Bragas", precio: 20 });
carrito.productos.push({ nombre: "Tangas", precio: 5 });
console.table(carrito.productos);
console.log(`Total: $${carrito.calcularTotal()}`);
console.log(`Total Productos: ${carrito.calcularNroProd()}`);

//------------------------------------------------------------------------------
let persona = { nombre: "Aitor", edad: 30, ciudad: "Bilbo" };

console.table(persona);
console.log("Key: "+Object.keys(persona)); // ["nombre", "edad", "ciudad"]
console.log("Valor: "+ Object.values(persona)); // ["Aitor", 30, "Bilbo"]

//------------------------------------------------------------------------------
let estadisticas = { visitas: 200, compras: 50, usuarios: 30 };

console.log(`Métricas disponibles: ${Object.keys(estadisticas)}`);
console.log(`Valores actuales: ${Object.values(estadisticas)}`);

//------------------------------------------------------------------------------
let configBase = { tema: "claro", notificaciones: true };
let configUsuario = { notificaciones: false };
let configuracionFinal = Object.assign({}, configBase, configUsuario);
console.log(configuracionFinal); // { tema: "claro", notificaciones:false }

//------------------------------------------------------------------------------
let i = 0;
let coche1 = { marca: "Ford", modelo: "Mustang" };

let arrayCoche1 = Object.entries(coche1);
console.log(Object.entries(coche1)); // [["marca", "Ford"], ["modelo", "Mustang"]]

while (i < arrayCoche1.length) {
    console.log(`Valor ${[i]}: ${arrayCoche1[i][1]}`);
    i++;
}
i = 0;
while (i < arrayCoche1.length) {
    console.log(`Keys ${[i]}: ${arrayCoche1[i][0]}`);
    i++;
}

for (const [key, value] of arrayCoche1) {
    console.log(value);
}

for (const [key, value] of arrayCoche1) {
    console.log(key);
}

//------------------------------------------------------------------------------
let usuario1 = { nombre: "Irati", edad: 27, ciudad: "Donostia" };

Object.entries(usuario1).forEach(([clave, valor]) => {
    console.log(`${clave}: ${valor}`);
});

//------------------------------------------------------------------------------
const persona1 = {
    nombre: "Laura",
    edad: 29,
    profesion: "Arquitecta"
};

const entradas = Object.entries(persona1);
console.log(entradas);
// Salida: [["nombre", "Laura"], ["edad", 29], ["profesion", "Arquitecta"]]

for (let [clave, valor] of Object.entries(persona1)) {
    console.log(`${clave}: ${valor}`);
}
// Salida:
// nombre: Laura
// edad: 29
// profesion: Arquitecta

const soloNumeros = Object.entries(persona1).filter(([clave, valor]) => typeof valor === "number");
console.log(soloNumeros); // [["edad", 29]]
*/

/**
 * Ejercicios ###########################################################################
 */

/**1. 
const persona = {
    nombre: "Lupe",
    edad: 23,
    ciudad: "Madrid"
};

console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}, Ciudad: ${persona.ciudad}`);
*/

/**2. 
let coche = {
    marca: "BMW",
    modelo: "C3"
};
console.table(coche);

delete coche.modelo;
coche.color = "Red";
console.table(coche);
*/

/**3. 
const usuario = {
    nombre: "Pepe Locuaz",
    edad: 43,
    saludar: function() {
        console.log(`Un Saludo ${this.nombre} Bienvenido al Sistema`);
    }
};

usuario.saludar();
*/

/**4. 
let productos = { nombre: "Monitor", precio: 150, stock: 25 };

for (let prod in productos) {
    console.table(prod);
}
*/

/**5. 
let config = { tema: "claro", idioma: "es" };
let configuracionFinal = Object.assign({}, config);
console.log(config);
console.log(configuracionFinal);
*/

/**6. 
let curso = {
    estudiantes: [
        { nombre: "Lupe", grado: 1 },
        { nombre: "Paco", grado: 3 }
    ],
    listEstudiantes: function() {
        this.estudiantes.forEach(estudent => {
            console.log(estudent.nombre);
        });
    }
};

curso.listEstudiantes();
*/

/**7. 
let mascota = [
    { nombre: "Lupe", tipo: "Perro" },
    { nombre: "Kiuz", tipo: "Gato" }
];

mascota.forEach(nom => {
    console.log(nom.nombre);
});
*/

/**8. 
const empleado = {
    nombre: "Paco Perez",
    edad: 43,
    cargo: "Ingeniero"
};

console.log(`Las claves son: ${Object.keys(empleado)}`);
*/

/**9. 
const libro = {
    nombre: "Cien años de soledad",
    autor: "Gabo",
    imp: "1990"
};

console.log(`Las valores son: ${Object.values(libro)}`);
*/

/**10. */
const pelicula = {
    nombre: "Titanic",
    director: "James Cameron",
    ano: "1997"
};

Object.entries(pelicula).forEach(([clave, valor]) => {
    console.log(`${clave}: ${valor}`);
});



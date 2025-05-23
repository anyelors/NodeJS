/**EJEMPLO ######################################################### 
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
 
  saludar() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  }
}
  
const alumno = new Persona("Ane", 22);
alumno.saludar(); // "Hola, soy Ane y tengo 22 años"

//-------------------------------------------------------------------------------------

function Animal(nombre) {
  this.nombre = nombre;
}
 
Animal.prototype.hablar = function() {
  console.log(`${this.nombre} hace un sonido`);
};
 
const gato = new Animal("Misu");
gato.hablar(); // "Misu hace un sonido"

//-------------------------------------------------------------------------------------

class Tarea {
  constructor(titulo, completada = false) {
    this.titulo = titulo;
    this.completada = completada;
  }
 
  completar() {
    this.completada = true;
  }
  
   mostrar() {
     console.log(`${this.titulo} - ${this.completada ? '✅' : '⏳'}`);
   }
 }

const tarea1 = new Tarea("Estudiar JS");
tarea1.mostrar();       // "Estudiar JS - ⏳"
tarea1.completar();
tarea1.mostrar();       // "Estudiar JS - ✅"

const tarea2 = new Tarea("Dormir", 0);
tarea2.mostrar();

//-------------------------------------------------------------------------------------

class Producto {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }
  
    aplicarDescuento(porcentaje) {
      const descuento = this.precio * (porcentaje / 100);
      return this.precio - descuento;
    }
}
  
const producto1 = new Producto("Camiseta", 25);
console.log(`Precio final: €${producto1.aplicarDescuento(20)}`);

const producto2 = new Producto("Chaqueta", 50);
console.log(`Precio final: €${producto2.aplicarDescuento(10)}`);

//-------------------------------------------------------------------------------------

class Coche {
    constructor(marca, modelo) {
      this.marca = marca;
      this.modelo = modelo;
      this.encendido = false;
    }
  
    prender() {
      this.encendido = true;
      console.log(`${this.marca} ${this.modelo} está encendido.`);
    }

    apagar() {
        this.encendido = false;
        console.log(`${this.marca} ${this.modelo} está apagado.`);
    }

    estadoActual() {
        console.log(`El Coche ${this.marca} ${this.modelo} está ${this.encendido ? 'Encendido' : 'Apagado'}`);
    }
  }
  
  const miCoche = new Coche("Toyota", "Yaris");
  miCoche.prender();
  miCoche.estadoActual();
  miCoche.apagar();
  miCoche.estadoActual();

  //-------------------------------------------------------------------------------------

  function Animal(nombre) {
    this.nombre = nombre;
  }
  
  Animal.prototype.hablar = function () {
    console.log(`${this.nombre} hace un sonido.`);
  };
  
  function Perro(nombre) {
    Animal.call(this, nombre);
  }
  Perro.prototype = Object.create(Animal.prototype);
  Perro.prototype.ladrar = function () {
    console.log(`${this.nombre} dice: ¡Guau!`);
  };
  
  const dog = new Perro("Sol");
  dog.hablar();
  dog.ladrar();

  //-------------------------------------------------------------------------------------

  class Usuario {
    constructor(nombre, email) {
      this.nombre = nombre;
      this.email = email;
    }
  
    mostrarPerfil() {
      return `Usuario: ${this.nombre}, Correo: ${this.email}`;
    }
  }
  
  const usuarioWeb = new Usuario("Irati", "irati@example.com");
  console.log(usuarioWeb.mostrarPerfil());

  //-------------------------------------------------------------------------------------

  class Carrito {
    constructor() {
      this.productos = [];
    }
  
    agregarProducto(producto) {
      this.productos.push(producto);
    }
  
    total() {
      return this.productos.reduce((suma, p) => suma + p.precio, 0);
    }
  }
  
  const miCarrito = new Carrito();
  miCarrito.agregarProducto({ nombre: "Libro", precio: 15 });
  miCarrito.agregarProducto({ nombre: "Arkatza", precio: 2 });
  console.log(`Total a pagar: €${miCarrito.total()}`);
  */

  /**EJERCICIOS 
   * ##################################################################################
  */
 /**1. 
  class Libro {
    constructor(titulo, autor, anio) {
      this.titulo = titulo;
      this.autor = autor;
      this.anio = anio;
    }
   
    infoLibro() {
      console.log(`Libro: ${this.titulo} Autor: ${this.autor} Año: ${this.anio}.`);
    }
  }
    
  const libro1 = new Libro("Cien años de soledad", "Gabo", "1982");
  libro1.infoLibro();
*/

/**2. 
class Estudiante {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }
  mayorEdad() {
    return `El Estudiante ${this.nombre} ${this.edad >= 18 ? 'Es Mayor de edad' : 'Es Menor de Edad'}`;
  }
}

const est1 = new Estudiante("Lupe", "Ramirez", 12);
console.log(est1.mayorEdad());
*/

/**3. 
class Cancion {
  constructor(titulo, artista) {
    this.titulo = titulo;
    this.artista = artista;
  }
  reproducir() {
    console.log(`Reproduciendo: [${this.titulo}] - [${this.artista}].`);
  }
}

const miTrack = new Cancion("Bandolera", "David Bisbal");
miTrack.reproducir();
*/

/**4. 
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

Persona.prototype.saludo = function () {
  console.log(`Hola ${this.nombre} tienes ${this.edad} años de edad.`);
};

const person = new Persona("Sol", 4);
person.saludo();
*/

/**5. 
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  conDescuento(porcentaje) {
    const descuento = this.precio * (porcentaje / 100);
    return this.precio - descuento;
  }
}

const producto1 = new Producto("Pelota", 15);
console.log(`Precio final: € ${producto1.conDescuento(20)}`);
*/

/**6. 
class Coche {
  constructor(marca, modelo, velocidad) {
    this.marca = marca;
    this.modelo = modelo;
    this.velocidad = velocidad;
  }

  acelerar(km) {
    this.velocidad += km;
    console.log(`El Coche va a ${this.velocidad} Kilometros por Hora.`);
  }
}

const miCoche = new Coche("Toyota", "Yaris", 120);
miCoche.acelerar(20);
*/

/**7. */
class Contador {
  constructor() {
    this.num = 0;
  }

  incrementar(x=1) {
    this.num += x;
    console.log(`Contador en ${this.num}.`);
  }
}

const cont = new Contador();
cont.incrementar();
cont.incrementar();
cont.incrementar(2);

   
   
   
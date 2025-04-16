class Animal {
    constructor(nombre) {
      this.nombre = nombre;
    }
  
    hablar() {
      console.log(`${this.nombre} hace un sonido.`);
    }
  }  
  class Perro extends Animal {
    hablar() {
      console.log(`${this.nombre} dice: Guau!`);
    }
  }
  
  const miPerro = new Perro("Toby");
  miPerro.hablar(); // Toby dice: Guau!  

//---------------------------------------------------------------------

  class Producto {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }
  
    mostrar() {
      return `${this.nombre} cuesta ${this.precio}€`;
    }
  }
  
  class ProductoDigital extends Producto {
    constructor(nombre, precio, tamaño) {
      super(nombre, precio);
      this.tamaño = tamaño;
    }
  
    mostrar() {
      return `${super.mostrar()} y pesa ${this.tamaño}MB`;
    }
  }
  
  const ebook = new ProductoDigital("Libro JS", 15, 5);
  console.log(ebook.mostrar());

//---------------------------------------------------------------------

class Vehiculo {
    constructor(marca) {
        if (!marca || marca.trim() === "")
            throw new Error ("Debe ingresar una marca");
            
        this.marca = marca;
        this.encendido = false;
    }
  
    encender() {
        this.encender = true;
        console.log(`${this.marca} encendido.`);
    }
  }
  
  class Coche extends Vehiculo {
    constructor(marca,modelo) {
        super(marca);
        this.modelo = modelo;
    }

    acelerar() {
        if (this.encendido)
            console.log(`El Coche ${this.marca} de modelo ${this.modelo} está acelerando...`);
        else
            console.log(`El coche no puede acelerar esta apagado`)
    }
  }

  class Moto extends Vehiculo {
    constructor(marca, cilindraje){
        super(marca);
        this.cilindraje = cilindraje;
    }

    acelerar() {
      console.log(`La Moto ${this.marca} tiene ${this.cilindraje} de cilindraje y está acelerando rapidamente...`);
    }
  }
  
const miCoche = new Coche("Toyota","Yariz");
miCoche.encender();
miCoche.acelerar();

const miMoto = new Moto("Yamaha", 1200);
miMoto.acelerar();

//-----------------------------------------------------------------------

class Usuario {
    constructor(nombre, rol = 'Userest') {
        this.nombre = nombre;
        this.rol = rol;
    }
  
    login() {
        console.log(`${this.nombre} ha iniciado sesión.`);
    }

    mostrarRol() {
        console.log(`El usuario ${this.nombre} tiene el rol ${this.rol}`)
    }
  }
  
class Administrador extends Usuario {
    constructor(nombre){
        super(nombre, "Admin");
    }

    borrarUsuario(usuario) {
        if (!usuario) {
            console.log("Debe especificar un usuario para borrar.");
        } else 
            console.log(`${this.nombre} eliminó a ${usuario}`);
    }
}
  
const admin = new Administrador("Root");
admin.login();
admin.borrarUsuario("invitado123");
admin.mostrarRol();

const user1 = new Usuario("lupe");
user1.login();
user1.mostrarRol();

//-----------------------------------------------------------------------

class Persona {
    constructor(nombre, edad, genero) {
        if (edad < 0)
            throw new Error("Edad invalida");
            
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }

    info() {
        return `${this.nombre} tiene ${this.edad} años de genero ${this.genero}`;
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad, genero, cursos) {
        super(nombre, edad, genero);
        this.cursos = cursos || [];
    }

    agregarCurso(curso) {
        this.cursos.push(curso);
    } 

    info() {
        return `${super.info()} y está en los cursos ${this.cursos.join(", ")}`;
    }
}
/*
class EstudianteEso extends Estudiante {
    constructor(nombre, edad, genero, curso) {
        if (curso < 1 || curso > 4)
            throw new Error("Curso no pertenece a estudiante de la ESO");
        super(nombre, edad, genero, curso);
    }

    info() {
        console.log(`${super.info()}`);
    }
}
*/

const alumno = new Estudiante("Iker", 16, "Masculino", ["Matematicas", "Ingles"]);
alumno.agregarCurso("Física");
console.log(alumno.info());

const person1 = new Persona("Lupe", 8, "Hembra");
console.log(person1.info());

//const alumnoEso = new EstudianteEso("Paco", 14, "Masculino", 4);
//alumnoEso.info();

//-----------------------------------------------------------------------

class Componente {
    constructor(id) {
        this.element = document.getElementById(id);
        if (!this.element) {
            throw new Error(`El elemento con ID "${id}" no existe.`);
        }
            
    }
}
  
class Boton extends Componente {
    cambiarTexto(texto) {
        this.element.addEventListener("click",
            ()=> this.element.textContent = texto);
    }
}

const boton = new Boton("miBoton");
boton.cambiarTexto("Nuevo texto del botón");

  
  



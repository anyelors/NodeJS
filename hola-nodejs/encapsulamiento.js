/** 

class Usuario {
    #usuario;

    constructor(nombre) {
        this.#usuario = nombre;
    }

    getUsuario() {
        return this.#usuario;
    }

    setUsuario(nuevoNombre) {
        if (nuevoNombre.trim().length > 2) {
            this.#usuario = nuevoNombre;
            return true;
        }
        return false;
    }
}

const form = document.getElementById("loginForm");
const u = new Usuario("anon");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("usuario").value;
    if (u.setUsuario(nombre))
        console.log("Usuario actualizado:", u.getUsuario());
    else
        alert("Usuario debe contener más de dos caracteres");
});

//---------------------------------------------------------------------------

class Contador {
    #contador = 0;
    #historial = [];

    incrementar(cantidad = 1) {
        this.#contador += cantidad;
        this.#historial.push(`Incremento Fecha Hora Valor: [${this.#contador}]`);
    }

    get valor() {
        return this.#contador;
    }

    set valor(newValor) {
        this.#contador = newValor;
        this.#historial.push(`setValor Fecha Hora Valor: [${this.#contador}]`);
    }

    modifContador(newValor){
        this.#contador = newValor;
        this.#historial.push(`modifContador Fecha Hora Valor: [${this.#contador}]`);
    }

    reiniciar(){
        this.#contador = 0;
        this.#historial.push(`reiniciar Fecha Hora Valor: [${this.#contador}]`);
    }

    obtenerHist(){
        return this.#historial;
    }
}

const c = new Contador();
c.incrementar(); // 1
console.log("Valor actual:", c.valor);
c.incrementar(); // 2
console.log("Valor actual:", c.valor); // 2
c.valor = 100;
console.log("Valor actual:", c.valor);
c.incrementar(5);
console.log("Valor actual:", c.valor);
c.modifContador(150);
console.log("Valor actual:", c.valor);
c.reiniciar();
console.log("Valor actual:", c.valor);
console.table(c.obtenerHist());

//-------------------------------------------------------------------------

class Producto {
    #stock;
    #historialProd = [];
  
    constructor(nombre, stock) {
      this.nombre = nombre;
      this.#stock = stock;
    }
  
    vender(cantidad) {
      if (cantidad <= this.#stock) {
        this.#stock -= cantidad;
        console.log(`Has vendido ${cantidad} unidades de ${this.nombre}`);
        this.#historialProd.push(`Venta Exitosa Fecha Hora Cantidad: [${cantidad}] Stock: [${this.#stock}] Producto: ${this.nombre}`);
      } else {
        console.log("Stock insuficiente");
        this.#historialProd.push(`Venta No Exitosa Fecha Hora Cantidad: [${cantidad}] Stock: [${this.#stock}] Producto: ${this.nombre}`);
      }
    }

    reabastecer(cantidad) {
        if (cantidad > 0) {
            this.#stock += cantidad;
            console.log(`Has Reabastecido ${cantidad} unidades de ${this.nombre}`);
            this.#historialProd.push(`Reabastecer Exitosa Fecha Hora Cantidad: [${cantidad}] Stock: [${this.#stock}] Producto: ${this.nombre}`);
        } else {
            console.log("Cantidad Invalida");
            this.#historialProd.push(`Reabastecer No Exitosa Fecha Hora Cantidad: [${cantidad}] Stock: [${this.#stock}] Producto: ${this.nombre}`);
        }
      }
  
    mostrarStock() {
      console.log(`Quedan [${this.#stock}] unidades de [${this.nombre}]`);
    }

    mostrarHistorial(){
        return this.#historialProd;
    }
  }
  
  const p = new Producto("Camiseta", 10);
  p.mostrarStock();
  p.vender(3);
  p.mostrarStock();
  p.vender(8);
  p.mostrarStock();
  p.reabastecer(20);
  p.mostrarStock();
  p.reabastecer(0);
  console.table(p.mostrarHistorial());

  */

/**
 * EJERCICIOS ########################################################### */
/**1. */
class Vehiculo {
    constructor(marca, modelo) {
        if (!marca || marca.trim() === "")
            throw new Error ("Debe ingresar una marca");
            
        this.marca = marca;
        this.modelo = modelo;
    }

    mostrarVehiculo(){
        return (`El Vehiculo es de Marca: [${this.marca}] Modelo: [${this.modelo}]`)
    }
  }
  
  class Coche extends Vehiculo {
    constructor(marca,modelo,kilometraje = 0,combustible) {
        super(marca, modelo);
        this.kilometraje = kilometraje;
        this.combustible = combustible;
    }

    mostrarCoche(){
        return (`El Coche es de Marca: [${this.marca}] Modelo: [${this.modelo}] Kilometraje: [${this.kilometraje}] Combustible: [${this.combustible}]`)
    }
  }

  class Bicicleta extends Vehiculo {
    constructor(marca, tipo){
        super(marca);
        this.tipo = tipo;
    }

    mostrarBicicleta() {
      return (`La Bicicleta de Marca: [${this.marca}] Tipo: [${this.tipo}]`);
    }
  }
  
const miCoche = new Coche("Toyota","Yariz",25000,"Gasolio");
console.log(miCoche.mostrarCoche());

const miBici = new Bicicleta("Shimano", "Electrica");
console.log(miBici.mostrarBicicleta());

  
  
  
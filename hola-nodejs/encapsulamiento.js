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
/**1. 
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
*/

/**2. 
class Cuenta {
    #balance;

    constructor(balance) {
        this.#balance = balance;
    }

    get balance() {
        return this.#balance;
    }

    set balance(valor) {
        this.#balance = valor;
    }

    depositar(monto){
        this.#balance += monto;
    }

    verBalance(){
        return (`Balance Monto: € [${this.#balance}]`)
    }
}
  
class cuentaAhorro extends Cuenta {
    
    calculaInteres(porcent){
        console.log(`Se aplica ${porcent}% al Balance Cuenta Ahorro Monto: € [${super.balance}]`);
        this.depositar((super.balance * porcent) / 100);
    }    

    verCuentaAhorro(){
        return (`Balance Cuenta Ahorro Monto: € [${super.balance}]`);
    }
}
  
const miCuenta = new Cuenta(123);
console.log(miCuenta.verBalance());
miCuenta.depositar(100);
console.log(miCuenta.verBalance());

const miCuentaAhorro = new cuentaAhorro(123.33);
console.log(miCuentaAhorro.verCuentaAhorro());
miCuentaAhorro.calculaInteres(3);
console.log(miCuentaAhorro.verCuentaAhorro());
*/

/**3. 
class Habitacion {
    constructor(numero, precio) {    
        this.numero = numero;
        this.precio = precio;
        this.reservada=false
    }

    reservar(){
        if (this.reservada)
            return (`La Habitacion: [${this.numero}] ya está Reservada`)
        else {
            this.reservada = true;
            return (`La Habitacion: [${this.numero}] Reservada con Exito`)
        }    
    }
  }
  
  class Suite extends Habitacion {
    constructor(numero,precio) {
        super(numero, precio);
    }

    servicioHabitacion(){
        return (`Suite Servicio de Lujo Habitacion [${this.numero}]`)
    }
  }
  
const suite101 = new Suite(101, 150);
console.log(suite101.reservar());
console.log(suite101.servicioHabitacion());
console.log(suite101.reservar());
*/

/**4. 
class Dispositivo {

    constructor(encendido) {
        this.encendido = encendido;
    }

    encender(){
        this.encendido = true;
    }

    apagar(){
        this.encendido = false;
    }

    estadoDispositivo() {
        return (`Dispositivo ${this.encendido  ? "Encendido" : "Apagado"}`);
    }
}
  
class Lampara extends Dispositivo {
    #brillo;

    constructor(encendido,brillo) {
        super(encendido);
    }

    get brillo() {
        return this.#brillo;
    }

    set brillo(valor) {
        if (valor >= 0 && valor <= 100) {
            this.#brillo = valor;
            return true;
        }
        return false;
    }

    estadoLampara() {
        return (`${super.estadoDispositivo()} Brillo: ${this.#brillo}`);
    }
}
  
const miLampara = new Lampara();
miLampara.brillo = 55;
if (!miLampara.brillo){
    alert("Intencidad de brillo invalido");
} else {
    miLampara.encendido = true;
    console.log(miLampara.estadoLampara());
}
*/

/**5. */
class CampoFormulario {
    #valor;

    constructor(nombre,valor) {
        this.nombre = nombre;
        this.#valor = valor;
    }

    actualizarValor(nuevoValor) {
        this.#valor = nuevoValor;
    }

    obtenerValor(){
        return this.#valor;
    }
}
  
class CampoEmail extends CampoFormulario {
    
    esEmailValido(correo){
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar correos
        if (regexEmail.test(correo))
            return true;
        return false;
    }
}
  
const email = new CampoEmail("correo");
email.actualizarValor("ejemplo@dominio.com");
console.log(email.esEmailValido(email.obtenerValor())); // true

function mostrarMensaje() {
    document.getElementById("mensaje").innerHTML = "<strong>Kaixo, DOM!</strong>";
  }

//--------------------------------------------------------------------------------

let items = ["pantalon","zapato"];

function addToCart(product) {
    items.push(product);
    document.getElementById("cart").innerHTML = "Carrito: " + items.join(", ");
}
console.log(items);
console.log(items.join(", "));

//--------------------------------------------------------------------------------
function cambiarTexto() {
    document.getElementById("parrafo").textContent = "Texto actualizado";
}

//--------------------------------------------------------------------------------
function mostrarTexto() {
     const entrada = document.getElementById("input").value;
     document.getElementById("salida").innerHTML = entrada;
}
    
//--------------------------------------------------------------------------------
function resaltar() {
    //document.getElementById("texto").classList.toggle("resaltado");
    if (document.getElementById("texto").classList.contains("resaltado"))
        document.getElementById("texto").classList.remove("resaltado");
    else
        document.getElementById("texto").classList.add("resaltado");
}

//--------------------------------------------------------------------------------
function validar() {
    const email = document.getElementById("email").value.trim();
    const error = document.getElementById("error");
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email))  {
      error.textContent = "Email no válido";
      error.classList.add("error");
      alert("Email no válido");
      document.getElementById("email").focus();
      return false;
    } else {
      error.textContent = "Email válido";
      error.classList.remove("error");
    }
}


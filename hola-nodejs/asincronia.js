function mostrarMensaje(msg) {
    console.log(msg);
}

setTimeout(() => {
    mostrarMensaje("Esto se muestra tras 2 segundos");
}, 2000);

mostrarMensaje("Esto no espera");

//-----------------------------------------------------------------------

let promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Operación exitosa");
  }, 2000);
});
 
//promesa
//    .then(res => console.log(res))
//    .catch(err => console.log(err));
    
async function mostrarMsg() {
  try {
    let res = await promesa;
    console.log(res);
  } catch (err) {
    console.error(err);
  } finally {
    console.log("Agurrrrrrrrrrrrrrr");
  }
}

mostrarMsg();

//-----------------------------------------------------------------------

let noPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Operación No exitosa");
    }, 2000);
});
    
noPromesa
    .then(res => console.log(res))
    .catch(err => console.log("Error: "+err))
    .finally(() => console.log("Chaluego"));  
            
//-----------------------------------------------------------------------

fetch("https://pokeapi.co/api/v2/pokemon-species/aegislash")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));



    
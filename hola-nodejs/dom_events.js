/**Ejemplos 
document.getElementById('idioma').addEventListener('change', (e) => {
    
    const combo = document.getElementById("idioma");
    let selected = combo.options[combo.selectedIndex].text;
     
    const mensaje = document.getElementById('mensaje');
    switch (e.target.value) {
        case 'es':
            mensaje.textContent = 'Idioma seleccionado: '+selected;
            break;
        case 'en':
            mensaje.textContent = 'Selected language: '+selected;
            break;
        case 'fr':
            mensaje.textContent = 'Langue sélectionnée: '+selected;
            break;
     }
});
*/

/**EJERCICOS */
/**1. */
document.getElementById('cambiarFondo').addEventListener('click', () => {
    document.body.style.backgroundColor = "Red";
});

/**2. */
document.getElementById('alerta').addEventListener('dblclick', () => {
    alert("Este es un evento doble clic");
});

/**3. */
const testParrafo = document.getElementById("parrafo");
testParrafo.addEventListener("mouseover", (event) => {
        testParrafo.textContent = "El ratón esta por aquí";
});

testParrafo.addEventListener("mouseout", (event) => {
    testParrafo.textContent = "Pasa el ratón por aquí";
});

/**4. */
let cont = 0;
document.addEventListener("keydown", (event) => {
    document.getElementById("contador").textContent = cont++;
});

/**5. */
document.getElementById('enviar').addEventListener('click', () => {
    const valText = document.getElementById("nombre");
    const msg = document.getElementById("mensajeVal");

    if (valText.value.trim().length === 0) {
        msg.textContent = 'El campo de texto esta vacio!';
        return false;
    }   
});

/**6. */
const input = document.getElementById("nombreReal");
const textSaludo = document.getElementById("saludo");

input.addEventListener("keydown", logKey);

function logKey(e) {
    textSaludo.textContent += ` ${e.code}`;
}
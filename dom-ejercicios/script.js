/**1. */
const items = document.getElementsByTagName('p');
console.log(items.length);

/**2. */
for (const element of document.getElementsByClassName("resaltado")){
   element.style.color="red";
};

/**3. */
const campos = document.getElementsByName('email');
console.log(`${campos.length} Campos Email`);

/**4. */
const titulo = document.getElementById('titulo');
setTimeout(()=>
    titulo.textContent = "Texto actualizado", 2000);

/**5. */
const color = document.querySelector('.azul');
color.style.backgroundColor = 'blue';

/**6. */
const items1 = document.querySelectorAll('.item');
setTimeout(()=>
    items1.forEach(el => el.style.fontWeight = 'bold'), 2000);
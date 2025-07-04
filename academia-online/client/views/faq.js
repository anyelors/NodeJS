export function renderFaq() {
  document.getElementById('app').innerHTML = `
<h1>Preguntas frecuentes</h1>
<p class="no-grow"><b>¿Qué tipo de cursos ofrecen?</b> Indica si se enfocan en front-end, back-end, full-stack, diseño UI/UX, lenguajes específicos (JavaScript, Python, etc.), frameworks (React, Angular, etc.), o alguna especialización (desarrollo de e-commerce, etc.).</p>
<p class="no-grow"><b>¿Cuál es el nivel de los cursos?</b> Especifica si son para principiantes, intermedios o avanzados, y si hay requisitos previos.</p>
<p class="no-grow"><b>¿Cómo está estructurado el contenido del curso?</b> Describe si son lecciones en video, ejercicios prácticos, proyectos, lecturas, o una combinación de todos.</p>
<p class="no-grow"><b>¿Cuánto tiempo toma completar un curso?</b> Ofrece estimaciones realistas basadas en el ritmo del estudiante promedio.</p>
<p class="no-grow"><b>¿Qué materiales de apoyo ofrecen?</b> Documentación, ejemplos de código, foros de discusión, etc.</p>
<p class="no-grow"><b>¿Los cursos son actualizados con las últimas tendencias?</b> Resalta la importancia de mantenerse al día en el mundo del desarrollo web.</p>
<p class="no-grow"><b>¿Ofrecen certificación al finalizar un curso?</b> Si es así, ¿qué tipo de certificación y cómo se obtiene?</p>
  `;
}

async function crearPost() {
  const nuevoPost = {
    title: "Curso IFCD0008",
    body: "Contenido generado desde fetch",
    userId: 1
  };

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(nuevoPost)
    });

    const data = await res.json();
    console.log("✅ Post creado:", data);
  } catch (err) {
    console.error("❌ Error:", err.message);
  }
}

crearPost();

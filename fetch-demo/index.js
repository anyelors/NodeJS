async function getUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  if (!response.ok) throw new Error("Error en la petición: " + response.status);
  const data = await response.json();
  console.log("Nombre:", data.name);
}

getUser();

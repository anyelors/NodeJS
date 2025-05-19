async function getUserById(id) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!res.ok) throw new Error(`Usuario ${id} no encontrado (HTTP ${res.status})`);
    const data = await res.json();
    console.log(`👤 Usuario ${id}: ${data.name} (${data.email})`);
  } catch (err) {
    console.error("❌ Error:", err.message);
  }
}

getUserById(1);
getUserById(9999); // Esto fallará y mostrará el manejo del error

async function getUserById(id) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    if (!res.ok) throw new Error(`Pokemon ${id} no encontrado (HTTP ${res.status})`);
    const data = await res.json();
    console.log(`👤 Pokemon ${id}: [${data.name}] Orden Clasificación: [${data.order}]`);
  } catch (err) {
    console.error("❌ Error:", err.message);
  }
}

getUserById(1);
getUserById(5);

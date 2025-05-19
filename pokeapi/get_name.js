async function getUserByName(name) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
    if (!res.ok) throw new Error(`Pokemon ${name} no encontrado (HTTP ${res.status})`);
    const data = await res.json();
    console.log(`👤 Pokemon: [${data.name}] Orden Clasificación: [${data.order}]`);
  } catch (err) {
    console.error("❌ Error:", err.message);
  }
}

getUserByName("Pikachu");
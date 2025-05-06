let headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("Accept", "application/json");
headers.append("Origin", "http://localhost:5500");

/** 

async function cargarUsuario() {
  try {
    const res = await fetch("https://rickandmortyapi.com/api/character/5");
    if (!res.ok) throw new Error(`Error HTTP ${res.status}`);

    const data = await res.json();
    document.getElementById("info").innerHTML = `
        <h2>${data.name}</h2>
        <img src="${data.image}" alt="${data.name}">
        <p>Email: ${data.email || "No disponible"}</p>
        `;
  } catch (err) {
    document.getElementById(
      "info"
    ).innerText = `Error al obtener datos: ${err.message}`;
  }
}

async function enviarComentario() {
  try {
    const comentario = document.getElementById("comentario").value;
    if (!comentario.trim())
      throw new Error("El comentario no puede estar vacío");

    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comentario: comentario, postId: 1 }),
    });

    if (!res.ok) throw new Error(`Error HTTP ${res.status}`);

    const data = await res.json();
    console.table(data);
    alert(JSON.stringify(data));
  } catch (error) {
    console.error("Error:", error);
  }
}

/*
fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ title: "Hola", body: "Texto de prueba", userId: 1 })
})
.then(res => res.json())
.then(data => console.log("Respuesta del POST:", data));
*/

/** 
async function actualizar() {
  try {
    const res = await fetch("https://httpbin.org/put", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Actualizado",
        body: "Texto nuevo",
        userId: 1,
      }),
    });

    if (!res.ok) throw new Error(`Error HTTP ${res.status}`);

    const data = await res.json();
    console.log(data);
    alert(JSON.stringify(data));
  } catch (error) {
    console.error("Error:", error);
  } finally {
    console.log("Esto es el Finally");
  }
}

actualizar();

async function actualizarPerfil() {
  const nombre = document.getElementById("nuevoNombre").value;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: 1,
      name: nombre,
      username: "Bret",
      email: "lupe@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    }),
  });
  const data = await res.json();
  alert("Perfil actualizado: " + data.name);
}

async function borrarProducto(id) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "DELETE",
      }
    );

    if (res.ok) {
      alert(`Post Eliminado ${id}`);
    } else {
      alert("No se pudo eliminar el producto");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

*/

/**
 * 
 */

async function consultarTiempo() {
    const ciudad = document.getElementById("ciudad").value.trim();
    const resultado = document.getElementById("resultado");
  
    if (ciudad === "") {
      resultado.innerText = "Por favor, introduce una ciudad.";
      return;
    }  
    const API_KEY = "74e2f664f858abdd57e5f91baeed817b"; // Sustituye por tu clave
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric&lang=es`;
  
    try {
      const res = await fetch(url);
  
      if (!res.ok) {
        if (res.status === 404) {
          resultado.innerText = "Ciudad no encontrada.";
        } else {
          resultado.innerText = "Error al consultar el tiempo.";
        }
        return;
      }
  
      const data = await res.json();
      resultado.innerHTML = `
        <h2>Tiempo en ${data.name}</h2>
        <p>🌡️ Temperatura: ${data.main.temp} °C</p>
        <p>💨 Viento: ${data.wind.speed} m/s</p>
        <p>☁️ Cielo: ${data.weather[0].description}</p>
        <p>🌫️ Humedad: ${data.main.humidity} %</p>
        <p>🏠 Pais: ${data.sys.country}</p>
      `;
    } catch (error) {
      resultado.innerText = "Error de red o conexión.";
      console.error("Error:", error);
    }
  }  

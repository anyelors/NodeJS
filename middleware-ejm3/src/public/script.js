document.getElementById('registroForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;

    try {
        const response = await fetch('/registro', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nombre, edad })
        });

        const data = await response.json();
        alert(data.message);
    } catch (error) {
        alert('❌ Error al registrar usuario');
        console.error('Error:', error);
    }
});

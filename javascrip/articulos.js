document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Ejemplo básico de validación (puedes cambiar la lógica o los valores de prueba)
    if (username === "nig21" && password === "1234") {
        window.location.href = "articulos.html"; // Redirige si las credenciales son correctas
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});

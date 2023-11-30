const fs = require('fs');
const path = require('path');

// Leer el archivo de la base de datos
const data = fs.readFileSync(path.join(__dirname, 'database_attacked.txt'), 'utf-8');
const lineas = data.split('\n');

// Almacenar el mensaje oculto
let mensajeOculto = '';

// Función para verificar si un usuario es válido
function esUsuarioValido(id, username, email, age, location) {
    // Verificar condiciones
    const idEsAlfanumerica = /^[a-zA-Z0-9]+$/.test(id);
    const usernameEsAlfanumerico = /^[a-zA-Z0-9]+$/.test(username);
    const emailEsValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const ageEsNumero = age === '' || !isNaN(age);
    const locationEsTexto = typeof location === 'undefined' || typeof location === 'string';

    // Verificar todas las condiciones
    return idEsAlfanumerica && usernameEsAlfanumerico && emailEsValido && ageEsNumero && locationEsTexto;
}

// Iterar sobre las líneas de la base de datos
for (const linea of lineas) {
    const [id, username, email, age, location] = linea.split(',');

    // Verificar si el usuario es válido
    if (!esUsuarioValido(id, username, email, age, location)) {
        // Para usuarios inválidos, añadir el primer carácter del username al mensaje oculto
        if (username) {
            mensajeOculto += username.charAt(0);
        }
    }
}

console.log(`Mensaje oculto: ${mensajeOculto}`);

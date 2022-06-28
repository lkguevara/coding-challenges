// Variables
const btnEnviar = document.querySelector('#enviar');


// event Listener
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', iniciarApp)
}



// Funciones

function iniciarApp() {
     // deshabilitar el boton de envío
     btnEnviar.disabled = true;
     btnEnviar.classList.add('cursor-not-allowed', 'opacity-50')
}
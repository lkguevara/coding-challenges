const reloj = document.querySelector("#reloj");
const btnPlay = document.querySelector("#activar-reloj");
const btnStop = document.querySelector("#desactivar-reloj");
let clockTempo;


btnPlay.addEventListener("click", e => {
    
    // Ejecutar un setInterval, el cual se ejecutará cada sg
    clockTempo =setInterval(() => {
        let clockHour = new Date().toLocaleString();
        document.querySelector("#reloj").innerHTML = `<h3>${clockHour}</h3>`
    },1000);

    e.target.disabled = true;
})

btnStop.addEventListener("click", e => {

    clearInterval(clockTempo);
    document.querySelector("#reloj").innerHTML = null;
    document.querySelector("#activar-reloj").disabled = false;
})


const sound = document.querySelector("#reloj");
const btnPlay = document.querySelector("#activar-alarma");
const btnStop = document.querySelector("#desactivar-alarma");

let alarmaTempo;
const alarma = document.createElement("audio")
alarma.src="assets/Alarma.mp3";

btnPlay.addEventListener("click", e => {

    alarmaTempo =setTimeout(() => {
        alarma.play()
    }, 1000);

    e.target.disabled = true;
})

btnStop.addEventListener("click", e => {
    clearTimeout(alarmaTempo);
    alarma.pause();
    alarma.currentTime = 0;
    document.querySelector("#activar-alarma").disabled = false;
    
})


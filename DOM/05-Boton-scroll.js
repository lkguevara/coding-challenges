const id = document.querySelector("#countdown");
const limitDate = ("Jun 01, 2023 21:13:00");
const finalMessage = ("Feliz cumpleaños!!!");

const countdown = document.querySelector("#countdown"),
    countdownDate = new Date(limitDate).getTime();

let countdownTempo = setInterval (() => {
    let now = new Date().getTime(),
     limitTime = countdownDate - now,
     days = parseInt(limitTime/(1000 * 60 * 60 * 24)),
     hours = parseInt(limitTime % (1000 * 60 * 60 * 24)/(1000 * 60 * 60)),
     minutes = parseInt(limitTime % (1000 * 60 * 60)/(1000 * 60)),
     seconds = parseInt(limitTime % (1000 * 60)/(1000));

     countdown.innerHTML = `<h3>Faltan: ${days} días, ${hours} horas, ${minutes} minutos, ${seconds} seconds</h3>`

    // console.log(countdownDate, now, limitTime);


    if (limitTime < 0) {
        clearInterval(countdownDate);
        countdown.innerHTML = `<h3>${finalMessage}</h3>`
    }
},1000);




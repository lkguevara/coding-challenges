const btnHamburguer = document.querySelector(".panel-btn");
const panel = document.querySelector(".panel")
const panelbtn = document.querySelector(".is-active")

btnHamburguer.addEventListener("click", (e) => {
    // alert("Hola")
    if (panel.classList.contains("active")) {
        panel.classList.remove("active");
        panelbtn.classList.remove("is-active")
    }else{
        panel.classList.add("active")
        panelbtn.classList.add("is-active");
    }
})




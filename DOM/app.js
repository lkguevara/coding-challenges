const btnHamburguer = document.querySelector(".panel-btn");
const panel = document.querySelector(".panel")

btnHamburguer.addEventListener("click", (e) => {
    // alert("Hola")
    if (panel.classList.contains("active")) {
        panel.classList.remove("active");

    }else{
        panel.classList.add("active")
    }
})


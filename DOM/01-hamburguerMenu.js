const btnHamburguer = document.querySelector(".panel-btn");
const panel = document.querySelector(".panel")
const panelbtn = document.querySelector(".is-active")

/*
btnHamburguer.addEventListener("click", (e) => {
  
    if (panel.classList.contains("is-active")) {
        panel.classList.remove("is-active");
  
    }else{
        panel.classList.add("is-active")

    }
})

*/

// otra forma, aplicando la X
btnHamburguer.addEventListener("click", (e) => {
  
    document.querySelector(".panel").classList.toggle("is-active");
    document.querySelector(".panel-btn").classList.toggle("is-active");
})




const btn = document.querySelector(".scroll-top-btn");

// Establecer cuando aparecerá el botón
window.addEventListener("scroll", (e) => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 50) {
        btn.classList.remove('hidden')
    }else {
        btn.classList.add('hidden')
    }

    console.log(window.pageYOffset, document.documentElement.scrollTop)
})

btn.addEventListener("click", e => {
    window.scrollTo({
        behavior: "smooth",
        top: 0
    })
})



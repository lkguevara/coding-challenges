const btn = document.querySelector(".dark-theme-btn");
const classDark = document.querySelector(".dark-mode");
let selectores = document.querySelectorAll("[data-dark]");

let moon = "🌙", sun = "☀️"


btn.addEventListener("click", e => {
    // console.log(btn.textContent);

    if (btn.textContent === moon) {
        selectores.forEach(e => e.classList.add('dark-mode'));
        btn.textContent = sun;
    }else {
        selectores.forEach(e => e.classList.remove('dark-mode'));
        btn.textContent = moon;
    }
});



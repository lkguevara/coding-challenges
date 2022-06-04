const btn = document.querySelector(".dark-theme-btn");
const classDark = document.querySelector(".dark-mode");
let selectores = document.querySelectorAll("[data-dark]");

let moon = "🌙", sun = "☀️"

const lightMode = () => {
    selectores.forEach(e => e.classList.remove('dark-mode'));
    btn.textContent = moon;
    localStorage.setItem('theme', "light");
}

const darkMode = () => {
    selectores.forEach(e => e.classList.add('dark-mode'));
    btn.textContent = sun;
    localStorage.setItem('theme', "dark");
}

btn.addEventListener("click", e => {
    // console.log(btn.textContent);

    if (btn.textContent === moon) {
        darkMode()
    }else {
        lightMode();
    }
});

// Aplicando local Storage

document.addEventListener("DOMContentLoaded", e => {
   if (localStorage.getItem('theme') === null ) {
    localStorage.setItem('theme', 'light')
   } 

   if (localStorage.getItem('theme') === "light" ) {
    lightMode()
   } 

   if (localStorage.getItem('theme') === "dark" ) {
    darkMode()
   } 


})

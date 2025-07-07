const hamburger = document.getElementById("menu");
const nav = document.querySelector('nav');

hamburger.addEventListener("click", ()=>{
    nav.classList.toggle('show');
    hamburger.classList.toggle('show');

});
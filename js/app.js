const btnHam = document.querySelector("#Hamburger");
const hamMenu = document.querySelector(".hamburger");
btnHam.addEventListener("click", ()=>
{
    hamMenu.classList.toggle("active");
})
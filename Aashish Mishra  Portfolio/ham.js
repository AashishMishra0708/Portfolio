const hamburgers=document.querySelector(".hamburger");
const menus=document.querySelector(".menu");

hamburgers.addEventListener("click",()=>{
    hamburgers.classList.toggle("active");
    menus.classList.toggle("active");
})
document.querySelectorAll(".nav_links").forEach(n=>n.addEventListener("click",()=>{
    hamburgers.classList.remove("active");
}))

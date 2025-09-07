const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click",()=>{
    menu.classList.toggle("active");
})

document.querySelectorAll("nav ul li").forEach((item,i)=>{
    item.addEventListener("click",()=>{
        const section=["accueil","apropos","competence","contact"]
        const target = document.getElementById(section[i]);
        if(target){
            target.scrollIntoView({behavior:"smooth"})

        }

    })
})

const form = document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
   form.reset();
})

const progressBar = document.querySelectorAll(".progress-bar");
function animate(){
    progressBar.forEach((bar)=>{
        const width = bar.style.width;
        bar.style.width="0";
        setTimeout(()=>{
            bar.style.width=width;
        },300);
    })
}
window.addEventListener("load", animateProgress);
document.getElementById("year").textContent = new Date().getFullYear()

const text = "Lakshya Singhal"

let i = 0

function typing(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i)

i++

setTimeout(typing,80)

}

}

typing()

const starsContainer = document.querySelector(".stars");

for(let i=0;i<80;i++){

const star = document.createElement("div");

star.classList.add("star");

star.style.left = Math.random()*100 + "vw";

star.style.animationDuration = (Math.random()*5 + 5) + "s";

star.style.animationDelay = Math.random()*5 + "s";

starsContainer.appendChild(star);

}
const glow = document.querySelector(".cursor-glow")

document.addEventListener("mousemove",(e)=>{

glow.style.left = e.clientX + "px"
glow.style.top = e.clientY + "px"

})
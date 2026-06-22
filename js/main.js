/* ================= NAVBAR SHADOW ================= */

window.addEventListener("scroll", () => {

const navbar = document.querySelector(".navbar");

if(window.scrollY > 50){

navbar.classList.add("navbar-scrolled");

}else{

navbar.classList.remove("navbar-scrolled");

}

});

/* ================= FADE IN ON SCROLL ================= */

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

document.querySelectorAll(
".section,.skill-card,.project-card,.cert-card,.learning-card,.competency-card"
).forEach((el)=>{

el.classList.add("hidden");

observer.observe(el);

});

/* ================= ACTIVE NAV LINK ================= */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current = "";

sections.forEach((section)=>{

const sectionTop =
section.offsetTop - 150;

if(window.scrollY >= sectionTop){

current = section.getAttribute("id");

}

});

navLinks.forEach((link)=>{

link.classList.remove("active");

if(
link.getAttribute("href") === "#" + current
){

link.classList.add("active");

}

});

});

/* ================= TILT EFFECT ================= */

const cards = document.querySelectorAll(
".skill-card,.project-card,.learning-card,.competency-card"
);

cards.forEach((card)=>{

card.addEventListener("mousemove",(e)=>{

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

const centerX =
rect.width / 2;

const centerY =
rect.height / 2;

const rotateX =
((y - centerY) / 25);

const rotateY =
((centerX - x) / 25);

card.style.transform =
`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-5px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform =
"perspective(1000px) rotateX(0) rotateY(0)";

});

});

/* ================= FOOTER YEAR ================= */

document.querySelector("footer").innerHTML =
`© ${new Date().getFullYear()} Lakshya Singhal`;

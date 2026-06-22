/* ================= NAVBAR SCROLL ================= */

window.addEventListener("scroll", () => {

const navbar = document.querySelector(".navbar");

if(window.scrollY > 50){

navbar.classList.add("navbar-scrolled");

}else{

navbar.classList.remove("navbar-scrolled");

}

});

/* ================= SECTION REVEAL ================= */

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

sections.forEach((section)=>{

section.classList.add("hidden");

observer.observe(section);

});

/* ================= ACTIVE NAV LINK ================= */

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

/* ================= YEAR ================= */

const footer = document.querySelector("footer");

footer.innerHTML =
`© ${new Date().getFullYear()} Lakshya Singhal`;

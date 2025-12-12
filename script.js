// ================= Modern Portfolio JavaScript (Scroll Reveal + Typing + Icons) =================

// YEAR UPDATE
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  // TYPING EFFECT
  const text = "Hi, I'm Lakshya — Aspiring Data Analyst";
  let index = 0;
  function typeEffect(){
    document.getElementById("typing").textContent = text.slice(0, index++);
    if(index <= text.length) setTimeout(typeEffect, 60);
  }
  typeEffect();

  // SCROLL REVEAL EFFECT
  const revealElements = document.querySelectorAll('.reveal');

  function revealOnScroll(){
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;

      if(elementTop < windowHeight - 50){
        el.classList.add('revealed');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Trigger on load

});

// ================= Pro Portfolio JavaScript =================

document.addEventListener("DOMContentLoaded", () => {
  // YEAR UPDATE
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // TYPING EFFECT
  const typingEl = document.getElementById("typing");
  const text = "Hi, I'm Lakshya — Aspiring Data Analyst";
  let index = 0;

  function typeEffect() {
    if (!typingEl) return;
    typingEl.textContent = text.slice(0, index++);
    if (index <= text.length) setTimeout(typeEffect, 55);
  }
  typeEffect();

  // SCROLL REVEAL EFFECT
  const revealElements = document.querySelectorAll(".reveal");
  function revealOnScroll() {
    const windowHeight = window.innerHeight;

    revealElements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 80) {
        el.classList.add("revealed");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  // MOBILE MENU
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      const expanded = menuBtn.getAttribute("aria-expanded") === "true";
      menuBtn.setAttribute("aria-expanded", String(!expanded));
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }
});

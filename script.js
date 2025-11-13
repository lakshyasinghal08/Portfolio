document.addEventListener("DOMContentLoaded", () => {

  // Year
  const yearEl = document.getElementById("year");
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // NAV toggle
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");
  if(navToggle && navLinks){
    navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
  }

  // THEME toggle (persist)
  const themeToggle = document.getElementById("theme-toggle");
  const saved = localStorage.getItem("theme");
  if (saved === 'light') document.documentElement.classList.add('light-mode');
  if(themeToggle){
    themeToggle.addEventListener("click", () => {
      const isLight = document.documentElement.classList.toggle("light-mode");
      themeToggle.setAttribute('aria-pressed', isLight ? 'true' : 'false');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
  }

  // MODAL logic
  const modal = document.getElementById("project-modal");
  const modalBody = document.getElementById("modal-body");
  const modalClose = document.getElementById("modal-close");

  function openModal(html){
    if(modalBody) modalBody.innerHTML = html;
    if(modal) modal.setAttribute("aria-hidden","false");
  }
  function closeModal(){
    if(modal) modal.setAttribute("aria-hidden","true");
    if(modalBody) modalBody.innerHTML = "";
  }

  if(modalClose) modalClose.addEventListener("click", closeModal);
  if(modal) modal.addEventListener("click", (e)=> { if(e.target === modal) closeModal(); });

  // Project buttons
  document.querySelectorAll("[data-project]").forEach(btn=>{
    btn.addEventListener("click", (e)=>{
      e.preventDefault();
      const id = btn.getAttribute("data-project");
      if(id === "aqi"){
        openModal(`<h3>Air Quality Monitoring — Details</h3><p>Flask + MySQL backend, sensor ingestion, and dashboard.</p><p><a href="https://github.com/lakshyasinghal08/aqi" target="_blank" rel="noopener">GitHub</a></p>`);
      } else if(id === "disaster"){
        openModal(`<h3>Smart Disaster Agent — Details</h3><p>Rule-based assistant with alert triggers and simulation UI.</p><p><a href="https://github.com/lakshyasinghal08/disaster-agent" target="_blank" rel="noopener">GitHub</a></p>`);
      }
    });
  });

  // Skill buttons (python, sql, flask, cpp)
  document.querySelectorAll("[data-skill]").forEach(btn=>{
    btn.addEventListener("click", (e)=>{
      e.preventDefault();
      const id = btn.getAttribute("data-skill");
      if(id === "python"){
        openModal(`<h3>Python</h3><p>Core language. Sub-skills: NumPy, scripting, automation, backend scripting.</p>`);
      } else if(id === "sql"){
        openModal(`<h3>SQL / MySQL</h3><p>Queries, joins, indexes and schema design for backends.</p>`);
      } else if(id === "flask"){
        openModal(`<h3>Flask / APIs</h3><p>REST endpoints, routing, and small web services.</p>`);
      } else if(id === "cpp"){
        openModal(`<h3>C++</h3><p>Basics and DSA practice for algorithms and performance-focused code.</p>`);
      }
    });
  });

});

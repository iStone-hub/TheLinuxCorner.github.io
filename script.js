// Menu burger
const navToggle = document.getElementById("navToggle");
const navList = document.querySelector(".nav-list");

if (navToggle && navList) {
  navToggle.addEventListener("click", () => {
    navList.classList.toggle("open");
  });

  // Fermer le menu après un clic sur un lien (mobile)
  navList.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      navList.classList.remove("open");
    }
  });
}

// Scroll fluide (au cas où le navigateur ne gère pas bien CSS smooth)
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href").slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  });
});
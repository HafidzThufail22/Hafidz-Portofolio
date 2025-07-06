// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Smooth Scrolling Function
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({
    behavior: "smooth",
  });
}

// Contact Form Handler
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validasi
  if (!name || !email || !message) {
    alert("Mohon lengkapi semua field!");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Format email tidak valid!");
    return;
  }

  // Simulasi pengiriman (ganti dengan API real)
  alert("Terima kasih! Pesan Anda telah terkirim.");
  contactForm.reset();
});

// Scroll Reveal Animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});

//animasi landing page
var typed = new Typed(".text", {
  strings: ["Informatics Student", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// Tampil Skill
const toggleBtn = document.getElementById("toggle-projects");
const extraProjects = document.querySelectorAll(".project-extra");
let expanded = false;
toggleBtn.addEventListener("click", () => {
  expanded = !expanded;
  extraProjects.forEach((el) => {
    el.classList.toggle("hidden", !expanded);
  });
  toggleBtn.textContent = expanded ? "Show Less" : "View All";
});

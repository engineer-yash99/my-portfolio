/* Typing Effect */
const text = "Web Developer | Computer Engineering Student";
let index = 0;
const speed = 100;
const typingElement = document.querySelector(".typing");

function typeEffect() {
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}
typeEffect();

/* Scroll Reveal Animation */
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach(section => {
    const windowHeight = window.innerHeight;
    const revealTop = section.getBoundingClientRect().top;
    if (revealTop < windowHeight - 100) {
      section.classList.add("active");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);

/* Navbar background change */
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  nav.style.background = window.scrollY > 50 ? "#010409" : "#0d1117";
});

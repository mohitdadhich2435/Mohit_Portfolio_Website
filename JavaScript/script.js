const sr = ScrollReveal({
  distance: "60px",
  duration: 600,
  delay: 200,
  reset: true,
  viewFactor: 0.2,
});
sr.reveal(".about");
sr.reveal(".project");
sr.reveal(".skills");
sr.reveal(".resume");

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", function () {
  navbar.classList.toggle("active");
});

const card = document.getElementById("card");
const toggleBtn = document.getElementById("dark-toggle");

// 3D Tilt effect on card
card.addEventListener("mousemove", (e) => {
  const rect = card.getBoundingClientRect();
  const x = (rect.left + rect.width / 2 - e.clientX) / 25;
  const y = (rect.top + rect.height / 2 - e.clientY) / 25;
  card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  card.style.transition = "transform 0s";
});

card.addEventListener("mouseleave", () => {
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  card.style.transition = "transform 0.5s ease";
});

// Dark Mode Toggle
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

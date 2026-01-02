// Floating chat toggle
document.addEventListener("DOMContentLoaded", () => {
  const chatToggle = document.getElementById("chat-toggle");
  const chatContainer = document.getElementById("chat-container");

  chatToggle.addEventListener("click", () => {
    chatContainer.style.display =
      (chatContainer.style.display === "block") ? "none" : "block";
  });
});

// Scroll reveal for feature cards
const cards = document.querySelectorAll(".feature");
function revealCards() {
  const triggerBottom = window.innerHeight / 5 * 4;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) card.classList.add("active");
  });
}
window.addEventListener("scroll", revealCards);
window.addEventListener("load", revealCards);

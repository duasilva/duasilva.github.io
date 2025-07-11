// Title Animation
document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("typing-anim");
  if (!header) {
    console.error("Element with id 'typing-anim' not found");
    return;
  }

  const text = "\u003c/Duarte Silva\u003e";
  header.textContent = "";

  let index = 0;
  const speed = 100;

  function type() {
    if (index < text.length) {
      header.textContent += text.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  }

  type();
});

// Dark Mode Toggle Functionality
const checkbox = document.getElementById("dark-mode-checkbox");
const icon = document.querySelector(".icon");

function updateTheme() {
  const isDark = checkbox.checked;
  document.body.classList.toggle("dark-mode", isDark);
  icon.textContent = isDark ? "☀️" : "🌙";
}

updateTheme();

checkbox.addEventListener("change", updateTheme);

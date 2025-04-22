const dropdown = document.getElementById("dropdown");
const options = document.getElementById("options");
const selected = document.getElementById("selected");
const selectedValue = document.getElementById("selected-value");

dropdown.addEventListener("click", () => {
  options.style.display = options.style.display === "block" ? "none" : "block";
});

options.querySelectorAll("div").forEach(option => {
  option.addEventListener("click", () => {
    selected.textContent = option.textContent;
    selectedValue.value = option.dataset.value;
    options.style.display = "none";
  });
});

// Fecha o menu se clicar fora
window.addEventListener("click", function (e) {
  if (!dropdown.contains(e.target)) {
    options.style.display = "none";
  }
});
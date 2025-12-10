const btn = document.getElementById("btn");
const popup = document.getElementById("popup");

btn.addEventListener("click", () => {
  popup.classList.toggle("active");
});

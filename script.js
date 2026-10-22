const langToggle = document.getElementById("langToggle");
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
let currentLang = "en";

langToggle.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "ar" : "en";
  document.documentElement.lang = currentLang;
  document.body.dir = currentLang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-en][data-ar]").forEach((el) => {
    el.textContent = el.dataset[currentLang];
  });
  langToggle.textContent = currentLang === "en" ? "العربية" : "English";
});

menuToggle.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});
document.getElementById("year").textContent = new Date().getFullYear();

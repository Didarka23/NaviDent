// ВАЖНО: вставьте сюда действующие контакты клиники.
const NAVIDENT_CONTACTS = {
  whatsapp: "https://wa.me/77785630413",
  instagram: "https://www.instagram.com/navi_dent_alfarabi/"
};

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.href = NAVIDENT_CONTACTS.whatsapp;
  link.target = "_blank";
  link.rel = "noopener";
});
document.querySelectorAll("[data-instagram]").forEach((link) => {
  link.href = NAVIDENT_CONTACTS.instagram;
  link.target = "_blank";
  link.rel = "noopener";
});

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});
nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});
document.getElementById("year").textContent = new Date().getFullYear();

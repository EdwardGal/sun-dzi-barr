// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

let links = document.querySelectorAll('.menu__link');
links.forEach(element => {
   element.addEventListener("click", function (e) {
      document.documentElement.classList.toggle("menu-open");
   });
});
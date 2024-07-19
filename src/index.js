import './style.css';
import { home } from './pages/home.js';
import { menu } from './pages/menu.js';
import { about } from './pages/about.js';

const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");
const aboutButton = document.querySelector(".about");
const content = document.querySelector("#content");

home();
homeButton.addEventListener("click", () => {
    home();
})

menuButton.addEventListener("click", () => {
    menu();
});

aboutButton.addEventListener("click", () => {
    about();
})
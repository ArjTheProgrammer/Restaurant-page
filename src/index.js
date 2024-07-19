import './style.css';
import { home } from './pages/home.js';
import { menu } from './pages/menu.js';
import { about } from './pages/about.js';
import { order } from './pages/order.js';

const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");
const aboutButton = document.querySelector(".about");
const orderButton = document.querySelector(".order");
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
});
orderButton.addEventListener("click", () => {
    order();
});

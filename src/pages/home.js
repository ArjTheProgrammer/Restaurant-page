import { menu } from '../pages/menu.js';
import { about } from '../pages/about.js';
import { order } from '../pages/order.js';

const content = document.querySelector("#content");

export function home(){
    content.innerHTML = "";
    const homeWrapper = document.createElement("div");
    homeWrapper.className = "home-wrapper";
    const welcome = document.createElement("div");
    welcome.className = "welcome";
    const menuTab = document.createElement("div");
    menuTab.className = "menuTab";
    const orderTab = document.createElement("div");
    orderTab.className = "orderTab";
    const aboutTab = document.createElement("div");
    aboutTab.className = "aboutTab";

    menuTab.addEventListener("click", () => {
        menu();
    });

    aboutTab.addEventListener("click", () => {
        about();
    });

    orderTab.addEventListener("click", () => {
        order();
    });

    menuTab.textContent = "Menu";
    orderTab.textContent = "Order";
    aboutTab.textContent = "About";

    homeWrapper.append(welcome);
    homeWrapper.append(menuTab);
    homeWrapper.append(aboutTab);
    homeWrapper.append(orderTab);
    content.append(homeWrapper);
}
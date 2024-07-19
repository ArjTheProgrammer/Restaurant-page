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

    menuTab.textContent = "Menu";
    orderTab.textContent = "Order";
    aboutTab.textContent = "About";

    homeWrapper.append(welcome);
    homeWrapper.append(menuTab);
    homeWrapper.append(orderTab);
    homeWrapper.append(aboutTab);
    content.append(homeWrapper);
}
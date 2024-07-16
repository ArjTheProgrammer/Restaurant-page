import curry from "../assets/curry.jpg";
import karekare from "../assets/kare-kare.jpg";
import lomi from "../assets/lomi.jpg";
import sisig from "../assets/sisig.jpg";

export function menu(){
    let menuItems = [];

    const content = document.querySelector("#content");

    const menuWrapper = document.createElement("div");
    menuWrapper.className = "menu-wrapper";

    class Menu{
        constructor(title, price, img){
            this.title = title;
            this.price = price;
            this.img = img;
        }
    }

    //bunch of menu
    const curryObj = new Menu("Curry", 60, curry);
    const karekareObj = new Menu("Kare-kare", 60, karekare);
    const lomiObj = new Menu("Lomi", 70, lomi);
    const sisigObj = new Menu("Sisig", 75, sisig);

    displayMenu(curryObj);
    displayMenu(karekareObj);
    displayMenu(lomiObj);
    displayMenu(sisigObj);

    function displayMenu(menu){
        const menuContainer = document.createElement("div");
        menuContainer.className = `menu`;

        const imageContainer = new Image();
        imageContainer.src = menu.img;

        const titleContainer = document.createElement("h1");
        titleContainer.textContent = menu.title;

        const priceContainer = document.createElement("p");
        priceContainer.textContent = `₱${menu.price}`;

        const orderButton = document.createElement("button");
        orderButton.textContent = "Add Order";

        menuContainer.append(imageContainer);
        menuContainer.append(titleContainer);
        menuContainer.append(priceContainer);
        menuWrapper.append(menuContainer);
        menuContainer.append(orderButton);
        menuItems.push(menu);
    }

    console.log(menuItems);

    content.append(menuWrapper); 
}
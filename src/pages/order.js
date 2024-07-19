const content = document.querySelector("#content");

export function order(){
    content.innerHTML = "";
    
    const orderWrapper = document.createElement("div");
    orderWrapper.className = "order-wrapper";
    orderWrapper.textContent = "Still in progress...";

    content.append(orderWrapper);
}
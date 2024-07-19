const content = document.querySelector("#content");

export function about(){
    const about = document.createElement("div");
    about.className = "about-wrapper";
    const welcome = document.createElement("h1");
    const welcomeP = document.createElement("p");
    const story = document.createElement("h3");
    const storyP = document.createElement("p");
    const menu = document.createElement("h3");
    const menuP = document.createElement("p");
    const commit = document.createElement("h3");
    const commitP = document.createElement("p");
    const join = document.createElement("h3");
    const joinP = document.createElement("p");

    welcome.textContent = "Welcome to Kusina!";
    welcomeP.textContent = "At Kusina, we bring the heart and soul of Filipino cuisine to your table. Nestled in the vibrant community of [Location], our restaurant is a celebration of the rich culinary heritage of the Philippines. From the bustling streets of Manila to the serene shores of Palawan, our dishes are inspired by the diverse flavors and traditions that make Filipino food so unique.";
    story.textContent = "Our Story";
    storyP.textContent = "Kusina was born out of a passion for authentic Filipino cooking. Our founders, Jose Neil Silagan Jr., envisioned a place where people could experience the warmth and hospitality of the Philippines through its food. Every dish we serve is a tribute to the recipes passed down through generations, lovingly prepared with the freshest ingredients and a touch of home.";
    menu.textContent = "Our Menu";
    menuP.textContent = "Our menu is a delightful journey through the Philippines, featuring classic favorites and modern twists. Savor the bold flavors of Adobo, the comforting taste of Sinigang, and the sweet indulgence of Halo-Halo. Whether you’re craving a hearty meal or a light snack, Kusina has something to satisfy every palate.";
    commit.textContent = "Our Commitment";
    commitP.textContent = "At Kusina, we are committed to providing an exceptional dining experience. Our team of skilled chefs and friendly staff are dedicated to making every visit memorable. We believe in the power of good food to bring people together, and we strive to create a welcoming atmosphere where everyone feels at home.";
    join.textContent = "Join Us";
    joinP.textContent = "Come and discover the flavors of the Philippines at Kusina. Whether you’re a longtime fan of Filipino cuisine or trying it for the first time, we invite you to join us for a meal that will warm your heart and delight your senses.";


    about.append(welcome);
    about.append(welcomeP);
    about.append(story);
    about.append(storyP);
    about.append(menu);
    about.append(menuP);
    about.append(commit);
    about.append(commitP);
    about.append(join);
    about.append(joinP);
    content.append(about);
}
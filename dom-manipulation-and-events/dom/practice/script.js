const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const para = document.createElement("p");
para.textContent = "Hey I'm red";
para.style.color = "red";
container.appendChild(para);

const head = document.createElement("h3");
head.textContent = "I'm a blue h3";
head.style.cssText = "color: blue;";
container.appendChild(head);

const parent = document.createElement("div");
parent.classList.add("parent");
parent.setAttribute("style", "border: solid; border-color: black; background-color: pink;");
container.appendChild(parent);

const head1 = document.createElement("h1");
head1.textContent = "I'm a div";
parent.appendChild(head1)

const par1 = document.createElement("p");
par1.textContent = "ME TOO!";
parent.appendChild(par1);



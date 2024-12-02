//METHOD TWO
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World! 2");


//METHOD THREE
const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", () => {
    alert("Hello World! 3")
})

function alertFunction() {
    alert("YAY! YOU DID IT");
}

const bt = document.querySelector("#bt");
bt.onclick = alertFunction;

const bt2 = document.querySelector("#bt2")
bt2.addEventListener("click", alertFunction)
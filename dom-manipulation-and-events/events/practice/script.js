
// the e parameter in that callback function contains an object that
//references to the event it
//that object has many methods and properties about the event's target
const btn = document.querySelector("#btn");
btn.addEventListener("click", function(event) {
    console.log(event.target);
});

//adds style to the e target on click
btn.addEventListener("click", function (event) {
    event.target.style.background = "blue";
  });

//OR
btn.addEventListener("click", function(event) {
    event.target.setAttribute ("style", "background: blue; color: white;");
})

//OR
btn.addEventListener("click", function (event) {
    event.target.style.cssText = "color: white; background: blue;"
})


//ATTACHING LISTENERS TO A GROUP OF NODES

//button is a node list. It looks and acts much like an array
const buttons = document.querySelectorAll("button");

//each button returns its id
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    });
})
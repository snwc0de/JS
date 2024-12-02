

//QUERY SELECTORS
const container = document.querySelector("#container");
//selects the #container div

const display = container.firstElementChild;
//selects the first child of the #container div
console.log(display);

const controls = document.querySelector(".controls");
//selects the .controls div

const display = controls.previousElementSibling;
// selects the prior sibling => display
console.log(display);



//CREATE ELEMENTS
const div = document.createElement("div");
//creates element with tagName "div"




//ALETERING ELEMENTS
div.style.color = 'blue';
//adds indicated style rule to the element in the div variable

div.style.cssText = 'color: blue; backgroundColor: white;'
//adds several style attributes

div.setAttribute("style", "color: blue; backgroundColor: white;");
//adds several style attributes

// dot notation with camelCase: works, accesses the div's background-color style
div.style.backgroundColor;

// bracket notation with kebab-case: also works
div.style["background-color"];

// bracket notation with camelCase: also works
div.style["backgroundColor"];




//EDITING ATTRIBUTES
div.setAttribute("id", "theDiv");
//if id exists, update it to "theDiv", else create an id with the value "theDiv"

div.getAttribute("id");
//gets the value of the specified attribute

div.removeAttribute("id");
//removes the specified attribute


//WORKING WITH CLASSES
div.classList.add("new");
//adss class "new" to your new div

div.classList.remove("new");
//removes class "new" from div

div.classList.toggle("new");
//if div doesn't have a class "new" then add it, or if it does, then remove the class "new"



//ADDING TEXT CONTENT
div.textContent = "Hello World";
// creates a text node containing "Hello World" and add it to the div



//ADDING HTML CONTENT
//FUNCTION DECLARATION
function sayHi() {
    alert("Hello");
} //A function is a value and a function name is a variable in any syntax

//FUNCTION EXPRESSION
let sayHey = function() {
    alert("Hello");
} //A function is a value and a function name is a variable in any syntax

alert(sayHi);

let func = sayHi //a function name as a value converts the new variable to a function

func();
sayHi();

//CALLBACK FUNCTIONS
function ask(question, yes, no) {
    if (confirm(question)) yes()
        else no();
}

function showOk(){
    alert("You agreed."); //callback function for yes() parameter
}

function showCancel(){
    alert ("You canceled the execution."); //callback function for no() parameter
}

ask("Do you agree", showOk, showCancel);

let age = 16; // take 16 as an example

if (age < 18) {
  welcome();               // \   (runs)

  function welcome() {    
    alert("Hello!");       //  |  Function Declaration is available
  }                        //  |  everywhere in the block where it's declared
  welcome();               // /   (runs)

} else {

  function welcome() {
    alert("Greetings!");
  }
}
// Here we're out of curly braces, so we can not see Function Declarations made inside of them.

welcome(); // Error: welcome is not defined
// let functionName = (arg1, arg2, arg3) => expression ie the code to run when the function is called upon

let addNo = (a, b) => a + b;
addNo(1,2)

//function expression version
let addNo = function(a, b) {
    return a + b;
}

//function declaration version
function addNo (a, b) {
    return a + b;
}

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello!') :
  () => alert("Greetings!");

welcome();


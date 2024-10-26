//FUNCTIONS
function myFunctionName () {
    let name = "Samuel"; //code to be run when the function is invoked or called upon
    console.log(name);
}

//INVOKING FUNCTIONS
myFunctionName(); //This is invoking the function any where in the code to make it run

//PARAMETER AND ARGUMENTS
function myNewFunction (parameter) { //the parameter is a place holder for a future value
    let login = prompt("Who is this?", "Username");
    (login === parameter) ? alert("Congrats you have unlocked the " + parameter) : alert("Incorrect Username");
}
myNewFunction("Arguments"); //the argument updates the value in the parameter, when invoking the function

//OPTIONAL PARAMETER
let array = ["Timmy", " and ", "Jimmy"];
let output = array.join(""); //function with optional parameter set
console.log(output);
let output2 = array.join(); //function with no parameter, it adopts the default behaviour of the function
console.log(output2);

//DEFAULT PARAMETER
function myFunction3 (tool1, tool2 = "Machette") {   //default parameter sets a value for the parameter while naming the function
    console.log(tool1 + " and " + tool2 + " are farming tools.");
}
myFunction3("Shovel"); //if the argument for a parameter is not given, it is considered as undefined
myFunction3("Shovel", undefined); //it gives the same result as the code above
myFunction3("Shovel", "Wheel-barrow"); //Arguments have a higher predecence than default parameters, default parameter is considered only when there is no argument set for the parameter.
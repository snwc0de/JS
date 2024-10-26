//ANONYMOUS FUNCTION
function ()//An anonymous function with no function name and no parameter
function (name) { //anonymous function with a parameter
    let check = prompt("Tell us who you are!", "Write");
    (check === name) ? alert('Nice one') : alert ('Loser');
}

function myParentFunction(HOSD, function (name)) { //Anonymous function serving as a parameter for another function
    alert("we are the one" + HOSD);
} 
myParentFunction("gamers", "let's get it");

//INCOMPLETE, AND NOT WORKING CODE TO BE REVIEWED LATER ON DURING THE COURSE
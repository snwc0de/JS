//RETURN VALUES
function min(a, b) {
    return a + b; //the return here returns the value for adding the two parameters together 
}
min(12, 14);


function checkAge(age) {
    if (age >= 18) {
        return true //returns the boolean 'true' if the age condition is true
    } else {
        return "Underage" //returns the string "Underage" if the age condition is false
    }
} 

//RETURN WITHOUT A VALUE
function showGame(age) {
    if (!checkAge(age)) { 
        return; //Stops the function call here if the condition is false but proceeds to the next line of code if the condition is true
    }
    alert("return without a value") //This code only works if the condition is true,
}

//RETURN CONDITIONALS
function factorial(num) {
    if (num < 0) return undefined;
    if (num === 0) return 1;
    let x = num -1;
    while (x > 1) {
        num *= x;
        x--;
    }
    return num
}  
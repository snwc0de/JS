//FUNCTIONS
function favoriteAnimal(animal) {  //the parameter for the function 'favoriteAnimal' is written inside the parenthesis() beside it
    return animal + " is my favorite animal!"
}
favoriteAnimal('Goat') //this is the argument whose value in the parenthesis updates the parameter when the code is run
console.log(favoriteAnimal('Goat')); 

function sum(param1, param2) { //function and parameter
    return param1 + param2;    //return code
}
sum(2, 3); //the argument
console.log(sum(2, 3));

function myFunction() {
   alert("hello");
}
  
myFunction();

const myNumber = Math.random();
alert(myNumber)

function logKey(event) {
    console.log(`You pressed "${event.key}".`);
}
textBox.addEventListener("keydown", logKey);


  
  
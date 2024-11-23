//LOOPS IN JAVASCRIPT


//THE "FOR" LOOPS
let cars = ["Chervelotte", "Mustang", "HellCat", "Chevy", "Ford"];

let message = "My favourite American car brand is a";

for (let i = 0; i < cars.length;  i++) { //initialization; condition; final-expression
    console.log(message + " " + cars[i]);
}

function getSquare() {
    let message = "Using 'for' loop, The square of";
    for (let i = 1; i < 7; i++) {
        console.log(message + ` ${i} is = ${i} x ${i} = ` + i * i)
    }
}
getSquare();


//THE "WHILE" loop
let clubs = ["Manchester United", "FC Barcelona", "Arsenal FC", "Paris Saint German", "FC Bayern Munich"]

let goals = "My favourite team in football is"

let i = 0; //initialization
while (i < clubs.length) { //condition
    console.log(goals + " " + clubs[i])

    i++; //final-statement
}

function numSquare() {
    let message = "Using 'while' loop, The square of";
    
    let i = 1;
    while (i < 7) {
        console.log(message + ` ${i} is = ${i} x ${i} = ` + i * i);
        
        i++;
    }
}
numSquare();


//THE "DO... WHILE" LOOP
let jewls = ["Diamond", "Ruby", "Gold", "Silver", "Bronze", "Crystal"]

let value = "The most expensive jewelry is"

let ii = 0; //intialisation
do {
    console.log(value + " " + jewls[ii])
    ii++; //final-expression
} while (ii < jewls.length) //condition


//BREAK A LOOP
let sum = 0;

while (true) {
  let value = +prompt("Enter a number", '');

  if (!value) break; // exits the loop when no number is entered

  sum += value;

}
alert( 'Sum: ' + sum );


//CONTINUE A LOOP
for (let i = 0; i < 10; i++) {

    // if true, skip the remaining part of the body
    if (i % 2 == 0) continue;
  
    alert(i); // 1, then 3, 5, 7, 9
  }
//The loop continues an iteration if the number is divisible by 2
//But exits an iteration if the number is not divisible by 2


//LABELS FOR BREAK & CONTINUE
let n = 10;
labelName:
for (let i = 2; i <= n; i++) {
    for (j = 2; j < i; j++) {
        if (i % j === 0) continue labelName;
    }
    alert(i);
};
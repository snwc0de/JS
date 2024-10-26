//CONDITIONALS
//The "if" Statement (Conditionals)
if (cA == 5){
    oldgame = "Call Of Duty"; //the code to be run if the condition is true, the condition is written inside the round brackets()
  }
  console.log(oldgame);
  
  //The "else" Statement (Conditionals)
  if (cC == 9){
    game = "Call Of Duty";
  } else {
    game = "Battlefield V"; //the code to be run if the condition is false, the condition is written inside the round brackets()
  }
  console.log(game);
  
  //The "else if" Statement (Conditionals)
  if (cA > cC){
    newgame = "FIFA 23"; //the code to be run if condition1 is true
  } else if (cC == cA) {
    newgame = "EAFC 25"; //the code to be run if conditon1 is false and condition2 is true
  } else {
    newgame = "EAFC 24"; //the code to be run if condition2 is false
  }
  console.log(newgame);
  
  //The "OR" operator
  console.log(true || true); //true
  console.log(false || true); //true
  console.log(true || false); //true
  console.log(false || false); //false
  
  if (1 || 0){
    console.log("LET\'S GO MAN"); //In boolean, true = 1 and false = 0
  }
  
  let time = 9;
  let isWeekend = true;
  
  if (time < 10 || time > 18) {
    console.log('The office is officially closed.');
  }
  
  if (time < 10 || time > 18 || isWeekend) {
    console.log("Office is closed for the weekend");
  }
  
  //Extended "OR" features in Js
  console.log( 1 || 0 ); // 1 (1 is truthy)
  console.log( null || 1 ); // 1 (1 is the first truthy value)
  console.log( null || 0 || 1 ); // 1 (the first truthy value)
  console.log( undefined || null || 0 ); // 0 (all falsy, returns the last value)
  
  let firstName = "";
  let lastName = "";
  let nickName = "SuperCoder";
  
  alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder
  
  //"AND" OPERATOR
  console.log(true && true); //true
  console.log(true && false); //false
  console.log(false && true); //false
  console.log(false && false); //false
  
  let hour = 12;
  let minute = 30;
  
  if (hour == 12 && minute == 30) {
    alert( 'The time is 12:30' );
  }
  
  if (1 && 0) { // evaluated as true && false
    alert( "won't work, because the result is falsy" );
  }
  
  //"NOT" Operator
  console.log(!true); //returns false
  console.log(!false); //returns true
  //A double not(!!) converts value to boolean
  console.log(!!"non-empty") //FALSE, not empty string = 1 = true and it's inverse is false
  console.log(!!"") //TRUE, empty string = 0 = false and it's inverse is true
  
  let ager = 34
  if (ager >= 14 && ager <=90) {
    console.log("Age limit is not exceeded")
  }
  
  let aged = 10
  if (!(aged >= 14 && aged <= 90)) {
    console.log("Age is not recognised");
  }
  
  let ages = 10
  if (ages < 14 || ages > 90) {
    console.log("Age is also not recognised")
  }
  
  //TEST
  let visitor = prompt("Who's there?")
  if (visitor === "Admin") {
    let password = prompt("Password!");
  
    if (password === "TheMaster") {
      alert("Welcome1");
    } else if (password === "" || password === null) {
      alert("Cancelled!");
    } else {
      alert("Wrong password");
    }  
  } else if  (visitor === "" || visitor === null) {
      alert("Cancelled");
  } else {
      alert("I don't know you")
  } 
  
   //CONDITIONAL '?'
  let user = "TheMaster";
  let canned = (user == "TheMaster") ? true : false;  //canned variable will display true if username is the master and display false if otherwise
  console.log(canned)
  
  let agez = prompt('age?', 18);
  
  let massage = (agez < 3) ? 'Hi, baby!' :
    (agez < 18) ? 'Hello!' :
    (agez < 100) ? 'Greetings!' :
    'What an unusual age!';
  
  alert( massage );

  //TEST
  let officialname = prompt("What is the official name for javascript", );
  if (officialname == 'ECMAScript') {
    alert("Right!");
  } else {
    alert("You don't know?");
  }

  let nameofficial = prompt("For the second time, what is the official name of javascript?");
  (nameofficial === "ECMAScript") ? alert("Right") : alert("You dont know?")

//SWITCH OPERATOR
let aprime = 2 + 2;
switch (aprime) {
  case 3:
    alert("Too small!");
    break;
  case 4:              //4 in this case is the value it is comparing with the conditional in the bracket
    alert("Exactly!"); //the code stops running here after the break because this is the correct answer
    break;            //the break stops further checks after the correct value has been found
  case 5:
    alert("Too big");
}

let ad = +prompt('adS?', '');
switch (ad) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert("2,3");
    break;
  default:
    alert("unknown value");
}
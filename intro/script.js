const xt = "fire";
console.log(xt);

// JAVASCRIPT NUMBERS
let names = "sam";
names = "samuel";
console.log(names);

xn = 3 + 5 * 12;
rn = 9;
rn++;
// rt = ++x; returns the new value
// rt = x++:  returns the old value
console.log(rn);
console.log(xn / rn);
console.log(xn);
console.log(xn + rn);

let qn = rn ** 2;
console.log(qn);

let cn = 0.1 + 0.2;
console.log(cn);

let bn = "10"
let dn = "20"
console.log(bn + dn);

let zn = Number(bn);
console.log(zn);

const lotsOfDecimal = 1.766584958675746364;
console.log(lotsOfDecimal);
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
console.log(twoDecimalPlaces);

let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
x *= y; // x now contains the value 12
console.log(x)

let ab = "16";
let unary = +ab;
console.log(ab);
console.log(unary);

// JAVASCRIPT STRINGS
const string = "The revolution will not be televised.";
console.log(string);

const single = 'Single quotes'; //used to declare strings in a js code but should be used through-out the code
const double = "Double quotes"; //used to declare strings in a js code but should be used through-out the code
const backtick = `Backtick`; //used to embed or house other variables in a string using ${..} within the string
let bktkeg = `We can use ${single} or ${double} inside a backtick`;

console.log(single);
console.log(double);
console.log(backtick);
console.log(bktkeg);

// concatenation in strings
const greeting = "Hello";
const name = "Chris";

let test1 = greeting + ", " + name; //concatenation using plus +
let test2 = `${greeting}, ${name}`; //concatenation using embedding variables in js

console.log(test1);
console.log(test2);

const newline = `One day you finally knew
what you had to do, and began.`; //how to write new code in a new line using backtick
const newline2 = "One day you finally knew\nwhat you had to do, and began."; //writing code in new line using a break

console.log(newline);
console.log(newline2);

//quotes in strings
let bigmouth = "I am a very \"special footballer\" innit"; //including quotes in a string using backlash before each quotes
console.log(bigmouth);

// CONVERSION
let mystr = "1234";
let mystr2 = Number(mystr); //converting strings to numbers.

let mynum = 1234;
let mynum2 = String(mynum); //converting numbers to strings.

console.log(mystr2);
console.log(mynum2);

//STRINGS METHODS
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length; //returns the length of the total number of characters present in the string
console.log(length);

//Strings character extraction
let at = text.at(25); //returns the character at the specified index number in the string
let char = text.charAt(0); //returns the character at the specified index number in the string
let charcode = text.charCodeAt(10); //returns the code of the character at the specified index number in the string
let textarray = text[16]; //treats the string like an array and returns the character at the specified index position

console.log(at);
console.log(char);
console.log(charcode);
console.log(textarray);

//Strings parts extraction
let text2 = "The champion is here to stay man";
let slic = text2.slice(7, 13); //returns the parts covered by the first and second values
let substrin = text2.substring(0, 9) //returns the parts covered by the first and second values in the string
let subst = text2.substr(5, 3) //the first index specifies the position and the second specifies the lenght of the return character

console.log(slic);
console.log(substrin);
console.log(subst);

//string to upper and lower cases
let text3 = "THE man of the Moment";
let lower = text3.toLowerCase();
let upper = text3.toUpperCase();

console.log(lower);
console.log(upper);

//Joining strings together using concat()
let text4 = "Ronaldo";
let text5 = "GOAT";
let conc = text4.concat(" is the ", text5);
console.log(conc);

//Trimming
let text6 = "      Hello World!      ";
let trbt = text6.trim(); //removes the whitespaces from string start and ends
let trst = text6.trimStart(); //removes the whitespaces for string start
let tred = text6.trimEnd(); //removes the whitespaces from string end

console.log(trbt);
console.log(trst);
console.log(tred);

//Padding
let text7 = "5";
let padded = text7.padStart(4,"0"); //the first value indicates the length and the second value indicates the new string to be padded
let padded2 = text7.padStart(4,"x"); //Pad a string with "x" until it reaches the length 4

console.log(padded);
console.log(padded2);

//repeat
let text8 = "Let us repeat this msg";
let rept = text8.repeat(4); //repeats the strings according to the count number specified in the index.

console.log(rept);

//replace
let text9 = "Messi is the GOAT of football.\nMessi is football heritage and history.";
let repl = text9.replace("Messi", "Ronaldo"); //replaces old characters with new ones(only the first match) and is case sensitive
let repl2 = text9.replace(/MESSI/i, "Ronaldo"); //Makes it case insensitive and replaces the characters with the new
let repl3 = text9.replace(/Messi/g, "Ronaldo"); //replaces old characters globally with the new characters.
let repl4 = text9.replaceAll("football", "fashion"); //replaces all the old characters in the string with the newly specified character.

console.log(repl);
console.log(repl2);
console.log(repl3);
console.log(repl4);

//converting strings to array
let sta = text8.split(", ");
let sta2 = text8.split(" ");
let starray = sta2[3];
let sta3 = text8.split("|");

console.log(sta);
console.log(sta2);
console.log(sta3);
console.log(starray);

// comparison code
const a = "a";
const b = "b";
if (a < b) {
  // true
  console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal.`);
}

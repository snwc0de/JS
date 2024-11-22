//ARRAYS
const cars = ['mercedes', 'honda', 'toyota']; //always use const to declare arrays
console.log(cars);

//In writing arrays space and line breaks are not important
const male = [
    'John',
    'Terry',
    'Dan'
];
male [0] = 'Kane';
console.log (male[0])
console.log(male);

//
const drinks = [];
drinks[0] = 'coke';
drinks[1] = 'fanta';
drinks[2] = 'sprite';
console.log(drinks);

//ARRAYS using the keyword new
const players = new Array('Ronaldo', 'Messi', 'Neymar');
console.log(players);

//CONVERTING ARRAY TO STRING
const fruits = ['apple', 'mango', 'banana'];
let nfruits = fruits.toString(); //converts the array to string
console.log(nfruits);

//ARRAYS COMPARED TO OBJECTS
const person = ['John', 'Doe', '46'];
console.log(person[0]); //Arrays

const persons = {firstName: 'John', secondName: 'Doe', age: '46'}
console.log(persons.firstName);//Objects

let myFunc = () => {let name = 'Daniel'};
//ARRAY ELEMENTS AS OBJECTS
const myArray = []
myArray[0] = persons.age; // objects in an array
myArray[1] = myFunc; // function in an array
myArray[2] = cars; //array in an array

//ARRAY PROPERTIES AND METHOD
const games = ['eFootball', 'EAFC', 'PES', 'Call Of Duty', 'Battlefield'];
//
//ARRAY LENGTH
let length = games.length;
console.log(length); //Gets the length of the array, that is the number of elements in the array

//ACCESSING THE FIRST ARRAY ELEMENT
let firstArray = games[0];
console.log(firstArray); //This gets the first element in the array

//ACCESSING THE LAST ARRAY ELEMENT
let lastArray = games[games.length - 1];
console.log(lastArray); //This gets the last element in the array

//LOOPING ARRAY ELEMENTS
const laptop = ['Dell', 'Lenovo', 'HP', 'Acer', 'Asus', 'Gigabyte', 'MSI'];
let lapLength = laptop.length;

let text = "<ul>";
for (let i = 0; i < lapLength; i++) {
    text += "<li>" + laptop[i] + "</li>";
}
text += "<ul>";
console.log(text);

//ARRAY FOR EACH FUNCTION
const fru = ["Banana", "Orange", "Apple", "Mango"];

let txt = "<ul>";
fru.forEach(myFunction);
txt += "</ul>";

function myFunction(value) {
  txt += "<li>" + value + "</li>";
};

//ADDING ARRAY ELEMENTS
let trucks = ["Prado", "Highlander", "Ford",]
trucks.push("Lexus RX"); //adds Lexus Rx to the array

trucks[trucks.length] = "RAV4"; //also adds RAV4 to the array
console.log(trucks);

//NESTED ARRAYS AND OBJECTS
//Values in objects can be arrays, and values in arrays can be objects:
const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }

  console.log(myObj);
  

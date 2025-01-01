
const arr = [1, 2, 3, 4, 5];


//MAP METHOD
function addOne (num) {
    return num + 1;
};

const mapArr = arr.map(addOne);  //map iterates through the array and applies the callback fn to each array element 
                                 //produces a new array without altering the original array.

console.log(arr);       //[1, 2, 3, 4, 5] (unchanged)
console.log(mapArr);    //[2, 3, 4, 5, 6] (new array, increments each arr element by 1)
//OR
const mapArr1 = arr.map((element) => element + 1);

console.log(mapArr1);   //[2, 3, 4, 5, 6] (same as first method)


//FILTER METHOD
function isOddNo (num) {
    return num % 2 !== 0;
}
 
const filt = arr.filter(isOddNo);  //filter iterates through the array and applies the callback fn to each array element
                                   //returns the original value, only if the callback function returns true

console.log(arr);   //[1, 2, 3, 4, 5] (unchanged)
console.log(filt);  //[1, 3, 5] (filters odd numbers)
//OR
const filt0 = arr.filter((element) => element % 2 !== 0);

console.log(filt0);  //[1, 3, 5] (same as first method)


//REDUCE and REDUCE-RIGHT METHOD
                                                        //iterates through the array, has two arguments and is used with an operator in the callback fn
const time = arr.reduce((one, two) => one * two);       //1st-arg (total accumulator) = intialValue or the 1st-array-element if no initialValue is set
const times = arr.reduce((one, two) => one * two, 5);   //2nd-arg (second operand) = current value which is being iterated on
const sum = arr.reduce((one, two) => one + two);        //initialValue = 2nd arg(after callback fn), if we don't want the initial value set to the 1st-array-element
const rg = arr.reduceRight((one, two) => one - two);    //same as reduce but starts from the right

console.log(time);    //120, no initialValue
console.log(times);   //600, multiplies the initialValue by 5
console.log(sum);     //15, adds all arr elements together
console.log(rg);      //-5, subtracts all elements from the right


function sumOfTripleEven (array) {
    return array
        .filter((num) => num % 2 === 0)                 //selects each even number array item
        .map((num) => num * 3)                          //multiplies each even number by 3
        .reduce((total, current) => total + current);   //add all the array items together
};


//FOR EACH METHOD
const eachItem = arr.forEach((element, index, array) => {           //iterates over the array and applies the callback fn to each element
    console.log(`${element} is at index ${index} of ${array}`);     //does not create a new array and does not return a value
});                                                                 //It mutates the original array

const each = arr.forEach((element) => {
    console.log(element * 2);
});


//INDEX-OF, LAST-INDEX-OF AND INCLUDES METHOD
let arrr = [1, 0, false, 1];

console.log( arrr.indexOf(false) ); // 2, indexOf returns the index position of the specified array element.

console.log( arrr.lastIndexOf(1)); // 3, lastIndexOf returns the index position of the specified array element starting from behind.

console.log( arrr.includes(0) ); // true, includes looks for the specified array element, and returns true if found, it uses (===).


//SORT
let mix = [1, 39, 15, 2];              //sort arranges the element in order, they are sorted by default as string

let fix = mix.sort((a, b) => a - b);   //callback fn fixes that

console.log(fix);




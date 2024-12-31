function sumOfTripleEven (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            const tripleEven = array[i] * 3;
            
            sum += tripleEven;
        }
    }
    return sum;
}


//MAP METHOD
function addOne (num) {
    return num + 1;
};

const arr = [1, 2, 3, 4, 5];
const mapArr = arr.map(addOne);  //map iterates through the array and 
                                 //applies the callback function to each array element 
                                 //produces a new array without altering the original array.

console.log(arr);       //[1, 2, 3, 4, 5] (unchanged)
console.log(mapArr);    //[2, 3, 4, 5, 6] (new array)
//OR
const arr1 = [1, 2, 3, 4, 5];
const mapArr1 = arr.map((element) => element + 1);

console.log(arr1);      //[1, 2, 3, 4, 5] (unchanged)
console.log(mapArr1);   //[2, 3, 4, 5, 6] (same as first method)


//FILTER METHOD
//also iterates through the loop and applies the callback function to each array element
//but instead it returns the original value, only if the callback function returns true
function isOddNo (num) {
    return num % 2 !== 0;
}

const arrD = [1, 2, 3, 4, 5];   
const filt = arrD.filter(isOddNo);  //filter iterates through the array and
                                    //applies the callback function to each array element
                                    //returns the original value, only if the callback function returns true

console.log(arrD);  //[1, 2, 3, 4, 5] (unchanged)
console.log(filt);  //[1, 3, 5] (filters odd)
//OR
const arrD1 = [1, 2, 3, 4, 5];
const filt1 = arrD1.filter((element) => element % 2 !== 0);

console.log(arrD1);  //[1, 2, 3, 4, 5] (unchanged)
console.log(filt1);  //[1, 3, 5] (same as first method)

//REDUCE METHOD
//It iterates through the array and it has two arguments and is used with an operator in the callback function
//the first argument is the accumulator (total) and is the intialValue or the first element of array if no initialValue is provided
//second argument is the second operand, it is the current value which is being iterated on
//an initialValue is set as the second argument (after the callback fn), when we don't want the initial value set to the first element of the array

const set = [4, 5, 6, 7, 8, 9];
const multiple = set.reduce((one, two) => one * two, 5);    //without initialValue
const multiples = set.reduce((one, two) => one * two, 5)    //with initialValue, the total after callback fn is multiplied by 5
const summation = set.reduce((first, second) => first + second);    

console.log(set);
console.log(multiple);
console.log(summation);
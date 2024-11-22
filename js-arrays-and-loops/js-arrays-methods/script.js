//ARRAY METHODS
const cars = ["Toyota", "Lexus", "Honda"];

//ARRAY LENGTH
let array_length = cars.length; //this gets the length of the array ie number of elemets
console.log(array_length);

//ARRAYS TO STRING
let a_string = cars.toString(); //this converts the array to a string
console.log(a_string);

//ARRAYS AT()
let element_at = cars.at(2); //This gets the indexed (third) element of the array
console.log(element_at);

//ARRAY JOIN
let combine = cars.join(" * "); //this converts the elements to string and also specifies the seperator
console.log(combine);

//ARRAY POP()
let remove = cars.pop() //this removes and outputs the last element of the array, it returns the last element
console.log(remove);

//ARRAY PUSH
let addon = cars.push("Mercedes Benz"); //this adds a new element to the end of an array, it returns the array new length
console.log(addon);

//ARRAY SHIFT
let shift = cars.shift(); //this removes and outputs the first element of the array and shifts other elements to a lower index
console.log(shift);

//ARRAY UNSHIFT 
let unshift = cars.unshift("Mazda"); //this adds a new element at the beginning of the array, it returns the new array length
console.log(unshift);

//ARRAY DELETE
delete cars[0] //delete indexed element but also leaves a hole which was filled by the deleted element at the specified index.
console.log(cars);

//ARRAYS CONCATENATION (MERGING ARRAYS)
let colors = ["Red", "Black", "Green"];
let merge = cars.concat(colors); // this merge or combines multiple arrays from end to end(first array to the last)
console.log(merge);

//MERGING THREE ARRAYS
let app = ["clean", "dirty", "dusty"]
let merge2 = cars.concat(colors, app); //mergers the three arrays from end to end
console.log(merge2);

//ARRAY CONCATENATION AS AN ARGUMENT
let merge3 = cars.concat("end"); //merges the element(argument) to the end of the array
console.log(merge3);

//ARRAY COPY WITHIN
cars.copyWithin(0, 2); //copys the element at index 2 to index 0
console.log(cars);

//ARRAYS FLAT
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr);

//ARRAY SPLICE
cars.splice(2, 0, "Lemon", "Kiwi",); //adds new elements to an array in respect to the parameters
                                     //the first parameter determines the position the new elements should be added
                                     //the second parameter determines how many elements should be removed
console.log(cars);

//ARRAY SPLICE TO REMOVE ELEMENTS
cars.splice(0, 1) //the first parameter defines position where new elements should be added
                  //the second parameter defines the number of elements to be removed
console.log(cars);

//ARRAY SPLICE WITHOUT ALTERING THE ORIGINAL ARRAY
cars.toSpliced(0, 1);
console.log(cars);

//ARRAY SLICE
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruits.slice(1); //this slices out an element behind the indexed and places the rest in a new array
console.log(citrus);
let citruse = fruits.slice(1, 3); //slices out element from the first to the end argument but doesn't include the end arg.
console.log(citruse); 

let first = new Object();
// "object constructor" syntax

let second = {};
// "object literal" syntax

let user = {            //creates object
    name: "Donald",     //by key "name" stores value "Donald"
    age: 20,            //by key "age" stores value 20
};


//ACCESSING PROPERTY VALUES
console.log(user.name);     //outputs John
console.log(user.age);      //outputs 20

//ADDING A PROPERTY
user.isAdmin = true;    //adds key "isAdmin" which stores value "true"
                        //value can contain anything, here it is a boolean.



//DELETING A PROPERTY
delete user.isAdmin;    //deletes the specified property name with its value.


//MULTI-WORD PROPERTY NAME
user = {                //reassigns the object properties
    name: "Donald",
    age: 20,
    "is admin": true,   //multi-word property name must be quoted.
}


//SQUARE BRACKETS
//ADDING A MULTI-WORD PROPERTY 
//user.likes bird = true;       //dot notation won't work when adding a multi-word property.
user["likes bird"] = true;      //multi-word property name must be quoted in a square bracket.

alert(user["likes bird"]);      //alerts "true".

delete(user["likes bird"]);     //deletes the multi-word property specified in the square bracket.



//OBJECTS AND VARIABLES
let key = "is admin";

user[key] = true;
//same as user["is admin"] = true;
console.log(user[key]);     //outputs "true"

let answer = prompt("What do you want to know about the user", "property name");
alert (user[answer]);   //outputs: "John" (if enter 'name'), "30" (if enter 'age')


//COMPUTED PROPERTIES
let stray = prompt("What is my status", "Single");

let newUser = {
    [stray]: 4
}

alert (user.children);      //outputs 4 (if stray = "children")

let otherUser = {
    [stray + 'born']: 4     //otherUser.childrenborn = 4
}


//PROPERTY VALUE SHORTHAND
function makeMember (name, age) {
    return {
        name: name,
        age: age,
        // ...other properties
    }
}
let member = makeMember ("Ronaldo", 39);
alert (member.name);

function getMember (name, age) {
    return {
        name,   //same as name:name
        age     //same as age:age
    }
}
let get = getMember("Messi", 37);
alert(get.name);    //outputs "Messi"


//PROPER NAMES LIMITATIONS
//a variable name can't be a language-reserved word e.g for, let, return, etc
//In objects such limitations do not exist
let noLimit = {
    for: 1,     //"for" can be used as a property name in an object scope
    let: 2,     //"let" can be used as a property name in an object scope
    while: 3,   //"while" can be used as a property name in an object scope
    return: 4   //"return" can be used as a property name in an object scope
}

alert(noLimit["for"] + noLimit.let + noLimit.while + noLimit.return);  //10

//NUMBERS AS PROPERTY NAMES
let game = {
    0: "time",
    2: "stealth"
}
console.log(game[0]);    //"time"
console.log(game["0"]);  //"time" (same property value)


//"IN" OPERATOR, PROPERTY EXISTENCE TEST
let test = {}
console.log (test.cars === undefined);  //"true" b/c "cars" is not a defined key in the object "test"

let cars = {
    brand: "BMW",
    color: "Black",
    type: "Wagon"
}

console.log ("brand" in cars);  //true, cars.brand exists
console.log ("length" in cars);    //false, cars.length does not exist

let choice = "color";
console.log (choice in cars);   //true, cars.color exists


//THE FOR ... IN LOOP
for (let key in cars) {
    console.log( key );
    //lists out all the keys in the object; brand, color and type

    console.log( cars[key] )
    //list out all the property values in the object; BMW, Black, Wagon
}


//ORDER LIKE AN OBJECT
let league =  {
    3: "Chelsea",
    4: "Bournemoth",
    1: "Liverpool",
    2: "Notthingham"
}

for(let position in league) {
    console.log( position );  //1, 2, 3, 4.
    console.log( league[position] ); //Liverpool, Nottingham, Chelsea, Bournemouth
}

league = {
    "+3": "Chelsea",
    "+4": "Bournemoth",
    "+1": "Liverpool",
    "+2": "Notthingham"
}

for (let position in league) {
    console.log( +position );   //3, 4, 1, 2.
    console.log( league[position] ); //Chelsea, Bournemoth, Liverpool, Nothingham
};
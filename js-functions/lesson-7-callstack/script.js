function add7 (a) {
    return a + 7;
};
add7 (10);

let multiply = function (c, d) {
    return c * d;
}
multiply (2, 4);



let answer = prompt("ENTER A NUMBER, PLEASE!","number");
for (let i = 1; i <= answer; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
    console.log("fizzbuzz");
    } else if (i % 3 === 0) {
        console.log("fizz");
    } else if (i % 5 === 0) {
        console.log("buzz");
    } else {
        console.log(i);
    }
}
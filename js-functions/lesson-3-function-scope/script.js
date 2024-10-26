const x = 1; // General Scope || Outer variable - variables declare outside a function, it can be called by any function 
console.log(x);

function a() {
    const y = 2;  // Function scope || Local varaible - varaiables declared inside a function, it can be called upon by only it's function
    output(y);
    console.log(y);
}
a();

function b() {
    const z = 3; //Another function scope || Local variable, NOTE local variable have a higher predecence than outer variables
    output(z);
    console.log(z);
}
b();

function output(value) {
    const para = document.createElement('p');
    document.body.appendChild(para);
    para.textContent = `Value: ${value}`;
}
output(value);

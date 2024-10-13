// const is used  fixed value which do not  change anyway
const subname = "science";
// subname = "maths";
console.log(subname);
console.log("bunty");

// let is used to changeable/mutable vales
let name = "Raghavendra M";
name = "maths";
console.log(name);

//var is not used because issue of funtional scope and block scope
var address = "banglore";
address = "hubli";
console.log(address);

console.table([name, subname, address]);

// difference between var  and let and y LET is used rather then VAR
// In JavaScript, var and let are both used to declare variables, but they have some important differences:

// Scope:

// var: Has function scope, meaning it is accessible within the function it is declared in. If declared outside of a function, it becomes globally scoped.
// let: Has block scope, meaning it is only accessible within the block (e.g., {}) it is declared in, such as within loops, conditionals, or functions.

// Hoisting:

// var: Variables declared with var are hoisted to the top of their scope and initialized with undefined. This means you can use the variable before its declaration without getting an error, but its value will be undefined until the declaration is reached.
// let: Variables declared with let are also hoisted, but they are not initialized. This means accessing them before their declaration results in a ReferenceError.
// Re-declaration:

// var: Allows the same variable to be declared multiple times within the same scope without causing an error.
// let: Does not allow the same variable to be declared more than once in the same scope, which helps prevent errors from accidental redeclarations.
// Global Object Property:

// var: When declared in the global scope, var adds the variable as a property of the global object (window in browsers).
// let: Does not add the variable as a property of the global object when declared in the global scope.
// Example:

// javascript
// Copy code
// function testVar() {
//   var x = 1;
//   if (true) {
//     var x = 2;  // same variable, because var is function-scoped
//     console.log(x);  // 2
//   }
//   console.log(x);  // 2 (because var is function-scoped)
// }

// function testLet() {
//   let y = 1;
//   if (true) {
//     let y = 2;  // different variable, because let is block-scoped
//     console.log(y);  // 2
//   }
//   console.log(y);  // 1 (because let is block-scoped)
// }

// testVar();
// testLet();
// In summary, let provides better control over variable scope and avoids some of the pitfalls associated with var. Therefore, it's generally recommended to use let over var for variable declarations in modern JavaScript.

// let score = 33;
// console.log(typeof score); //number
// score = "33"; //make itra string
// console.log(typeof score); //string

// //to the value from String to Number use Number()

// let newscore = Number(score);
// console.log(typeof newscore);

// let name = "bunty2";
// let name1 = Number(name);
// console.log(typeof name1);
// console.log(name1);

//conversion from number to string  and viceversa
let score = null;
let stringtonumber = Number(score);
console.log("====================================");
console.log(typeof stringtonumber);
//if u want to convert the string value which also has alphabets  ex 123ui then the value displayed as NaN= not a number and value is null it is NaN
console.log("stringtonumber " + stringtonumber);
console.log("====================================");
let numbertostring = String(score);
console.log("====================================");
console.log(typeof numbertostring);
//console.log(numbertostring);
console.log("====================================");

//string to bollean
let boe = " bunty";
let boe1 = Boolean(boe);
console.log(typeof boe1);
console.log(boe1);
// " "= false,  " hi "= true,

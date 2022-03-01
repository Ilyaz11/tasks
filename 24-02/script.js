
/*********** И (&&) ************/
//true + true = true
const number = 50;
const firstNum = 40;
const secondNum = 60;
const access = number > firstNum && number < secondNum;
console.log(access);

//true + false = false
const a = 3;
const b = 1;
console.log(a > 0 && b < 0);

//false + false = false
const min = 10;
const sec = 60;
const hour = 9;
const result = min >= sec && min <= hour;
console.log(result);

/*********** || ************/
const x = 20;
const y = 10;
const z = x !== 20 || y !== 11;
console.log(z);

let day = 7;
week = 4;
let result1 = day !== 12 || week !== 4;
console.log(result1);

const age = 18;
const estimated_age = 15;
console.log(age >= 21 || age <= estimated_age);


let num1 = 10;
num1 = ++num1;
num1 = ++num1;
num1 = --num1;
console.log(num1);



let num = 47;
num += 7;
num -= 18;
num *= 10;
num /= 15;
alert(num);


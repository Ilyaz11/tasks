
/*********** И (&&) ************/
const number = 50;
const firstNum = 40;
const secondNum = 60;
const access = number > firstNum && number < secondNum;
console.log(access);

const a = 3;
const b = 1;
console.log(a > 0 && b < 0);

const min = 10;
const sec = 60;
const hour = 9;
const result = min >= sec && min <= hour;
console.log(result);

/*********** || ************/
const x = 20;
const y = 10;
const z = x != 20 || y != 11;
console.log(z);

let day = 7;
week = 4;
let result1 = day !== 12 || week !== 4;
console.log(result1);

const age = 18;
const estimated_age = 15;
console.log(age >= 21 || age <= estimated_age);


let num = 10;
result1 = ++num;
result2 = ++num;
result3 = --num;
console.log(result1);
console.log(result2);
console.log(result3);


let m = 47;
m += 7;
alert(m);

let s = 47;
s -= 18;
alert(s);

let q = 47;
q *= 10;
alert(q);

let k = 47;
k /= 15;
alert(k);
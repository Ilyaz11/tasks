const userSalaries = {
    Ella: 20000,
    Sophia: 20000,
    Ellie: 15000
};

delete userSalaries.Ellie;
console.log(userSalaries);

const abc = {
    a: 5,
    b: 6,
    c: 10
};
let result = abc.a + abc.b + abc.c;
console.log(result);

let data = false;
let total = data === true ? 3 : 5;
console.log(total);
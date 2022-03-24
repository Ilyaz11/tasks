let k = 0;
let a = parseFloat(prompt('Введите число'));
while (a !== 99) {
    k = k + 1;
    a = parseFloat(prompt('Введите число'));
}
alert('кол-во чисел - ' + k);



let x = 0;
let sum = 0;
let total = Number(prompt('Введите число'));
while (total !== 999) {
    x = x + 1;
    sum = sum + total;
    total = Number(prompt('Введите число'));
}
alert('кол-во чисел - ' + x);
alert('сумма = ' + sum);

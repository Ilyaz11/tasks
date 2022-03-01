/********** 1 **********/
let x = 10;
if(x === 7){
    alert('Верно');
} else{
    alert('Неверно');
}

/********** 2 **********/
let a = 2;
let b = 4;
if(a <= 1 && b >= 3){
    alert(a + b);
} else{
    alert(a - b);
}

/********** 3 **********/
let time = 47;
if(time >= 0 && time <= 14){
    alert('В первую четверть');
}
if(time >= 15 && time <= 29){
    alert('Во вторую четверть');
}
if(time >= 30 && time <= 44){
    alert('В третью четверть');
}
if(time >= 45 && time <= 59){
    alert('В четвертую четверть');
}else{
    alert('Значение не попадает в диапазон от 0 до 59');
}

/********** 4 с короткой записью **********/

let test = true;
let result = test !== true ? 'Верно' : 'Неверно';
alert(result);

/********** 4 с длинной записью **********/
let test1 = false;
if(test1 !== true){
    alert('Верно');
}else{
    alert('Неверно');
}











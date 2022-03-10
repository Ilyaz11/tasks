var arr = [1,2,3,11,4,7,8,10,12,18,9,1,5,17];
let i;
for (i = 0; i < arr.length; i++){
    if(arr[i] > 0 && arr[i] < 10){
        console.log(arr[i]);
    }
}



/***** 2 *****/
var num = [1,2,5,6,88,5];
var sum = 0;
for(i = 0; i < arr.length; i++){
    sum += arr[i];
}
console.log(sum);

/****** 4 ******/
const num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
for(i = 2; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

/****** 5 ******/
const arr1 = [];
for(i = 0; i < 10; i++) {
    arr1[i] = 'x';
}
console.log(arr1);
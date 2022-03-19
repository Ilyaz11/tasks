let arr = [-5,10,5,55,-1,22,-4,36,-45];
let result = arr.reduce(function (sum, elem) {
    if(elem >= 0){
        return sum + elem;
    }else {
        return sum;
    }
});

console.log(result);

function repayArray(value, length) {
    let arr = [];
    for(let i = 0; i < length; i++) {
        arr.push(value);
    }
    return arr;
}

console.log(repayArray('x', 3));






















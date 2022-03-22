const theFunc = delay => {
    alert('Hello after ' + delay + ' seconds');
};
setTimeout(theFunc, 4 * 1000, 4);
setTimeout(theFunc, 8 * 1000, 8);

const mul = (n, m) => n * m;
console.log(mul(4, 5));




const Factorial = (num) => {
    let init = 1;
    for(let i = 1; i <= num; i++){
        init *= i;
    }
    return init;
}
console.log(Factorial(7));

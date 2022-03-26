

const inferenceAge = () => {
    const a = parseFloat(prompt('Введите свой год рождения'));
    const b = parseFloat(prompt('Введите текущий год'));
    let age  = b - a;
    return `Вам ${age} лет`;
}

alert(inferenceAge());



let counter = 0;
const intervalId = setInterval(() => {
    console.log('Hello World');
    counter += 1;
    if (counter === 5) {
        console.log('Done');
        clearInterval(intervalId);
    }
}, 1000);
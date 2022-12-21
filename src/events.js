import calculator from "./calculator.js";

let { total, sum, rest, multiply, divide, reset } = calculator();
let sign = '';
let listOfNumbers = [];

//RENDER
//Print numbers and signs 
const printNumber = (num) => {
    let totalTxt = document.getElementById('txt-total');
    totalTxt.innerHTML === '0' ? totalTxt.innerHTML = num : totalTxt.innerHTML += num;
};

//Reset screen to 0
const printReset = () => {
    let totalTxt = document.getElementById('txt-total');
    totalTxt.innerHTML = 0;
};


//EVENTS
//Reset 
let resetScreen = document.getElementById('reset');
resetScreen.addEventListener('click', () => {
    printReset();
    //reset(); bug
    total = 0;
    listOfNumbers = [];
});

//Get sign
const operator = document.querySelector('.ct-operators');
operator.addEventListener('click', (e) => {
    if (e.target.classList.contains('ct-operator')) {
        sign = e.target.id;
    };
});

//Get total 
const equalOperator = document.getElementById('equalOperator');
equalOperator.addEventListener('click', function () {
    getOperation(listOfNumbers, sign);
    listOfNumbers = [total];
    printReset();
    printNumber(total);
});

//Print number
let numberId = document.querySelector('.ct-numbers');
numberId.addEventListener('click', (e) => {
    if (e.target.classList.contains('ct-number')) {
        printNumber(e.target.id);
        fillOperation(parseInt(e.target.id));
    };
});

//Print operator sign
let operatorId = document.querySelector('.ct-operators');
operatorId.addEventListener('click', (e) => {
    if (e.target.classList.contains('ct-operator')) {
        printNumber(e.target.id);
        fillOperation(e.target.id);
    };
});


const disableSigns = () => {
    let totalTxt = document.getElementById('txt-total');
}

//Fill array listOfNumbers
function fillOperation(value) {
    listOfNumbers.push(value);
};

//Get operation
function getOperation(array, sign) {
    let index = array.indexOf(sign)
    let firstNum = array.splice(0, index).join(''); 
    total = parseInt(firstNum);
    let secondNum = array.splice(1).join(''); 

    array[0] === '+' ? total = sum(total, parseInt(secondNum)) :
        array[0] === '-' ? total = rest(total, parseInt(secondNum)) :
            array[0] === 'x' ? total = multiply(total, parseInt(secondNum)) :
                array[0] === '/' ? total = divide(total, parseInt(secondNum)) :
                    0;
    return total;
};



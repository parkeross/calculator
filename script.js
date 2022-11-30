//Declare variables
let valueForDisplay = '';
let firstValue = '';
let secondValue = '';
let currentOperator = '';
const output = document.querySelector('.outputText');
addNumButtonListeners();
addOpEventListeners();
addEvalEventListener();
addClearEventListener();


console.log(operate(2,3,'+'));
console.log('+'==='+');


//Add event listener for the operators
function addOpEventListeners(){
    const buttons = document.querySelectorAll('.operator');
    buttons.forEach(button => {button.addEventListener('click',()=>{clearOutput(button.textContent)})});
};

//Add event listeners to all buttons
function addNumButtonListeners(){
    const buttons = document.querySelectorAll('.num');
    buttons.forEach(button => {button.addEventListener('click',()=>{displayValue(button.textContent)})});
};

//Add event listener for '='
function addEvalEventListener(){
    const button = document.querySelector('.eval');
    button.addEventListener('click',evaluate);
};
//Add event listener for 'clear everything'
function addClearEventListener(){
    const button = document.querySelector('.clear');
    button.addEventListener('click',clearOutput);
};


//Evaluate current equation
function evaluate(){
    secondValue = output.textContent;
    output.textContent=operate(parseInt(firstValue),parseInt(secondValue), currentOperator);
    firstValue = output.textContent;
};

//Clear text ouput and prep for operation to be performed
function clearOutput(operator=''){
    firstValue = output.textContent;
    output.textContent='';
    valueForDisplay='';
    currentOperator = operator;
};

//Display value
function displayValue(a){
    valueForDisplay+=a;
    output.textContent = valueForDisplay;
};

//Operate function
function operate(a,b,operator){
    if (operator === '+'){
        return add(a,b);
    }
    else if (operator === '-'){
        return subtract(a,b);
    }
    else if (operator === 'x'){
        return multiply(a,b);
    }
    else if (operator === '/'){
        return divide(a,b);
    };
};

//Basic calc functions
function add(a,b){
    return a+b;
};

function subtract(a,b){
    return a-b;
};

function multiply(a,b){
    return a*b;
};

function divide(a,b){
    return a/b;
};
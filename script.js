let displayValue = '';


//Operate function
function operate(a,b,operator){
    if (operator === '+'){
        add(a,b);
    }
    else if (operator === '-'){
        subtract(a,b);
    }
    else if (operator === 'x'){
        multiply(a,b);
    }
    else if (operator === '/'){
        divide(a,b);
    }
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
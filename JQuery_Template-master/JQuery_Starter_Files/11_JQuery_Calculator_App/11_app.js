// Get the HTML Elements
let firstNumberElement = $('#firstNumber');
let secondNumberElement = $('#secondNumber');
let operatorButton =  $('#operator');
let equalsButton =  $('#equals-button');
let resultButton =  $('#result-button');
let plusButton =  $('#plus-button');
let minusButton =  $('#minus-button');
let divButton =  $('#divide-button');
let mulButton =  $('#multiply-button');
let clearButton =  $('#clear-button');

// Click on Minus Button
minusButton.addEventListener('click',function() {
    operatorButton.text($(this.text));
});

// Click on Plus Button
plusButton.addEventListener('click',function() {
    operatorButton.text($(this.text));
});

// Click on Divide Button
divButton.addEventListener('click',function() {
    operatorButton.textContent = divButton.textContent;
});

// Click on Mul Button
mulButton.addEventListener('click',function() {
    operatorButton.textContent = mulButton.textContent;
});

// Click o Equals Button
equalsButton.addEventListener('click',function() {
    let firstNumber = firstNumberElement.value;
    let secondNumber = secondNumberElement.value;
    let operator = operatorButton.textContent;
    let result = 0;
    if(firstNumber !== '' && secondNumber !== ''){
        firstNumber = Number(firstNumber);
        secondNumber = Number(secondNumber);
        switch(operator){
            case '+':
                result = firstNumber + secondNumber;
                break;
            case '-':
                result = firstNumber - secondNumber;
                break;
            case '*':
                result = firstNumber * secondNumber;
                break;
            case '/':
                result = firstNumber / secondNumber;
                break;
            default:
                result = 0;
                break;
        }
        resultButton.textContent = result.toString();
    }
});

// Clear Button
clearButton.addEventListener('click',function() {
    firstNumberElement.value = '';
    secondNumberElement.value = '';
    operatorButton.textContent = '+';
    resultButton.textContent = 'RESULT';
});
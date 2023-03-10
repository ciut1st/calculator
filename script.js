const currentDisplay = document.querySelector('.current-number')
const previousNumber = document.querySelector('.previous-number')

const numberButton = document.querySelectorAll('.number')
const operatorButton = document.querySelectorAll('.operator')
const decimalButton = document.querySelector('.decimal')
const clearButton = document.querySelector('.clear')
const deleteButton = document.querySelector('.delete')
const equalButton = document.querySelector('.equal')

numberButton.forEach((btn) => {
    btn.addEventListener('click', () => {
        displayNumber(btn.value)
    })
})

function displayNumber(number) {

}

// Decimal button----------------------------
decimalButton.addEventListener('click', () => {
    addDecimal()
})

function addDecimal() {
    if (!firstNum.includes('.')) {
        firstNum += '.'
        currentDisplay.textContent = firstNum
    }
}
//------------------------------------------------
// Addition
function addition(firstNum, secondNum) {
    return firstNum + secondNum
}

// Substraction
function substraction(firstNum, secondNum) {
    return firstNum - secondNum
}

// Multiplication
function multiplication(firstNum, secondNum) {
    return firstNum * secondNum
}

// Division
function division(firstNum, secondNum) {
    return firstNum / secondNum
}

// Operation
function operate(firstNum, operator, secondNum) {
    if (operator === '+') {
        return addition(firstNum, secondNum)
    } else if (operator === '-') {
        return substraction(firstNum, secondNum)
    } else if (operator === '*') {
        return multiplication(firstNum, secondNum)
    } else if (operator === '/') {
        return division(firstNum, secondNum)
    } else {
        return "Error"
    }
}

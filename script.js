let currentNum = ""
let previousNum = ""
let operator = ""

const currentDisplayNumber = document.querySelector('.current-number')
const previousDisplayNumber = document.querySelector('.previous-number')

const numberButton = document.querySelectorAll('.number')
const operatorButton = document.querySelectorAll('.operator')
const decimalButton = document.querySelector('.decimal')
const clearButton = document.querySelector('.clear')
const deleteButton = document.querySelector('.delete')
const equalButton = document.querySelector('.equal')

numberButton.forEach((btn) => {
    btn.addEventListener('click', () => {
        console.log(btn.value)
    })
})

operatorButton.forEach((btn) => {
    btn.addEventListener('click', () => {
        console.log(btn.id)
    })
})

equalButton.addEventListener('click', () => {
    if (currentNum != "" && previousNum != "") :
    operate()
})

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

// Clear button
function clearBtn() {
    currentNum = ""
    previousNum = ""
    operator = ""
    currentDisplayNumber.textContent = "0"
    previousDisplayNumber.textContent = ""
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

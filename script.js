let currentNum = ""
let previousNum = ""
let operator = ""

const currentDisplayNumber = document.querySelector('.current-number')
const previousDisplayNumber = document.querySelector('.previous-number')

const numberButton = document.querySelectorAll('.number')
const operatorButton = document.querySelectorAll('.operator')
const clearButton = document.querySelector('.clear')
const equalButton = document.querySelector('.equal')

// Buttons functionality -----------------
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
    if (currentNum != "" && previousNum != "") {
        operate()
    }
})

clearButton.addEventListener('click', clearBtn())
//------------------------------------------

// Addition
function addition(currentNum, previousNum) {
    return currentNum + previousNum
}

// Substraction
function substraction(currentNum, previousNum) {
    return currentNum - previousNum
}

// Multiplication
function multiplication(currentNum, previousNum) {
    return currentNum * previousNum
}

// Division
function division(currentNum, previousNum) {
    return currentNum / previousNum
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
function operate(currentNum, operator, previousNum) {
    if (operator === '+') {
        return addition(currentNum, previousNum)
    } else if (operator === '-') {
        return substraction(currentNum, previousNum)
    } else if (operator === '*') {
        return multiplication(currentNum, previousNum)
    } else if (operator === '/') {
        return division(currentNum, previousNum)
    } else {
        return "Error"
    }
}

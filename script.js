const numberButton = document.querySelectorAll('.number')
const operatorButton = document.querySelectorAll('.operator')
const decimalButton = document.querySelector('.decimal')
const clearButton = document.querySelector('.clear')
const deleteButton = document.querySelector('.delete')
const equalButton = document.querySelector('.equal')

// Addition
function addition(a, b) {
    return a + b
}

// Substraction
function substraction(a, b) {
    return a - b
}

// Multiplication
function multiplication(a, b) {
    return a * b
}

// Division
function division(a, b) {
    return a / b
}

// Operation
function operate(a, operator, b) {
    if (operator === '+') {
        return addition(a, b)
    } else if (operator === '-') {
        return substraction(a, b)
    } else if (operator === '*') {
        return multiplication(a, b)
    } else if (operator === '/') {
        return division(a, b)
    } else {
        return "Error"
    }
}

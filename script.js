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


let a = parseFloat(prompt("Pick a number: "))
    let b = parseFloat(prompt("Pick another number: "))
    let operator = prompt("Pick an operator: ")
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

console.log(operate(a, operator, b))
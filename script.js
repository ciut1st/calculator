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
    // Number-------------------
numberButton.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        handleNumber(e.target.textContent)
    })
})

function handleNumber(number) {
    if (previousNum !== "" && currentNum !== "" && operator === "") {
        previousNum = ""
        currentDisplayNumber.textContent = currentNum
    }
    if (currentNum.length <= 11) {
        currentNum += number
        currentDisplayNumber.textContent = currentNum
    }
}
    //-------------------------
    // Operator---------------------
operatorButton.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        handleOperator(e.target.textContent)
    })
})

function handleOperator(op) {
    if (previousNum === "") {
        previousNum = currentNum
        operatorCheck(op)
    } else if (currentNum === "") {
        operatorCheck(op)
    } else {
        operate()
        operator = op
        currentDisplayNumber.textContent = "0"
        previousDisplayNumber.textContent = previousNum + " " + operator
    }
}

function operatorCheck(text) {
    operator = text;
    previousDisplayNumber.textContent = previousNum + " " + operator;
    currentDisplayNumber.textContent = "0";
    currentNum = "";
  }
    //--------------------------
equalButton.addEventListener('click', () => {
    if (currentNum != "" && previousNum != "") {
        operate()
    }
})

clearButton.addEventListener('click', clearBtn)
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
function operate() {
    previousNum = Number(previousNum)
    currentNum = Number(currentNum)

    if (operator === "+") {
        previousNum = addition(currentNum, previousNum)
      } else if (operator === "-") {
        previousNum = substraction(currentNum, previousNum)
      } else if (operator === "*") {
        previousNum = multiplication(currentNum, previousNum)
      } else if (operator === "/") {
        if (currentNum <= 0) {
          previousNum = "Error";
          displayResults()
          return
        }
        previousNum = division()
      }
      previousNum = roundNumber(previousNum)
      previousNum = previousNum.toString()
      displayResults()
}

function roundNumber(num) {
    return Math.round(num * 100000) / 100000
  }
  
  function displayResults() {
    if (previousNum.length <= 11) {
      currentDisplayNumber.textContent = previousNum
    } else {
      currentDisplayNumber.textContent = previousNum.slice(0, 11) + "..."
    }
    previousDisplayNumber.textContent = ""
    operator = ""
    currentNum = ""
  }
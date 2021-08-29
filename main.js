const customNumber = document.getElementById('custom-number')
const customNumberMinVal = parseInt(customNumber.min, 10)
const customNumberMaxVal = parseInt(customNumber.max, 10)
const customNumberWarning = document.getElementById('warning-custom-number')

const slowedNumbers = document.getElementById('slowed-numbers')
const slowedNumbersMinVal = parseInt(slowedNumbers.min, 10)
const slowedNumbersMaxVal = parseInt(slowedNumbers.max, 10)
const slowedNumbersWarning = document.getElementById('warning-slowed-numbers')

const delayIncrement = document.getElementById('delay-increment')
const delayIncrementMinVal = parseInt(delayIncrement.min, 10)
const delayIncrementMaxVal = parseInt(delayIncrement.max, 10)
const delayIncrementWarning = document.getElementById('warning-delay-increment')

const animBtn = document.getElementById('animate-btn')
const numberDisplay = document.getElementById('number-display')

let counterVal = parseInt(numberDisplay.innerHTML, 10)
let numbersRange = []
let delay = 0
let slowedNums = 0

animBtn.addEventListener('click', btnClick)

function btnClick() {
    // disable button click until action is resolved
    animBtn.classList.add('disabled')
    
    // grab number input value
    let numberInputVal = parseInt(customNumber.value, 10)
    // if input value is valid
    if(numberInputVal >= customNumberMinVal && numberInputVal <= customNumberMaxVal) {
        // hide number warning
        customNumberWarning.classList.add('hidden')
        // call animate func
        animateCount(counterVal, numberInputVal)
    } else {
        // show number warning
        customNumberWarning.classList.remove('hidden')
        // enable button click
        animBtn.classList.remove('disabled')
    }
}

function animateCount(start, end) {
    numbersRange = getRange(start, end)
    counterVal = end

    let newSlowedNums = parseInt(slowedNumbers.value, 10)
    let newDelay = parseInt(delayIncrement.value, 10)

    if(
        newSlowedNums >= slowedNumbersMinVal &&
        newSlowedNums <= slowedNumbersMaxVal &&
        newDelay >= delayIncrementMinVal &&
        newDelay <= delayIncrementMaxVal
    ) {
        slowedNumbersWarning.classList.add('hidden')
        delayIncrementWarning.classList.add('hidden')
        writeNumbers(numbersRange, newSlowedNums, newDelay)
    } else {
        slowedNumbersWarning.classList.remove('hidden')
        delayIncrementWarning.classList.remove('hidden')
        animBtn.classList.remove('disabled')
    }
}

function getRange(start, end) {
    if(start - end > 0) {
        return Array(start - end + 1).fill().map((_, index) => start - index);
    } else {
        return Array(end - start + 1).fill().map((_, index) => start + index);
    }
}

function writeNumbers(numbers, numOfSlowedNumbers, delayInc) {
    delay = numbers.length < numOfSlowedNumbers ? delay + delayInc : delay
    let currentNumber = numbers.shift().toString()
    numberDisplay.innerHTML = currentNumber
    if (numbers.length) {
        setTimeout(function() {
            writeNumbers(numbers, numOfSlowedNumbers, delayInc);
        }, delay)
    } else {
        animBtn.classList.remove('disabled')
        delay = 0
    }
}
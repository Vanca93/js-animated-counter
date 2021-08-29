const input = document.getElementById('custom-input')
const minVal = parseInt(input.min, 10)
const maxVal = parseInt(input.max, 10)
const animBtn = document.getElementById('animate-btn')
const warning = document.getElementById('warning')
const counter = document.getElementById('counter')
let counterVal = parseInt(counter.innerHTML, 10)
let numbersRange = []

animBtn.addEventListener('click', btnClick)

function btnClick() {
    animBtn.classList.add('disabled')
    validateInput()
}

function validateInput() {
    let inputVal = parseInt(input.value, 10)
    if(inputVal >= minVal && inputVal <= maxVal) {
        warning.classList.add('hidden')
        animateCount(counterVal, inputVal)
    } else {
        warning.classList.remove('hidden')
        animBtn.classList.remove('disabled')
    }
}

function animateCount(start, end) {
    numbersRange = getRange(start, end)
    writeNumbers(numbersRange)

    counterVal = end
}

function getRange(start, end) {
    if(start - end > 0) {
        return Array(start - end + 1).fill().map((_, index) => start - index);
    } else {
        return Array(end - start + 1).fill().map((_, index) => start + index);
    }
}

function writeNumbers(numbers) {
    let currentNumber = numbers.shift().toString()
    counter.innerHTML = currentNumber
    if (numbers.length) {
        setTimeout(function() {
            writeNumbers(numbers);
        }, 0)
    } else {
        animBtn.classList.remove('disabled')
    }
}
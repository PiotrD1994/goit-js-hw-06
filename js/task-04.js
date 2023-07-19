const valuePage = document.querySelector("#value")
const buttonValueUp = document.querySelector('[data-action="decrement"]')
const buttonValueDown = document.querySelector('[data-action="increment"]')

let counterValue = 0

function updateCounterValue(value) {
    counterValue = value;
    valuePage.textContent = counterValue
}

function valueUP(){
  let newValue = counterValue - 1
  updateCounterValue(newValue)
}
function valueDown(){
    let newValue = counterValue + 1
    updateCounterValue(newValue)
}
buttonValueUp.addEventListener("click", valueUP)
buttonValueDown.addEventListener("click", valueDown)

updateCounterValue(counterValue)
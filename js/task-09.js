function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const color = document.querySelector(".color")
const changeColor = document.querySelector(".change-color")

changeColor.addEventListener("click", changeColorFunction)

function changeColorFunction() {
const newColor = getRandomHexColor()
document.body.style.backgroundColor = newColor
color.textContent = newColor
}
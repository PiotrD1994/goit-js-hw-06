const fontSizeSet = document.querySelector("#font-size-control")
const fontSize = document.querySelector("#text")

function fontSizeChange() {
    const newFontSize = fontSizeSet.value + "px"
    fontSize.style.fontSize = newFontSize
}

fontSizeSet.addEventListener("input", fontSizeChange)
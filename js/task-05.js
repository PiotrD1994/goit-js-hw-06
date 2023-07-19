const nameInput = document.querySelector("#name-input")
const nameOutput = document.querySelector("#name-output")


function checkName() {
    const name = nameInput.value
    
    if(name === "") {
    const name = nameInput.value
    nameOutput.textContent = "Anonymous"
} else {
    nameOutput.textContent = name
}}

nameInput.addEventListener("input", checkName)
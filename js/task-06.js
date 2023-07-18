const validationInput = document.querySelector("#validation-input")
const validationLength = validationInput.getAttribute("data-length")
function validateLenght(){
    if(validationInput.value.length === validationLength) {
        validationInput.classList.remove("invalid")
        validationInput.classList.add("valid")
    } else {
        validationInput.classList.add("invalid")
        validationInput.classList.remove("valid")
    }
}
validationInput.addEventListener("blur", validateLenght)
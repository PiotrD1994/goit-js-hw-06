function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
  const input = document.querySelector('#controls input')
  const createBtn = document.querySelector('[data-create]')
  const destroyBtn = document.querySelector('[data-destroy]')
  const boxes = document.querySelector('#boxes')
  
  
  
  
  function createBoxes() {
    const amount = input.value
    for (let i = 0; i < amount; i++) {
  const element = document.createElement('div')
   element.style.width = `${30 + 10 * i}px`
   element.style.height = `${30 + 10 * i}px`
   const color = getRandomHexColor()
   element.style.backgroundColor = color
   boxes.append(element)
    }
  }
  
  function destroyBoxes() {
    const createdBoxes = document.querySelectorAll('#boxes div')
    createdBoxes.forEach(box => box.remove());
  }
  
  createBtn.addEventListener('click', createBoxes)
  destroyBtn.addEventListener('click', destroyBoxes)
  
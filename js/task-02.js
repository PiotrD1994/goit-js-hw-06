const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients")
const liNodes= []

ingredients.forEach((item) => {
const listItem = document.createElement("li")
listItem.textContent = item
listItem.classList.add("item")
liNodes.push(listItem)
})

list.append(...liNodes)
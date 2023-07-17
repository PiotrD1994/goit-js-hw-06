
  const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];

  // Znajdź ul#ingredients
  const ulIngredients = document.getElementById("ingredients");

  // Iteruj przez każdy element tablicy ingredients
  ingredients.forEach((ingredient) => {
    // Utwórz element <li>
    const liElement = document.createElement("li");

    // Dodaj zawartość tekstową do elementu <li>
    liElement.textContent = ingredient;

    // Dodaj klasę "item" do elementu <li>
    liElement.classList.add("item");

    // Dodaj utworzony element <li> do listy ul#ingredients
    ulIngredients.appendChild(liElement);
  });
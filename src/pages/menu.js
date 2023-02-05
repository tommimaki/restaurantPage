const menuPage = () => {
  const content = document.querySelector("#content");

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menuContainer");

  const header = document.createElement("h1");
  header.classList.add("main-heading");
  header.innerHTML = "Paten Pizzeria Menu";
  menuContainer.append(header);

  const article = document.createElement("article");
  article.classList.add("main-content");
  menuContainer.append(article);

  const starters = document.createElement("div");
  starters.classList.add("starters-content");
  starters.innerHTML = `Starters: `;
  article.append(starters);

  const pizzas = document.createElement("div");
  pizzas.classList.add("pizza-content");
  pizzas.innerHTML = `pizzas: `;
  article.append(pizzas);

  let starterArray = [
    "Garlic Bread - Freshly baked bread brushed with garlic butter and topped with mozzarella cheese.    12e",
    "Bruschetta - Grilled bread topped with ripe tomatoes, basil, and a drizzle of balsamic glaze.     13e",
    "Mozzarella Sticks - Crispy, golden-brown mozzarella cheese sticks served with marinara sauce.     12e",
  ];

  starterArray.forEach((starter) => {
    const starterItem = document.createElement("p");
    starterItem.innerHTML = starter;
    starters.append(starterItem);
  });


  const pizzaArray = [
    "Margherita - Fresh tomato sauce, mozzarella cheese, and basil.",
    "Pepperoni - Classic pepperoni pizza with tomato sauce and mozzarella cheese.",
    "Veggie Delight - A colorful blend of bell peppers, onions, mushrooms, and olives on a tomato sauce base.",
    "BBQ Chicken - Grilled chicken, onions, and barbecue sauce.",
    "Hawaiian - Ham, pineapple, and mozzarella cheese."
    ];
pizzaArray.forEach((pizza) => {
    const pizzaItem = document.createElement('p')
    pizzaItem.innerHTML = pizza;
    pizzas.append(pizzaItem);
})








  content.append(menuContainer);


};
export { menuPage };

const homePage = () => {
  const content = document.querySelector("#content");
  const container = document.createElement("div");
  const textContainer = document.createElement("div");
  container.classList.add("container");
  textContainer.classList.add("textContainer");
  content.append(container);

  const heading = document.createElement("h1");
  heading.classList.add("main-heading");
  heading.textContent = "Paten Pizzat";
  textContainer.append(heading);

  const subtext = document.createElement("h2");
  subtext.classList.add("heading-subtext");
  subtext.textContent = `"Kuusamon rapeimmat pitsat"`;
  textContainer.append(subtext);

  const img = document.createElement("img");
  img.classList.add("home-img");
  img.src = "../assets/pizza1.jpeg";
  container.append(img);

  const descriptionText = document.createElement("p");
  descriptionText.classList.add("description-text");
  descriptionText.textContent =
   `Welcome to Paten Pizzat, a traditional Finnish pizza restaurant that specializes in serving delicious, handmade pizzas using only the freshest ingredients.`;
  textContainer.append(descriptionText);
  container.append(textContainer);

  const logoContainer = document.createElement('div')
  logoContainer.classList.add('logoContainer')
  logoContainer.textContent = 'logoja tänne tms'
  container.append(logoContainer);

  const beerLogo = document.createElement('img')
  beerLogo.src ="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0";
  logoContainer.append(beerLogo)

};

export { homePage };

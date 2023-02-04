const homePage = () => {
    const content = document.querySelector("#content");
    const container = document.createElement("div");
    const textContainer = document.createElement('div');
    container.classList.add("container");
    content.append(container);
  
    const heading = document.createElement("h1");
    heading.classList.add("main-heading");
    heading.textContent = "Paten Pizzat";
    textContainer.append(heading);
  
    const subtext = document.createElement('h2');
    subtext.classList.add('heading-subtext');
    subtext.textContent = 'Restaurant landing page';
    textContainer.append(subtext);

    const img = document.createElement('img');
    img.classList.add('home-img')
    img.src ='../assets/pizza1.jpeg'
    container.append(img)
  
    const descriptionText = document.createElement('p');
    descriptionText.classList.add('description-text');
    descriptionText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, molestias iusto iste hic assumenda nemo.'
    textContainer.append(descriptionText);

    container.append(textContainer);
  };

  export {homePage};
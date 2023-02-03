const homePage = () => {
    const content = document.querySelector("#content");
    const headingContainer = document.createElement("div");
    headingContainer.classList.add("heading-container");
    content.append(headingContainer);
  
    const heading = document.createElement("h1");
    heading.classList.add("main-heading");
    heading.textContent = "Paten Pizzat";
    headingContainer.append(heading);
  
    const subtext = document.createElement('h2');
    subtext.classList.add('heading-subtext');
    subtext.textContent = 'Restaurant landing page';
    headingContainer.append(subtext);
  
    const descriptionText = document.createElement('p');
    descriptionText.classList.add('description-text');
    descriptionText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, molestias iusto iste hic assumenda nemo.'
    headingContainer.append(descriptionText);
  };

  export {homePage};
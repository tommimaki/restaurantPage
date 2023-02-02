


const pageLoad = (content) => {
    console.log('import content in pageload' + content)
    const header = document.createElement('h1');
    header.innerHTML ='Paten Pizzeria'
    content.append(header)

    const img = document.createElement('img');
    img.src ='../assets/pizza1.jpeg'
    content.append(img)

    const article = document.createElement('article')
    article.innerHTML= `Are you tired of bland, frozen pizza that never quite lives up to your
    expectations? Look no further than our pizzeria! Our pizzas are made
    with only the freshest ingredients and are handcrafted to perfection.
    Whether you're in the mood for a classic Margherita or something more
    unique, like our BBQ Chicken Pizza, we've got you covered.`
    content.append(article);


}

export {pageLoad};


const menuPage = () => {
    const header = document.createElement('h1');
    header.classList.add("main-heading");
    header.innerHTML ='Paten Pizzeria Menyy';
    content.append(header);
    
    const img = document.createElement('img');
    img.src ='../assets/pizzamenu.jpeg'
    content.append(img)
    
    const article = document.createElement('article')
    article.classList.add('main-content')
    article.innerHTML= `menyy items here `
    content.append(article);
    }
     export {menuPage};
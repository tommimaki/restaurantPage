
const contactPage = () => {
    const header = document.createElement('h1');
    header.innerHTML ='KONTAKTI SIVU'
    content.append(header)
    
    const img = document.createElement('img');
    img.src ='../assets/pizzamenu.jpeg'
    content.append(img)
    
    const article = document.createElement('article')
    article.innerHTML= `PUHELIN NUMERO ETC `
    content.append(article);
    }
     export {contactPage};
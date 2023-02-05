
const contactPage = () => {
    const header = document.createElement('h1');
    header.classList.add("main-heading");
    header.innerHTML ='Yhteystiedot ja aukioloajat'
    content.append(header)

    const phoneNumber = "555-555-5555";
    const email = "example@example.com";
    const address = "1234 Main St, Anytown USA 12345";
    const hours = "Mon-Fri: 9am-5pm / Sat-Sun: Closed";
    
    
    
    
    const article = document.createElement('article')
    article.classList.add('contact-info')
    article.innerHTML = `
    <p>Phone: ${phoneNumber}</p>
    <p>Email: ${email}</p>
    <p>Address: ${address}</p>
    <p>Hours: ${hours}</p>
  `;
    content.append(article);

    }
     export {contactPage};
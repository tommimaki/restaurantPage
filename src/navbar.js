export default class NavBar {


    content = document.querySelector('#content');
    navbar = document.createElement('div');
    btnContainer = document.createElement('div');
    home = document.createElement('p');
    menu = document.createElement('p');
    contact = document.createElement('p');

    constructor(){
     this.createNav();   
    }


    createNav(){
    
        this.navbar.classList.add('navBar')
        this.btnContainer.classList.add('btnContainer')
        this.menu.classList.add('menuBtn');
        this.home.classList.add('homeBtn');
        this.contact.classList.add('contactBtn');

        this.menu.textContent='Menu';
        this.home.textContent='Home';
        this.contact.textContent='Contact';

        this.btnContainer.append(this.home, this.menu, this.contact);

        this.navbar.append(this.btnContainer);
        this.content.append(this.navbar)

    }
    
    
    
    
}



    
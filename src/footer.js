



const footer = () =>{
    const content = document.querySelector('#content')
    const footerContainer = document.createElement('div')
    footerContainer.classList.add('footerContainer')
    

    const info = document.createElement('div')
    info.textContent = 'made by Tommi Maki'
    
    
    
    const githubLogoContainer = document.createElement('a');
    githubLogoContainer.href = "https://github.com/tommimaki";
    const github = document.createElement('img');
    github.classList.add('github-logo');
    github.src = "../assets/github-logo.png"
    githubLogoContainer.append(github, info)
    footerContainer.append(githubLogoContainer)    
    content.append(footerContainer);
}

export {footer}
let body = document.body;
let header = document.querySelector('header');
let main = document.querySelectorAll('main');
let articles = document.querySelectorAll('article');
let parrafos = document.querySelectorAll('p');
let botondark = document.querySelector('#darkMode');
let titulos = document.querySelectorAll('h3');
let divs = document.querySelectorAll('.recent-product');
let divProfile = document.querySelector('#div-profile')

botondark.addEventListener('click' , function(){
   
    divs.forEach(divs => { divs.classList.toggle('div-profile') })
    header.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
    main.forEach(main => { main.classList.toggle('dark-mode') })
    articles.forEach(article => { article.classList.toggle('darck-mode_card')});
    parrafos.forEach(parrafo => { parrafo.classList.toggle('dark-mode_letras')});
    titulos.forEach(titulos => { titulos.classList.toggle('dark-mode_letras') });
    divProfile.classList.toggle('div-profile');
    if(header.classList|body.classList == ('dark-mode')){
        botondark.textContent = "Modo Normal"
        
    }else{
        botondark.textContent = "Modo Oscuro"
    }
    

   
})
/* articles.forEach(article => {
    article.classList.toggle('darck-mode_card')}); */
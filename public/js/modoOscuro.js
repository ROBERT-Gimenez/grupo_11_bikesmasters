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
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    main.forEach(main => { main.classList.toggle('dark-mode') })
    articles.forEach(article => { article.classList.toggle('darck-mode_card')});
    parrafos.forEach(parrafo => { parrafo.classList.toggle('dark-mode_letras')});
    titulos.forEach(titulos => { titulos.classList.toggle('dark-mode_letras') });
    if(body.className ==='dark-mode'){
        botondark.textContent = "Modo Normal";
        
        
    }else{
        botondark.textContent = "Modo Oscuro"
    }
    
  /*   divProfile.classList.toggle('div-profile'); */

   
})
/* articles.forEach(article => {
    article.classList.toggle('darck-mode_card')}); */

   /*  if (credito >= precio) { 
        document.write("has comprado el artículo " + nuevoArtículo) //enseño compra 
        carrito += nuevoArticulo //introduzco el artículo en el carrito de la compra 
        credito -= precio //disminuyo el crédito según el precio del artículo 
     } else { 
        document.write("se te ha acabado el crédito") //informo que te falta dinero 
        window.location = "carritodelacompra.html" //voy a la página del carrito	
     } */
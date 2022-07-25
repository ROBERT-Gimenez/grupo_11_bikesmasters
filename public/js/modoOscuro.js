let body = document.body;
let header = document.querySelector('header');
let main = document.querySelectorAll('main');
let articles = document.querySelectorAll('article');
let parrafos = document.querySelectorAll('p');
let botondark = document.querySelector('#darkMode');
let titulos = document.querySelectorAll('h3');
let divs = document.querySelectorAll('.recent-product');
let divProfile = document.querySelector('#div-profile');
let avatar = document.querySelector('img#avatarImg');
let checkbox = document.querySelector('input#checkbox')

/* Icono de carrito */
let cartIcon = document.querySelectorAll(".fa-cart-plus")
/* console.log(cartIcon[0]);
cartIcon[0].classList.toggle("i") */

console.log(localStorage)




checkbox.addEventListener('click' , () =>{
    divs.forEach(divs => { divs.classList.toggle('div-profile') })
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    main.forEach(main => { main.classList.toggle('dark-mode') })
    articles.forEach(article => { article.classList.toggle('darck-mode_card')});
    parrafos.forEach(parrafo => { parrafo.classList.toggle('dark-mode_letras')});
    titulos.forEach(titulos => { titulos.classList.toggle('dark-mode_letras') });
    header.classList.contains('dark-mode') ? localStorage.setItem('dark-mode','true') : localStorage.setItem('dark-mode' , 'false')
    header.classList.contains('dark-mode') ? botondark.textContent = "Modo Normal" : botondark.textContent = "Modo Oscuro"
    checkbox.classList.toggle('dark-mode')
    console.log(checkbox.value)
    console.log(localStorage)
    checkbox.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode','true')
    if(header.classList.contains('dark-mode')){
                checkbox.value="on"
            }else{checkbox.value="of"
            localStorage.setItem('dark-mode' , 'false')
            }

})
botondark.addEventListener('click' , function(){
    divs.forEach(divs => { divs.classList.toggle('div-profile') })
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    main.forEach(main => { main.classList.toggle('dark-mode') })
    articles.forEach(article => { article.classList.toggle('darck-mode_card')});
    parrafos.forEach(parrafo => { parrafo.classList.toggle('dark-mode_letras')});
    titulos.forEach(titulos => { titulos.classList.toggle('dark-mode_letras') });
    header.classList.contains('dark-mode') ? localStorage.setItem('dark-mode','true') : localStorage.setItem('dark-mode' , 'false')
    header.classList.contains('dark-mode') ? botondark.textContent = "Modo Normal" : botondark.textContent = "Modo Oscuro"
    console.log(localStorage)
    console.log(checkbox.value)

})



     if (!localStorage.getItem('dark-mode')){
    divs.forEach(div => { div.classList.remove('div-profile') })
    body.classList.remove('dark-mode');
    header.classList.remove('dark-mode');
    main.forEach(main => { main.classList.remove('dark-mode') })
    articles.forEach(article => { article.classList.remove('darck-mode_card')});
    parrafos.forEach(parrafo => { parrafo.classList.remove('dark-mode_letras')});
    titulos.forEach(titulos => { titulos.classList.remove('dark-mode_letras') });
    
    botondark.textContent = "Modo Oscuro"
    checkbox.classList.remove('dark-mode');
    checkbox.value="of"
    }
    if(localStorage.getItem('dark-mode')==='true'){
        divs.forEach(div => { div.classList.add('div-profile') })
        body.classList.add('dark-mode');
        header.classList.add('dark-mode');
        main.forEach(main => { main.classList.add('dark-mode') })
        articles.forEach(article => { article.classList.add('darck-mode_card')});
        parrafos.forEach(parrafo => { parrafo.classList.add('dark-mode_letras')});
        titulos.forEach(titulos => { titulos.classList.add('dark-mode_letras') });
        botondark.textContent = "Modo Normal";  
        checkbox.value="on"
         }
        
        

  //>>>>>>>>Vista Edit Perfil<<<<<<<<<<<<<//
  //AL TENER UN ELEMENTO QUE NO SE REPITE EN OTRAS VISTAS SE COLOCA A LO ULTIMO//
    if(localStorage.getItem('dark-mode')==='true'){
        divProfile.classList.add('div-profile')
    }
    botondark.addEventListener('click' , () =>{
        
        divProfile.classList.toggle('div-profile'); 
        

    })
/* document.body.style.backgroundColor =  */
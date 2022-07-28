function qs(element) {
    return document.querySelector(element)
}

let boton_carrito = document.querySelectorAll('.agregar');
let $favoritos = document.querySelectorAll('.fa-heart');


boton_carrito.forEach(boton => {
    boton.addEventListener('click' , function() {
        /* Si el objeto ya fue seleccionado se lo saca del carro */
        if(this.children[0].classList.contains("fa-cart-arrow-down")) {
            this.children[0].classList.remove("fa-cart-arrow-down")
            this.children[0].classList.add("fa-cart-plus")
            this.innerHTML = `Añadir <i class="fa-solid fa-cart-plus"></i>`
            this.style.color = "white"
        } else {
            this.children[0].classList.remove("fa-cart-plus")
            this.children[0].classList.add("fa-cart-arrow-down")
            this.innerHTML = `Añadido <i class="fa-solid fa-cart-arrow-down"></i>`
            this.style.color = "#FF2E00"
        }
    })
})

/* $favoritos.forEach(favorito => {
    favorito.addEventListener('click' , function() {
        if(this.classList.contains("heart__full")) {
            this.classList.remove("heart__full")
        } else {
            this.classList.add("heart__full")
        }
        }
    )
}) */


    let carrito = JSON.parse(localStorage['carrito'] || '[]');             
              
        boton_carrito.forEach(btn_Agregar => {

            btn_Agregar.addEventListener('click' ,(e) =>{
            let id_prod = +e.target.getAttribute('target')
                if(!carrito.includes(id_prod)){
            function guardarCarritoEnLocalStorage() {
                localStorage.setItem('carrito', JSON.stringify((id_prod)));
                            }
            function cargarCarritoDeLocalStorage() {
            // ¿Existe un carrito previo guardado en LocalStorage?
                if (localStorage.getItem('carrito') !== null) {                
            carrito.push(+e.target.getAttribute('target'));
                localStorage.setItem('carrito', JSON.stringify(carrito))
                }
                }
                guardarCarritoEnLocalStorage() 
                cargarCarritoDeLocalStorage() 
                console.log(localStorage)
                }
                })  })
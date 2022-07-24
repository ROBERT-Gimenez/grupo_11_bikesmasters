function qs(element) {
    return document.querySelector(element)
}

let boton_carrito = document.querySelectorAll('.fa-cart-plus');
let $favoritos = document.querySelectorAll('.fa-heart');


boton_carrito.forEach(boton => {
    boton.addEventListener('click' , function() {
        if(this.classList.contains("fa-cart-arrow-down")) {
            this.classList.remove("fa-cart-arrow-down")
            this.classList.add("fa-cart-plus")
            this.style.color = "black"
        } else {
            this.classList.remove("fa-cart-plus")
            this.classList.add("fa-cart-arrow-down")
            this.style.color = "#FF2E00"
        }
    })
})

$favoritos.forEach(favorito => {
    favorito.addEventListener('click' , function() {
        if(this.classList.contains("heart__full")) {
            this.classList.remove("heart__full")
        } else {
            this.classList.add("heart__full")
        }
        }
    )
})


let carrito = JSON.parse(localStorage.getItem('carrito')) ? [] : JSON.parse(localStorage.getItem('carrito'));


                localStorage.setItem('carrito', JSON.stringify(carrito));
               
                boton_carrito.forEach(btn_Agregar => {
                   
                

                    btn_Agregar.addEventListener('click' ,(e) =>{
                        function guardarCarritoEnLocalStorage() {
                            localStorage.setItem('carrito', JSON.stringify(carrito));
                            }
                        function cargarCarritoDeLocalStorage() {
                                // ¿Existe un carrito previo guardado en LocalStorage?
                                if (localStorage.getItem('carrito') !== null) {
                                    // Carga la información
                                    carrito = JSON.parse(localStorage.getItem('carrito'));
                                }
                            }
                        carrito.push(+e.target.parentElement.getAttribute('target'))
                        guardarCarritoEnLocalStorage()
                        cargarCarritoDeLocalStorage()
                        console.log(carrito)
                
                    })
                })
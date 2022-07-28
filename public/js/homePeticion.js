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
                console.log(carrito)
                let id_prod = +e.target.getAttribute('target')
                let car =(carrito.find(item=>{if(item == id_prod){return item}}))
                console.log(car!= id_prod)
                console.log(id_prod)
                console.log(car+"   caaar")
                if(car!==id_prod && id_prod !== 0){
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
                  })
            })
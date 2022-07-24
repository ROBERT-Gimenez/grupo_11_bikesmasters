function qs(element) {
    return document.querySelector(element)
}
let products =document.querySelector('.image')
let btns_Agregar = document.querySelectorAll('#btn_agregar');
let boton_carrito = document.querySelectorAll('.btn_agregar');

boton_carrito.forEach(boton => {
    boton.addEventListener('click' , cartClick);
})
function cartClick(){
let button = this;
button.classList.add('clicked');
}

let carrito = JSON.parse(localStorage.getItem('carrito')) ? [] : JSON.parse(localStorage.getItem('carrito'));

               
                btns_Agregar.forEach(btn_Agregar => {
                   
                

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

                        
                        carrito.push(e.target.getAttribute("target"))
                        guardarCarritoEnLocalStorage()
                        cargarCarritoDeLocalStorage()
                        console.log(carrito)
                
                    })
                })


function qs(element) {
    return document.querySelector(element)
}
let products =document.querySelector('.image')
let btns_Agregar = document.querySelectorAll('#btn_agregar');


let carrito = [];






                 /* const carritoSinDuplicados = [...new Set(carrito)]; 
                // Generamos los Nodos a partir de carrito
                 carritoSinDuplicados.forEach((item) => {
                    const miItem = carrito.filter((itemBaseDatos) => {
                        // ¿Coincide las id? Solo puede existir un caso
                        return itemBaseDatos.id === parseInt(item);
                    });  
                    // Cuenta el número de veces que se repite el producto
                     const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                        // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
                        return itemId === item ? total += 1 : total;
                    }, 0);


 */


                localStorage.setItem('carrito', JSON.stringify(carrito));
               
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


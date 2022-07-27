

let productos = document.querySelectorAll('div.producto-pedido')
let carrito = localStorage.getItem('carrito')
let Precios = document.querySelectorAll('.colum-price')
let btnVaciar = document.querySelector('button#vaciar-carrito')
let btnDelete = document.querySelectorAll('button.delete');
let ProdPrice = document.querySelectorAll('p.subtotal')
let AllPrices = document.querySelector('b#subTotal')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


    let carro = []
    JSON.parse(carrito).forEach(item =>{

/* --------------Productos a Mostrar---------------------------- */
    productos.forEach(product=>{
    let product_id = product.getAttribute("target");

        if(item== product_id){
        product.style.display="flex"
            console.log(product)
            }
        })
    
/* ---------------------------Precio--------------------------- */
        
    ProdPrice.forEach(t => {
               
        if(item==(t.getAttribute("target"))){
            carro.push(t.textContent)
            }   })
            console.log(carro)
        if(carro.length >= 1){
           AllPrices.innerHTML=toThousand(carro.reduce((a,b) => {return Number(+a - -b) }))
            }    
        })
     
 /* --------------Precio al Cambiar las Cantidades--------------- */
 
    productos.forEach((product)=>{
        let price = Number(product.children[1].getAttribute("target"))
        let select = product.children[2];
        let Total = product.children[3];
        Total.innerHTML= toThousand(price)
        
/* --------------SI CAMBIA EL PRODUCTO------------------------ */
        if(product.style.display !== "none"){
        product.onchange = function() {
        Total.innerHTML = toThousand(+select.value * price)
        let carro=[]
        
        ProdPrice.forEach(t => {
        JSON.parse(carrito).forEach(item =>{ 
            if(item ==(t.getAttribute("target"))){
                carro.push((t.textContent).replace("." , ""))    
            }   })  })
        AllPrices.innerHTML=toThousand(carro.reduce((a,b) => {return Number(+a + +b) }))
            console.log(carro) 
        }}       
        })

    
/* ------------------Boton para Vaciar Carro----------------------- */
        btnVaciar.addEventListener('click' , () => {
        let carrito = new Array();
        localStorage.setItem("carrito", JSON.stringify(carrito));
        productos.forEach(product=>{
            product.style.display="none"})
        })
/* ----------------Boton para eliminar Producto--------------------- */
        let items = JSON.parse(carrito);

        btnDelete.forEach(btn => {
        btn.addEventListener('click' , (e) => {
            let ProductDelete = +btn.getAttribute("target")
            
            for (let i = 0; i < items.length; i++) {
            if(items[i] == ProductDelete){
                items.splice(i,1);
            break;
            }  
        }

/* ------------------ACTUUALIZAR EL PRECIO FINAL--------------------- */
            let resta = btn.previousElementSibling.textContent.replace("." , "")
            let precioFinal = (AllPrices.textContent.replace("." , "").replace("." , ""))
            AllPrices.innerHTML= toThousand(Number(precioFinal-resta))
            console.log(items + " item")
            console.log(resta + " restaa")
            console.log(precioFinal + "precioFInal")
            localStorage.setItem("carrito",JSON.stringify(items)) 
            btn.parentElement.style.display="none"

            })
        
            })




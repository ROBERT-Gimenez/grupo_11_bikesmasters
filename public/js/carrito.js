/* 
    update_amounts();
$('.qty, .pice').on('keyup keypress blur change',function(e){
    update_amounts();
});
});
function update_amounts(){
    var sum = 0.0;
    $('#myTable > tbody > tr').each (function(){
        var qty = $(this).find ('.qty').val();
        var price = $(this).find ('.price').val()
        var amount = (qty*price)
        sum+=amount;
        $(this).find('.amount').text(''+amount);
    });
    $('.total').text(sum);
}

//incrementar o bajar cantidad//
var incrementQty;
var decrementQty;
var plusBtn = $(".cart-qty-plus");
var minusBtn = $(".cart-qty-minus");
var incrementQty = plusBtn.click (function() {
    var $n = $(this)
    .parent(".button-container")
    .find(".qty");
    
    update_amounts();
});
var decrementQty = minusBtn.click(function(){
    var $n = $(this)
    .parent(".button-container")
    .find(".qty")
    var Qtyval = Number($n.val());
    if (Qtyval> 0){
        $n.val(Qtyval-1);
    }
    update_amounts();
});

let button = document.querySelector(".compra");
button.onclick = function() {
  alert("GRACIAS POR SU COMPRA PRONTO RECIBIRAS TU PRODUCTO!");
}
let volve = document.querySelector(".volver");
volve.onclick = function() {
  confirm ("ESTAS SEGURO QUE QUIERES VOLVER AL INCIO!");
}
let elimina = document.querySelector(".eliminar");
elimina.onclick = function() {
  confirm ("ESTAS A PUNTO DE CANCELAR LA COMPRA ¿ESTAS SEGURO?");
}
window.addEventListener("load", () => {
    //if (localStorage.setItem("nombreUsuario" == null)){//
   
   // }
}) */






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
    
/* ------------------Precio------------------------- */
        
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
    if(product.style.display !== "none"){
/* --------------SI CAMBIA EL PRODUCTO------------------------ */
     product.onchange = function(event) {
    
    Total.innerHTML = toThousand(+select.value * price)
    carro=[]
    ProdPrice.forEach(t => {
        
        if(carrito.includes(t.getAttribute("target"))){
            carro.push((t.textContent).replace("." , ""))    
            }
        })
        console.log(carro) 
        AllPrices.innerHTML=toThousand(carro.reduce((a,b) => {return Number(+a + +b) }))}   
        }  })

 
/* ------------------Boton para Vaciar Carro------------------------- */
btnVaciar.addEventListener('click' , () => {
    let carrito = new Array();
    localStorage.setItem("carrito", JSON.stringify(carrito));
    productos.forEach(product=>{
        product.style.display="none"})
})
/* ----------------Boton para eliminar Producto------------------------------ */
let items = JSON.parse(carrito);

btnDelete.forEach(btn => {
    btn.addEventListener('click' , (e) => {

        if(carrito.includes(btn.getAttribute("target"))){
        let ProductDelete = +btn.getAttribute("target")
        
        for (let i = 0; i < items.length; i++) {
            if(items[i] == ProductDelete){
            items.splice(i,1);
        break;
        }  
    }
}
/* ------------------ACTUUALIZAR EL PRECIO FINAL--------------------- */
let resta = btn.previousElementSibling.textContent.replace("." , "")
let precioFinal = (AllPrices.textContent).replace("." , "")
AllPrices.innerHTML= toThousand(Number(precioFinal-resta))
console.log(items)
console.log(resta)
localStorage.setItem("carrito",JSON.stringify(items)) 
btn.parentElement.style.display="none"

})
     
})




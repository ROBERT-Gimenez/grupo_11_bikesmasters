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
let totales = document.querySelectorAll('p.subtotal')
let subtotal = document.querySelector('b#subTotal')




productos.forEach(product=>{
    let product_id = product.getAttribute("target");
    if(carrito.includes(product_id)){
        product.style.display="table-row;"
    }else{
        product.style.display="none"
    }
    
 })


 var to = []
 totales.forEach(t => {
        
    if(carrito.includes(t.getAttribute("target"))){
        to.push(t.textContent)
        to.reduce((a,b) => {return Number(+a - -b) })
        
        
    }
    })
 

subtotal.innerHTML=to.reduce((a,b) => {return Number(+a - -b) })
        
 /* ------------------------------------------ */
 productos.forEach((product)=>{
    let price = product.children[1].textContent
    let select = product.children[2];
    let Total = product.children[3];
    Total.innerHTML= price
    if(product.style.display !== "none"){
   
     product.onchange = function(event) {
   /*  console.log((+select.value * +price.value))
    console.log((select.value)) */
    Total.innerHTML= +select.value * +price +".000"
    
    
    totales.forEach(t => {
        
        if(carrito.includes(t.getAttribute("target"))){
            let too =to.map(i => {})
            to.push(t.textContent)
            to.reduce((a,b) => {return Number(+a - -b) })
            
            
        }
        })
        console.log(to)
        subtotal.innerHTML=to.reduce((a,b) => {return Number(+a - -b) })
     }
        
     }})

     

    
 
/* ------------------------------------------- */
btnVaciar.addEventListener('click' , () => {
    productos.forEach(product=>{
        product.style.display="none"})
})

btnDelete.forEach(btn => {
    btn.addEventListener('click' , (e) => {
    productos.forEach((product) => {if(product.getAttribute("target") == btn.getAttribute("target")){
        product.style.display="none"
    }});
   
    })
})

    
    





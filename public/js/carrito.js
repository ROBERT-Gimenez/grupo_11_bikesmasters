$(document).ready(function(){
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
    $n.val(Number($n.val())+1 );
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
})

let productos = document.querySelectorAll('.idtarget')
let carrito = localStorage.getItem('carrito')



/* for (let i = 0 ; i < carrito.length ; i++){ */
productos.forEach(product=>{
    let product_id = product.getAttribute("target");
    console.log(product_id)
    if(carrito.includes(product_id)){
        product.style.display="block"
    }else{
        product.style.display="none"
    }
    })
 


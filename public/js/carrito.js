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
let compra = document.queryselector('.compra');
compra.addEventListerner('click', ()=>{
    alert("GRACIAS POR SU COMPRA PRONTO RECIBIRA SU PRODUCTO!!")
})
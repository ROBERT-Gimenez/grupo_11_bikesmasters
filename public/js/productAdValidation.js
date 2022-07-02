function qs(element) {
    return document.querySelector(element)
}


let producto = qs('#nameProduct');
let price =qs("input#price");
let marca =qs("input#marca");
let discount =qs("input#discount");
let stock =qs("input#stock");
let description =qs("#description");
let select =qs("#select");
let form =qs(".form-register");
let FormError =qs("#FormError");
let productError =qs("#nameError");
let marcaError =qs("#marcaError");
let priceError =qs("#priceError");
let stockError =qs("#stockError");
let discError =qs("#discError");
let catError =qs("#catError");
let descripcionError =qs("#descripcionError");
let option = qs("#sinCateg")

/* select.style.backgroundColor="red" */

//>> Restricciones de Campos << //
regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/
var reg = new RegExp('^[0-9]*$');
let errors ;

    //>>>>>>>> Nombre Producto <<<<<<<<<<<<//

        producto.addEventListener("blur" , () => {
            switch (true) { 
                case !producto.value.trim():
                    productError.innerHTML= "ingrese un Producto";
                    productError.classList.add("invalido")
                    errors = false;
                    breack;
                case !regExAlpha.test(nameProduct.value):
                    productError.innerHTML ="Nombre Invalido"
                    productError.classList.add("invalido");
                    breack;
                default :
                    producto.classList.remove("invalido");
                    producto.classList.add("valido");
                    productError.innerHTML =""
                    errors = true ;
                    breack;
                }})

    //>>>>>>>>>>>>precio<<<<<<<<<<<<<//


        price.addEventListener("blur" , () => {
            switch (true) { 
                case !price.value.trim():
                    priceError.innerHTML= "ingrese un monto valido";
                    price.classList.add("invalido")
                    breack;
                case !reg.test(price.value):
                    priceError.innerHTML ="Valor Invalido"
                    price.classList.add("invalido");
                    breack;
                default :
                    price.classList.remove("invalido");
                    price.classList.add("valido");
                    priceError.innerHTML =""
                    breack;
                }})
    //>>>>>>>>>>>>> Marca <<<<<<<<<<<<<//

        marca.addEventListener("blur" , () => {
            switch (true) { 
                case !marca.value.trim():
                    marcaError.innerHTML= "ingrese una marca";
                    marca.classList.add("invalido")
                    breack;
                case !regExAlpha.test(marca.value):
                    marcaError.innerHTML ="Valor Invalido"
                    marca.classList.add("invalido");
                    breack;
                default :
                    marca.classList.remove("invalido");
                    marca.classList.add("valido");
                    marcaError.innerHTML =""
                    breack;
                }})

    //>>>>>>>>>>>>> Stock <<<<<<<<<<<<<//
        stock.addEventListener("blur" , () => {
            switch (true) { 
                case !stock.value.trim():
                    stockError.innerHTML= "ingrese una cantidad";
                    stock.classList.add("invalido")
                    breack;
                case !reg.test(stock.value):
                    stockError.innerHTML ="Valor Invalido"
                    stock.classList.add("invalido");
                    breack;
                default :
                    stock.classList.remove("invalido");
                    stock.classList.add("valido");
                    stockError.innerHTML =""
                    breack;
                }})

                
    //>>>>>>>>>>>>> discount <<<<<<<<<<<<<//

    discount.addEventListener("blur" , () => {
        switch (true) { 
            case !discount.value.trim():
                discError.innerHTML= "ingrese un valor";
                discount.classList.add("invalido")
                breack;
            case !reg.test(discount.value):
                discError.innerHTML ="Valor Invalido"
                discount.classList.add("invalido");
                breack;
            default :
                discount.classList.remove("invalido");
                discount.classList.add("valido");
                discError.innerHTML =""
                breack;
            }})
            
    //>>>>>>>>>>>>> description <<<<<<<<<<<<<//
    description.addEventListener("blur" , () => {
        switch (true) { 
            case !description.value.trim():
                descripcionError.innerHTML= "ingrese una Descripcion";
                description.classList.add("invalido")
                breack;
            default :
                description.classList.remove("invalido");
                description.classList.add("valido");
                descripcionError.innerHTML =""
                breack;
            }})
     //>>>>>>>>>>>>> Categoria <<<<<<<<<<<<<//
    
     
        catError.innerHTML= "seleccione una Categoria";
        catError.classList.add("invalido")
   
        select.addEventListener('change' , () =>{
            catError.classList.remove("invalido");
            select.classList.add("valido");
            catError.innerHTML =""

        })
        console.log(errors) 

        //>>>>>>>>>>>>> submit <<<<<<<<<<<<<//
          
        form.addEventListener("submit", function (event) {
            event.preventDefault()
            let elementsForm = this.elements
            console.log(elementsForm)
            let errors = false
    
            for (let i = 0; i < elementsForm.length - 1; i++) {
                if(elementsForm[i].value == ""
                && elementsForm[i].boton !== "boton"
                || elementsForm[i].classList.contains('invalido')) {
                    elementsForm[i].classList.remove('input-style')
                    elementsForm[i].classList.add('invalido')
                    FormError.innerHTML = "Complete los campos vacios"
                    FormError.classList.add("invalido")
                    errors = true
                    console.log(elementsForm[i])
                }
                
            }
    
            if(!errors) {
                form.submit()
            } else {
                alert("Se encontraron errores en el formulario")
            }
    
        })
    
	
	
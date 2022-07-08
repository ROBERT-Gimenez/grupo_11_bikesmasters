const qs = (element) => {
    return document.querySelector(element)
} 

window.addEventListener('load', () => {
    
    let $form = qs('#formulario'),
    inputName = qs('#name'),
    $inputMarca = qs ('#marca'),
    $inputPrice = qs ('#price'),
    $inputStock = qs ('#stock'),
    $inputDiscount = qs ('#discount'),
    $inputCategoryid = qs ('#select')
    $inputFile = qs ('#image'),
    $imgPreview = qs ('#img-preview')
    $inputDescription = qs ('#description');
    inputNameError = qs ('#inputNameError'),
    $inputMarcaError = qs ('#inputMarcaError'),
    $inputPriceError = qs ('#inputPriceError'),
    $inputStockError = qs ('#inputStockError'),
    $inputDiscountError = qs ('#inputDiscountError'),
    $inputSelectError = qs ('#inputSelectError'),
    $FileErrors = qs ('#inputImageError'),
    $inputDescriptionError = qs ('#inputDescriptionError'),
    $submitError = qs("#submitError"),
    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
    regExAlt = /^[0-9]{7,8}$/;
    var reg = new RegExp('^[0-9]*$');

    console.log(inputName);
                  /*NOMBRE DEL PRODUCTO */
    inputName.addEventListener("blur", ()=>{
        switch (true){
            case inputName.value.length === 0://Validar que no este vacio
                console.log(inputName.value.length);
                inputNameError.innerHTML = "Debe ingresar el nombre del producto";
                inputName.classList.add("is-invalid");
                break;

            default:
                inputName.classList.remove("is-invalid");
                inputName.classList.add("is-valid");
                inputNameError.innerHTML = "";
                break;
        }

    })

                     /*MARCA DEL PRODUCTO */

    $inputMarca.addEventListener("blur", ()=>{
        switch (true){
            case !$inputMarca.value.trim():
                $inputMarcaError.innerHTML = "Debe ingresarla marca del producto";
                $inputMarca.classList.add("is-invalid");
                break; 
            case !regExAlt.test($inputMarca.value):
                $inputMarcaError.innerHTML = "Nombre del producto invalido!!";
                $inputMarca.classList.add("is-invalid");
                break; 
            default:
                $inputMarca.classList.remove("is-invalid");
                $inputMarca.classList.add("is-valid");
                $inputMarcaError.innerHTML = "";
                break;
        }

    })
                   /*PRECIO DEL PRODUCTO */

        $inputPrice.addEventListener("blur", ()=>{
        switch (true){
            case !$inputPrice.value.trim():
                $inputPriceError.innerHTML = "Debe ingresar el precio del producto";
                $inputPrice.classList.add("is-invalid");
                break;
            case !reg.test($inputPrice.value):
                $inputPriceError.innerHTML = "Precio del producto invalido!!";
                $inputPrice.classList.add("is-invalid");
                break;
            default:
                $inputPrice.classList.remove("is-invalid");
                $inputPrice.classList.add("is-valid");
                $inputPriceError.innerHTML = "";
                break;
        }

    })
                  /*STOCK DEL PRODUCTO*/

        $inputStock.addEventListener("blur", ()=>{
        switch (true){
            case !$inputStock.value.trim():
                $inputStockError.innerHTML = "Debe ingresar stock del producto";
                $inputStock.classList.add("is-invalid");
                break;
            case !reg.test($inputStock.value):
                $inputStockError.innerHTML = "stock del producto invalido!!";
                $inputStock.classList.add("is-invalid");
                break;
            default:
                $inputStock.classList.remove("is-invalid");
                $inputStock.classList.add("is-valid");
                $inputStockError.innerHTML = "";
                break;
        }

    })

                 /*DESCUENTOS SOBRE EL PRODUCTO */

        $inputDiscount.addEventListener("blur", ()=>{
        switch (true){
            case !$inputDiscount.value.trim():
                  $inputDiscountError.innerHTML = "Debe ingresar stock del producto";
                  $inputDiscount.classList.add("is-invalid");
                  break;
            case !reg.test($inputDiscount.value):
                 $inputDiscountError.innerHTML = "stock del producto invalido!!";
                 $inputDiscount.classList.add("is-invalid");
                 break;
            default:
                 $inputDiscount.classList.remove("is-invalid");
                 $inputDiscount.classList.add("is-valid");
                 $inputDiscountError.innerHTML = "";
                 break;
                    }
            
                })
                 /*CATEGORIA DE PRODUCTOS */

        $inputCategoryid.addEventListener("blur", function() {
            if (!$inputCategoryid.value.trim()) {
                $inputCategoryidError.innerHTML = "Debe seleccionar una categoria";
                $inputCategoryid.classList.add("is-invalid")
                       } 
            else {
                $inputCategoryid.classList.remove("is-invalid");
                $inputCategoryid.classList.add("is-valid");
                $inputSelectError.innerHTML =""
            }
        })
                
        $form.addEventListener("submit", function(event){
         event.preventDefault()
         let elementsForm = this.elements;
         let errores = false;
        
         for (let index = 0; index < elementsForm.length - 1; index++) {
           if (elementsForm[index].value == ""
           && elementsForm[index].name !== "discount"
           || elementsForm[index].classList.contains("is-invalid")){
            elementsForm[index].classList.add("is-invalid");
           $submitError.innerHTML = "Los campos señalados son obligatorios" 
           errores = true;
                 }
         }
         if(!errores){
            alert("validado")
            $form.submit()
         }

        })
           /*IMAGEN DEL PRODUCTO */

        $inputFile.addEventListener('change', 
        function fileValidation(){
            let filePath = $inputFile.value, //Capturo el valor del input
                allowefExtensions = /(.jpg|.jpeg|.png|.gif|.web)$/i //Extensiones permitidas
            if(!allowefExtensions.exec(filePath)){ //El método exec() ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null.
                $FileErrors.innerHTML = 'Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png - .gif)';
                $inputFile.value = '';
                $imgPreview.innerHTML = '';
                return false;
            }else{
                // Image preview
                console.log($inputFile.files);
                if($inputFile.files && $inputFile.files[0]){
                    let reader = new FileReader();
                    reader.onload = function(e){
                        $imgPreview.innerHTML = '<img src="' + e.target.result +'"style="width: 100%;"/>"';
                    };
                    reader.readAsDataURL($inputFile.files[0]);
                    $fileErrors.innerHTML = '';
                    $file.classList.remove('is-invalid')
                }
            }
        })

                /*DETALLE DEL PRODUCTO */

        $inputDescription.addEventListener("blur",() =>{
            switch (true) {
                case !$inputDescription.value.trim():
                    $inputDescriptionError.innerHTML = "Se requiere descripcion del producto";
                    $inputDescription.classList.add("is-invalid")
                    break;
                default:
                    $inputDescription.classList.remove("is-invalid");
                    $inputDescription.classList.add("is-valid");
                    $inputDescriptionError.innerHTML = "";
                    break;
            }
        })
   
})
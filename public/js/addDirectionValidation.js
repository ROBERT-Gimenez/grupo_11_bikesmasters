function qs(element) {
    return document.querySelector(element)
}
window.addEventListener("load",() => {
    let $form = qs("form"),
        $direccion = qs("#name"),
        $altura = qs("#altura"),
        $postal = qs("#postal"),
        $localidad = qs("#localidad"),
        $provincia = qs("#provincia"),
        $pais = qs("#pais"),
        $inputNameError = qs("#inputNameError"),
        $inputAlturaError = qs("#inputAlturaError"),
        $inputPostal = qs("#inputPostalError"),
        $inputLocalidadError = qs("#inputLocalidadError"),
        $inputProvinciaError = qs("#inputProvinciaError"),
        $inputPaisError = qs("#inputPaisError"),
        regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
        regExAlt = /^[0-9]{7,8}$/;

        $direccion.addEventListener("blur", ()=>{
            switch(true){
                case !$direccion.value.trim():
                    $inputNameError.innerHTML = "Direccion requerida"
                    $direccion.classList.add("is-invalid");
                    break;
            default:
                $direccion.classList.remove("is-invalid"); 
                $direccion.classList.add("is-valid");
                $inputNameError.innerHTML = "";       
            }
        })

        $altura.addEventListener("blur",()=>{
            switch(true){
                case !$altura.value.trim():
                $inputAlturaError.innerHTML = "Ingrese altura de la direccion"
                $altura.classList.add("is-invalid");
                break;
                case !regExAlt.test($altura.value):
                    $inputAlturaError.innerHTML = "Debe ingresar una numeración"
                    $altura.classList.add("is-invalid");
                break;
            default:
                $altura.classList.remove("is-invalid");
                $altura.classList.add("is-valid");
                $inputAlturaError.innerHTML = "";  
                break;  
            }
        })

})


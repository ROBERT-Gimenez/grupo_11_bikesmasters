function qs(element) {
    return document.querySelector(element)
}

window.addEventListener("load",() => {
    let $direccion = qs("#direccion"),
        $altura = qs("#altura"),
        $postal = qs("#postal"),
        $localidad = qs("#localidad"),
        $provincia = qs("#provincia"),
        $form = qs("#formulario"),
        $inputDireccionError = qs("#inputDireccionError"),
        $inputAlturaError = qs("#inputAlturaError"),
        $inputPostalError = qs("#inputPostalError"),
        $submitError = qs("#submitError"),
        $localidadError = qs('#localidadError'),
        $provinciaError = qs('#provinciaError')
        regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
        regExAlt = /^[0-9]{7,8}$/;
        console.log($form)


        /*SELECCION DE PROVINCIA*/

    fetch("https://apis.datos.gob.ar/georef/api/provincias")
    .then((response)=>response.json())
    .then((data)=>{ 
        let Provincias = data.provincias;
        for (let index = 0; index < Provincias.length; index++) {
            $provincia.innerHTML += `<option value="${Provincias[index].id}">${Provincias[index].nombre}</option>`
            }
        
    })
    .catch((error)=> console.log(error))

            /*SELECCION DE PAIS*/
/*     fetch('https://countries-cities.p.rapidapi.com/location/country/list')
    .then((response)=>response.json())
    .then((data)=>{ 
        let Pais = data.country;
        for (let index = 0; index <Pais.length; index++) {
            $pais.innerHTML += `<option value="${Pais[index].id}">${Pais[index].nombre}</option>`
            }
        
    })
    .catch((error)=> console.log(error)) */

    
    /*SELECCION DE LOCALIDADES */
/* $provincia.addEventListener("change", (event)=>{
    let idProvincia = event.target.value;
    $localidad.innerHTML = `<option value="" hidden selected></option>`;
    fetch(`https://apis.datos.gob.ar/georef/api/localidades?provincia=${idProvincia}&campos=id,nombre&max=5000`)
    .then((response)=>response.json())
    .then((data)=>{
        data.localidades.forEach(localidad => {
            $localidad.innerHTML += `<option value="${localidad.id}">${localidad.nombre}</option>`
        });
    })
    .catch((error)=> console.log(error))
        }) */
        $provincia.addEventListener("change", (event) => {
            let idProvincia = event.target.value;
            $localidad.innerHTML = `<option value="" hidden selected>Localidades</option>`
    
            fetch(`https://apis.datos.gob.ar/georef/api/localidades?provincia=${idProvincia}&campos=id,nombre&max=5000`)
            .then((response) => response.json())
            .then((data) => {
                data.localidades.forEach(localidad => { 
                    $localidad.innerHTML += `<option value="${localidad.id}">${localidad.nombre}</option>`
                });
            })
            .catch((error) => console.log(error))
        })

        /* Validaciones de provincia */
        $provincia.addEventListener("blur", () => {
            switch (true) {
                case $provincia.value === "":
                    $provinciaError.innerHTML += "Seleccione una provincia"
                    $provincia.classList.add('is-invalid')
                    break;
                case $provincia.value.length === 0:
                    $provinciaError.innerHTML += "Seleccione una provincia"
                    $provincia.classList.add('is-invalid')
                    break;
                default:
                    $provincia.classList.remove("is-invalid"); 
                    $provincia.classList.add("is-valid");
                    $provinciaError.innerHTML = "";    
                    break;
            }
        })

        /* Validacion de localidad */

        $localidad.addEventListener("blur", () => {
            switch (true) {
                case $localidad.value === "":
                    $localidadError.innerHTML += "Seleccione una localidad"
                    $localidad.classList.add('is-invalid')
                    break;
                case $localidad.value.length === 0:
                    $localidadError.innerHTML += "Seleccione una localidad"
                    $localidad.classList.add('is-invalid')
                    break;
                default:
                    $localidad.classList.remove("is-invalid"); 
                    $localidad.classList.add("is-valid");
                    $localidadError.innerHTML = "";    
                    break;
            }
        })



        /*VALIDACION DE DIRECCION */
        $direccion.addEventListener("blur", ()=>{
            switch(true){
                case !$direccion.value.trim():
                    $inputDireccionError.innerHTML = "Direccion requerida"
                    $direccion.classList.add("is-invalid");
                    break;
/*                     case !regExAlpha.test($direccion.value):
                        $inputDireccionError.innerHTML = "Debe Ingresar un caracter Valido"
                        $direccion.classList.add("is-invalid");
                    break;    */ 
            default:
                $direccion.classList.remove("is-invalid"); 
                $direccion.classList.add("is-valid");
                $inputDireccionError.innerHTML = "";       
            }
        })
        /*VALIDACION DE ALTURA */
        $altura.addEventListener("blur",()=>{
            switch(true){
                case !$altura.value.trim():
                $inputAlturaError.innerHTML = "Ingrese altura de la direccion"
                $altura.classList.add("is-invalid");
                break;
/*                 case !regExAlt.test($altura.value):
                    $inputAlturaError.innerHTML = "Debe ingresar una numeración"
                    $altura.classList.add("is-invalid");
                break; */
            default:
                $altura.classList.remove("is-invalid");
                $altura.classList.add("is-valid");
                $inputAlturaError.innerHTML = "";  
                break;  
            }
        })
        /*CODIGO POSTAL */
        $postal.addEventListener("blur",()=>{
            switch(true){
                case !$postal.value.trim():
                    $inputPostalError.innerHTML = "Ingrese su Codigo Postal"
                    $postal.classList.add("is-invalid");
                break;
/*                 case !regExAlt.test($postal.value):
                    $inputPostalError.innerHTML = "Debe ingresar una numeración"
                    $postal.classList.add("is-invalid");
                break; */
            default:
                $postal.classList.remove("is-invalid");
                $postal.classList.add("is-valid");
                $inputPostalError.innerHTML = "";  
                break;  
            }
        })

        /*VALIDACION DE FORMULARIO */
        $form.addEventListener("submit", function (e) {
            e.preventDefault()
          let elementsForm = this.elements; 
          let errores = false;
          for (let index = 0; index < elementsForm.length - 1; index++) {    
            if(elementsForm[index].value ==""
            || elementsForm[index].classList.contains("is-invalid")){
                elementsForm[index].classList.add("is-invalid");
                console.log(elementsForm[index])
                $submitError.innerHTML = "Los campos señalados son obligatorios"
                errores = true;
            }        
             }
           if(!errores){
            alert("Direccion actualizado!")
            $form.submit()
           } else {
            alert("Hay errores en el formulario")
           }

        })

})


const qsOne = (element) => {
    return document.querySelector(element)
}

function alertError(msg) {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true
      })              
      Toast.fire({
        icon: 'error',
        title: `${msg}`
      })
}

window.addEventListener('load', () => {
    
    let $form = qsOne('#formulario__profile'),
    $inputName = qsOne('#inputName'),
    $nameError = qsOne('#errorName'),
    $inputAvatar = qsOne('#inputAvatar'),
    $avatarPreview = qsOne('#avatar-user'),
    $avatarError = qsOne('#avatarError'),
    $Telefono = qsOne('#telefono'),
    $errorTelefono=qsOne("small#errorTelefono"),
    error;

    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/
    var reg = new RegExp('^[0-9]*$')

    $inputName.addEventListener("keypress", function (e) {
        if (!checkChar(e)) {
            e.preventDefault();
        }
    });
    
    function checkChar(e) {
        const char = String.fromCharCode(e.keyCode);
        const pattern = '[0-9a-zA-Z( )]';
        if (char.match(pattern)) {
            return true
        }
    }

    $inputName.addEventListener('blur', () => {
        switch (true) {
            case !$inputName.value.trim() || $inputName.value.length < 4:
                $inputName.classList.remove('input-style')
                $inputName.classList.add('error-input')
                $nameError.innerText = "Este campo no puede estar vacío"
                $nameError.classList.add('text-danger')
                error = true
                break;
            case (!regExAlpha.test($inputName.value)):
                $inputName.classList.remove('input-style')
                $inputName.classList.add('error-input')
                $nameError.innerText = "El nombre ingresado no es válido";
                $nameError.classList.add('text-danger')
                error = true
                break;
            default:
                $inputName.classList.remove("error-input")
                $inputName.classList.add("input-style")
                $nameError.innerHTML = ""
                error = false
                break;
        }
    })
    
    $Telefono.addEventListener('blur', () => {
        switch (true) {
            case $Telefono.value.length <= 8 && $Telefono.value.length !== 0:
                $Telefono.classList.remove('input-style')
                $Telefono.classList.add('error-input')
                $errorTelefono.innerText = "Ingrese un teléfono válido"
                $errorTelefono.classList.add('text-danger')
                error = true
                break;
/*             case (!reg.test($Telefono.value)):
                $Telefono.classList.remove('input-style')
                $Telefono.classList.add('error-input')
                $errorTelefono.innerText = "El telefóno ingresado no es válido";
                $errorTelefono.classList.add('text-danger')
                error = true
                break; */
            default:
                $Telefono.classList.remove("error-input")
                $Telefono.classList.add("input-style")
                $errorTelefono.innerHTML = ""
                error = false
                break;
        }
    })

    $form.addEventListener('submit', (event) =>{
        event.preventDefault()
        switch (true) {
            case $inputName.value.length === 0:
                $inputName.classList.remove('input-style')
                $inputName.classList.add('error-input')
                $nameError.innerText = "Este campo no puede estar vacío"
                $nameError.classList.add('text-danger')
                error = true
                break;
            case (!regExAlpha.test($inputName.value)):
                $inputName.classList.remove('input-style')
                $inputName.classList.add('error-input')
                $nameError.innerText = "El nombre ingresado no es válido";
                $nameError.classList.add('text-danger')
                error = true
                break;
                case $Telefono.value.length<=8 && $Telefono.value.length>=1 :
                $Telefono.classList.remove('input-style')
                $Telefono.classList.add('error-input')
                $errorTelefono.innerText = "Ingrese un Telefono Valido"
                $errorTelefono.classList.add('text-danger')
                error = true
                break;
            case (!reg.test($Telefono.value)):
                $Telefono.classList.remove('input-style')
                $Telefono.classList.add('error-input')
                $errorTelefono.innerText = "El nombre ingresado no es válido";
                $errorTelefono.classList.add('text-danger')
                error = true
                break;
            default:
                error = false
            }
            console.log(error)
            if(!error) {
                $form.submit();
            } else {
                alertError("Se encontraron errores")
            }
    })

    $inputAvatar.addEventListener('change', 
    function fileValidation(){
        let filePath = $inputAvatar.value, //Capturo el valor del input
            allowefExtensions = /(.jpg|.jpeg|.png|.gif|.web)$/i //Extensiones permitidas
        if(!allowefExtensions.exec(filePath)){ //El método exec() ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null.
            $avatarError.innerHTML = 'Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png - .gif)';
            $inputAvatar.value = '';
            $avatarPreview.innerHTML = '';
            return false;
        } else {
            // Image preview
            console.log($inputAvatar.files);
            if($inputAvatar.files && $inputAvatar.files[0]){
                let reader = new FileReader();
                reader.onload = function(e){
                    $avatarPreview.innerHTML = `<img src="${e.target.result}"/>`;
                };
                reader.readAsDataURL($inputAvatar.files[0]);
                $avatarError.innerHTML = '';
                $inputAvatar.classList.remove('error-input')
            }
        }
    })

})
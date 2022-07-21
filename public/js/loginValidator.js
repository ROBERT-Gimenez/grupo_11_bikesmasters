function alertError() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true
      })              
      Toast.fire({
        icon: 'error',
        title: 'Se encontraron errores en el formulario'
      })
}

function qsOne(element) {
    return document.querySelector(element);
}

window.addEventListener('load', () => {

    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/;

    let $email = qsOne('#email')
    let $emailError = qsOne('#error_email')
    let $password = qsOne('#password')
    let $passwordError = qsOne('#error_pass')
    let $form = qsOne('#form')
    let $customError = qsOne('#error_custom')
    let errors

    $email.addEventListener('blur', (e) => {
        switch (true) {
            case $email.value.length === 0:
                $emailError.innerHTML = "*Campo requerido";
                $emailError.classList.add("error-message")
                errors = true
                break;
            case !regExEmail.test($email.value):
                $emailError.innerHTML = "*Introduzca un email inválido"
                $emailError.classList.add("error-message")
                errors = true
                break;
            default:
                if($email.classList.contains('error-view')) {
                    $email.classList.remove("error-view");
                    $email.classList.add("valid-message");
                }
                $email.classList.remove('input-style')
                $email.classList.add('valid-message')
                $emailError.innerHTML = ""
                errors = false
                break;
        }
    })

    $password.addEventListener('blur', (e) => {
        switch (true) {
            case !$password.value.trim():
                $passwordError.innerHTML = "*Campo requerido";
                $passwordError.classList.add("error-message")
                errors = true
                break;
            case $password.value.length < 8:
                console.log($password.value.length);
                $passwordError.innerHTML = "*La contraseña tiene que tener un mínimo de 8 caracteres";
                $passwordError.classList.add("error-message")
                errors = true
                break;
            case !regExPass.test($password.value):
                $passwordError.innerHTML = "*Recuerde: La contraseña debe tener entre 8 y 12 caracteres, debe incluir al menos una mayúscula y un número."
                $passwordError.classList.add("error-message")
                errors = true
                break;
            default:
                if($password.classList.contains('error-view')) {
                    $password.classList.remove("error-view");
                    $password.classList.add("valid-message");
                }
                $password.classList.remove('input-style')
                $password.classList.add('valid-message')
                $passwordError.innerHTML = ""
                errors = false
                break;
        }
    })


    $form.addEventListener("submit", function (event) {
        event.preventDefault()
        
        switch (true) {
            case $email.value.length === 0:
                $emailError.innerHTML = "*Campo requerido";
                $emailError.classList.add("error-message")
                errors = true
                break;
            case !regExEmail.test($email.value):
                $emailError.innerHTML = "*Introduzca un email inválido"
                $emailError.classList.add("error-message")
                errors = true
                break;
            case !$password.value.trim():
                $passwordError.innerHTML = "*Campo requerido";
                $passwordError.classList.add("error-message")
                errors = true
                break;
            case $password.value.length < 8:
                console.log($password.value.length);
                $passwordError.innerHTML = "*La contraseña tiene que tener un mínimo de 8 caracteres";
                $passwordError.classList.add("error-message")
                errors = true
                break;
            case !regExPass.test($password.value):
                $passwordError.innerHTML = "*Recuerde: La contraseña debe tener entre 8 y 12 caracteres, debe incluir al menos una mayúscula y un número."
                $passwordError.classList.add("error-message")
                errors = true
                break;
            default:
                errors = false
                break;
        }

        if(!errors) {
            $form.submit()
        } else {
            alertError()
        }

    })

})
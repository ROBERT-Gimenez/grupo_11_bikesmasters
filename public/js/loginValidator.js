const qs = (element) => {
    return document.querySelector(element)
};

const qsAll = (element) => {
    return document.querySelectorAll(element)
};

window.addEventListener('load', () => {

    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
        regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/;

    let $email = qs('#email')
    let $emailError = qs('#error_email')
    let $password = qs('#password')
    let $passwordError = qs('#error_pass')
    let $form = qs('#form')
    let $customError = qs('#error_custom')

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
        let elementsForm = this.elements
        console.log(elementsForm)
        let errors = false

        for (let i = 0; i < elementsForm.length - 1; i++) {
            if(elementsForm[i].value == ""
            && elementsForm[i].recordar !== "recordar"
            && elementsForm[i].boton !== "boton"
            || elementsForm[i].classList.contains('error-message')) {
                elementsForm[i].classList.remove('input-style')
                elementsForm[i].classList.add('error-view')
                $customError.innerHTML = "Complete los campos"
                $customError.classList.add("error-message")
                errors = true
                console.log(elementsForm[i])
            }
            
        }

        if(!errors) {
            $form.submit()
        } else {
            alert("Se encontraron errores en el formulario")
        }

    })

})
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
            case !$email.value.trim():
                $emailError.innerHTML = "*Campo requerido";
                $emailError.classList.add("error-message")
                break;
            case !regExEmail.test($email.value):
                $emailError.innerHTML ="*Introduzca un email inválido"
                $emailError.classList.add("error-message")
                break;
            default :
                $email.classList.remove("input-style");
                $email.classList.add("valid-message");
                $emailError.innerHTML = ""
                break;
            }
    })

    $password.addEventListener('blur', (e) => {
        switch (true) { 
            case !$password.value.trim():
                $passwordError.innerHTML = "*Campo requerido";
                $passwordError.classList.add("error-message")
                break;
            case !regExPass.test($password.value):
                $passwordError.innerHTML ="*Recuerde: La contraseña debe tener entre 8 y 12 caracteres, debe incluir al menos una mayúscula y un número."
                $passwordError.classList.add("error-message")
                break;
            default :
                $password.classList.remove("input-style");
                $password.classList.add("valid-message");
                $passwordError.innerHTML = ""
                break;
            }
    })


    $form.addEventListener("submit", function(event) {
        event.preventDefault()
        let elementsForm = this.elements
        let errors = false

        console.log(elementsForm)

        for(let i = 0; i < elementsForm.length - 1; i++) {
            if(elementsForm[i].value === ""
            && elementsForm[i].email === "email"
            && elementsForm[i].password === "password"
            || elementsForm[i].classList.contains("error-message")) {
                elementsForm[i].classList.add("error-message")
                $customError.innerHTML = "Complete los campos obligatorios"
                $customError.classList.add("error-message")
                console.log(errors)
                errors = true
                console.log(errors)
            }
        }

        if(!errors) {
            alert("Formulario completado con éxito")
            $form.submit()
        } else {
            alert("Hay errores en el fornulario")
        }


    })





})
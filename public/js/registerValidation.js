function qs(element) {
    return document.querySelector(element)
}
let $name =qs('#name');
let $email =qs('#email');
let $password = qs('#password');
let $password2 = qs('#password2');
let $terms = qs('#terms');
let $form = qs('#form');
let $nameError =qs('#nameError');
let $emailError =qs('#emailError');
let $passwordError =qs('#passwordError');
let $password2Error =qs('#password2Error');
let $submitError =qs('#submitError');

regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
regExDNI = /^[0-9]{7,8}$/,
regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;

/* >> validacion de nombre << */
$name.addEventListener('blur' , function(e){
        switch (true) { 
            case !$name.value.trim()||$name.value.length<4:
                $nameError.innerHTML= "Nombre Invalido"
                $inputLastname.classList.add("invalido")
                breack;
            case !regExAlpha.test($name.value):
                $nameError.innerHTML ="Nombre Invalido , no debe poseer numeros"
                $name.classList.add("invalido");
                breack;
            default :
                $name.classList.remove("invalido");
                $name.classList.add("valido");
                $nameError.innerHTML =""
                breack;
            }

})
/* >> validacion de Email << */
$email.addEventListener("blur" , function(e) {
    switch (true) { 
        case !$email.value.trim():
            $emailError.innerHTML= "Email Requerido";
            $email.classList.add("invalido")
            breack;
        case !regExEmail.test($email.value):
            $emailError.innerHTML ="Email Invalido"
            $email.classList.add("invalido");
            breack;
        default :
            $email.classList.remove("invalido");
            $email.classList.add("valido");
            $emailError.innerHTML =""
            breack;
        }
})
/* >> validacion de Password << */
$password.addEventListener('blur', function(){
    switch (true) {
        case !$password.value.trim():
            $passwordError.innerHTML = 'El campo contraseña es obligatorio'
            $password.classList.add('is-invalid')
            break;
        case !regExPass.test($password.value):
            $passwordError.innerHTML = 'La contraseña debe tener: entre 6 y 12 caracteres, al menos una mayúscula, una minúscula y un número';
            $password.classList.add('is-invalid')
            break;    
        default:
            $password.classList.remove("is-invalid");
            $password.classList.add('is-valid')
            $passwordError.innerHTML = ""
            break;
    }
})
/* >> validacion de Password2 << */
$password2.addEventListener('blur', function(){
    switch (true) {
        case !$password2.value.trim():
            $password2Error.innerHTML = 'Reingresa tu contraseña'
            $password2.classList.add('invalido')
            break;
        case $password2.value !== $password.value:
            $password2Error.innerHTML = 'Las contraseñas no coinciden';
            $password2.classList.add('invalido')
            break;    
        default:
            $password2.classList.remove("invalido");
            $password2.classList.add('valido')
            $password2Error.innerHTML = ""
            break;
    }
})

/* >> Terminos y Condiciones << */

$terms.addEventListener('click', function (){
        $terms.value = "on"
        $terms.classList.toggle('valido')
        $terms.classList.remove('invalido')
        $termsErrors.innerHTML = ""
       
/* >>>>>>>  PreventDefault  <<<<<<< */
       $form.addEventListener("submit" , function(event) {

        event.preventDefault()
        let elementsForms =this.element ;
        let errores = false ;
      
        
        for (let index = 0 ; index < elementsForms.length - 1 ; index +1)
            if(elementsForm[index].value == ""|| elementsForms[index].classList.contains("invalido"))  
             {	elementsForm[index].classList.add("invalido");
             submitError.innerHTML = "Hay errores en el Formulario"
            errores = true;
             }}
             )
            })
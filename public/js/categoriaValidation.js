window.addEventListener('load', () => {
    let $inputCategory = qs("#category"),
    $categoryError = qs("#categoryError"),
    $form = qs('form'),
    error;
    
    console.log($inputCategory);
    console.log($form);

    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/
    regExAlt = /^[0-9]{7,8}$/;

    $inputCategory.addEventListener("keypress" , function(e){
        if(!checkChar(e)){
            e.preventDefault();}
        });
    
    function checkChar(e){
        const char = String.fromCharCode(e.keyCode);
        const pattern = '[0-9a-zA-Z( )]';
    if(char.match(pattern)){
        return true }}

    $inputCategory.addEventListener("blur", ()=>{
        switch (true){
            case !$inputCategory.value.trim():
                $inputCategory.classList.remove('input-style')
                $inputCategory.classList.add('error')
                $categoryError.innerHTML = "Ingrese un nombre"
                $categoryError.classList.add('invalido')
                error = true
                break;
            case !regExAlpha.test($inputCategory.value):
                $inputCategory.classList.remove('input-style')
                $inputCategory.classList.add('error')
                $categoryError.innerHTML = "No debe tener caracteres especiales o números"
                $categoryError.classList.add('invalido')
                error = true
                break;
            case $inputCategory.value.length < 3 || $inputCategory.value.length > 20:
                $inputCategory.classList.remove('input-style')
                $inputCategory.classList.add('error')
                $categoryError.innerHTML = "El nombre debe estar entre 4 y 20 letras como máximo"
                $categoryError.classList.add('invalido')
                error = true
            default:
                $inputCategory.classList.remove('error')
                $inputCategory.classList.add('input-style')
                $categoryError.classList.remove('invalido')
                $categoryError.innerHTML = ""
                error = false
                break;
        }

    })

    $form.addEventListener('submit', (event) => {
        event.preventDefault()
        let error;
        switch (true) {
            case !$inputCategory.value.trim():
                $inputCategory.classList.remove('input-style')
                $inputCategory.classList.add('error')
                $categoryError.innerHTML = "Ingrese un nombre"
                $categoryError.classList.add('invalido')
                error = true
                break;
            case !regExAlpha.test($inputCategory.value):
                $inputCategory.classList.remove('input-style')
                $inputCategory.classList.add('error')
                $categoryError.innerHTML = "No debe tener caracteres"
                $categoryError.classList.add('invalido')
                error = true
                break;
            case $inputCategory.value.length < 3 || $inputCategory.value.length > 20:
                $inputCategory.classList.remove('input-style')
                $inputCategory.classList.add('error')
                $categoryError.innerHTML = "El nombre debe estar entre 4 y 20 letras como máximo"
                $categoryError.classList.add('invalido')
                error = true
            default:
                error = false
                break;
        }
        if(!error) {
            $form.submit();
        } else {
            alert('Hay un error, verifique los datos')
        }
    })


})

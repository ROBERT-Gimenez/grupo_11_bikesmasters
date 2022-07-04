const qs = (element) => {
    return document.querySelector(element)
};
window.addEventListener('load', () => {
    let $titulo = ("#titulo"),
    $tituloError = ('#tituloError'),
    $imgProducto = ('#imgProducto'),
    $imgProductoError = ('#imgProductoError')
    $precio = ('#precio'),
    $precioError = ('#precioError'),
    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
    regExAlt = /^[0-9]{7,8}$/;

    $titulo.addEventListener("blur", ()=>{
        switch (true){
            case !$titulo.value.trin():
                $tituloError.innerHTML = "Debe seleccionar una categoria";
                $titulo.classList.add("is-invalid");
                break;
            case !regExAlt.test($titulo.value):
                $tituloError.innerHTML = "categoria invalida!!";
                $titulo.classList.add("is-invalid");
                break;
            default:
                $titulo.classList.remove("is-invalid");
                $titulo.classList.add("is-valid");
                $tituloError.innerHTML = "";
                break;
        }

    })
    $precio.addEventListener("blur", ()=>{
        switch (true){
            case !$precio.value.trin():
                $precioError.innerHTML = "Debe ingresar el precio del producto";
                $precio.classList.add("is-invalid");
                break;
            case !regExAlt.test($precio.value):
                $precioError.innerHTML = "Precio del producto invalido!!";
                $precio.classList.add("is-invalid");
                break;
            default:
                $precio.classList.remove("is-invalid");
                $precio.classList.add("is-valid");
                $precioError.innerHTML = "";
                break;
        }

    })

    $imgProducto.addEventListener('change', 
        function fileValidation(){
            let filePath = $imgProducto.value, //Capturo el valor del input
                allowefExtensions = /(.jpg|.jpeg|.png|.gif|.web)$/i //Extensiones permitidas
            if(!allowefExtensions.exec(filePath)){ //El método exec() ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null.
                $imgProductoError.innerHTML = 'Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png - .gif)';
                $imgProducto.value = '';
                $imgPreview.innerHTML = '';
                return false;
            }else{
                // Image preview
                console.log($imgProducto.files);
                if($imgProducto.files && $imgProducto.files[0]){
                    let reader = new FileReader();
                    reader.onload = function(e){
                        $imgPreview.innerHTML = '<img src="' + e.target.result +'"/>';
                    };
                    reader.readAsDataURL($imgProducto.files[0]);
                    $imgProductoError.innerHTML = '';
                    $imgProducto.classList.remove('is-invalid')
                }
            }
        })

               

})

function qs (element) {
    return document.querySelector(element)
}

function qsAll (element) {
    return document.querySelectorAll(element)
}


window.addEventListener('load', () => {


    //se optienen todos los sliders
    let sliders = qsAll('.slider_body')
    let arrowNext = qs('#next')//boton siguiente
    let arrowBefore = qs('#before')//boton atras
    let $figure = qs('#figure')
    let value;
    console.log($figure)
    let productoId = location.pathname
    console.log(productoId)
    console.log(productoId.slice(18))
    let siete = productoId.slice(18)
    console.log(Number(siete))
    let seven;
    console.log("Largo del path: " + productoId.length)
    for (let i = 0; i < productoId.length; i++) {
        if (productoId[i] = 18) { 
            seven = productoId.slice(18)
            console.log(seven + " asd")
        }
    }
    console.log("hola " + seven)
    console.log(arrowBefore)
    console.log(arrowNext)

    fetch('http://localhost:4000/api/producto')
    .then((response) => {return response.json()})
    .then(productos => {
        console.log(productos)
        let producto = productos.data
        console.log(producto)
        $figure.innerHTML = `<img src="${producto[3].image}" alt="" >`
/*         for (let i = 0; i < producto.length; i++) {
            console.log(producto[i].image)
            $figure.innerHTML = `<img src="${producto[i].image}" alt="" >`
            console.log($figure)
        } */
    })
        arrowNext.addEventListener('click', () => {
            changePosition(1)
        })
        
        arrowBefore.addEventListener('click', () => {
            changePosition(-1)
        })
        //funcion creada para sumar o restar los valores id y asi transisionar los elementos
        function changePosition(change) {
            //Obtengo el elemento actual y su data-id
            let currentElement = Number (qs('.slider_body-show').dataset.id)
            //a value se le asigana el valor numerico de el elemento actual
            value = currentElement
            //luego a value ya asignado un valor se le suma el valor del parametro
            value += change

            if(value === 0 || value == sliders.length+1) {
                value = value === 0? sliders.length : 1;
            }
            //Agrega estilos para mostrar elementos
            sliders[currentElement-1].classList.toggle('slider_body-show')
            sliders[value-1].classList.toggle('slider_body-show')

        }


})
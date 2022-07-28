function qs (element) {
    return document.querySelector(element)
}

let imgRobert = qs('img#Robert');
let imgBrian = qs('img#Brian');
let imgCarlos = qs('img#Carlos');
let cerrar = qs('#cerrar-ventana')
let cerrar2 = qs('#cerrar-ventana2')
let cerrar3 = qs('#cerrar-ventana3')


let Robert = qs('div.Robert');
let Brian = qs('div.Brian');
let Carlos = qs('div.Carlos');


let Cerrar = function cerar(a){
        a.classList.remove('active')
    }


imgRobert.addEventListener('click', () => {
        Robert.classList.toggle('active')
        Cerrar(Carlos)
        Cerrar(Brian)
    })
cerrar.addEventListener('click' , () =>{
    Robert.classList.toggle('active')
})
 imgCarlos.addEventListener('click', () => {
        Carlos.classList.toggle('active')
        Cerrar(Robert)
        Cerrar(Brian)
})
cerrar2.addEventListener('click' , () =>{
    Carlos.classList.toggle('active')
})

imgBrian.addEventListener('click', () => {
    Brian.classList.toggle('active')
    Cerrar(Robert)
    Cerrar(Carlos)

})
cerrar3.addEventListener('click' , () =>{
    Brian.classList.toggle('active')
})



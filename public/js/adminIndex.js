/* Funciones de captura de elementos */
function qse(element) {
    return document.querySelector(element)
};

function qsAll(element) {
    return document.querySelectorAll(element)
};

/* Comienzo de manejo de DOM */

window.addEventListener('load', () => {

    let $menues = qsAll('.menu');
    let $optionLists = qsAll('.option-link')

    $menues.forEach(menu => {
        menu.addEventListener('mouseover', function() {
            menu.style.boxShadow = "0px 1px 2px 0px rgb(241 114 5)"
            menu.style.zIndex = "1"
            menu.children[0].classList.remove('options')
            menu.children[0].classList.add('show-options')
        })
    })
    $menues.forEach(menu => {
        menu.addEventListener('mouseout', function() {
            menu.style.boxShadow = "0px 3px 8px -8px"
            menu.style.zIndex = "0"
            menu.children[0].classList.remove('show-options')
            menu.children[0].classList.add('options')
        })
    })

    $optionLists.forEach(option => {
        option.addEventListener('mouseover', () => {
            option.style.boxShadow = "0px 5px 0px -4px rgb(241 114 5)";
        })
    })

    $optionLists.forEach(option => {
        option.addEventListener('mouseout', () => {
            option.style.boxShadow = "none"
        })
    })

    
})
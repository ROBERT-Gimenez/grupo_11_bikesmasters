function qsAll (element) {
    return document.querySelectorAll(element)
}

window.addEventListener('load', () => {
    let $arrowDown = qsAll(".columns__references")

    $arrowDown.forEach(arrow => {
        arrow.addEventListener('click', function () {
            this.classList.toggle("show")
            this.children[0].children[1].classList.toggle("rotate")
        })
    })

})
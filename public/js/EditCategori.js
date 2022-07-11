window.addEventListener('load', () => {
    let inputCategory = document.querySelectorAll("#IdCategori"),
    categoryError = qs("#CategoriError"),
    form = qs('#Form-Category'),
    error;


    inputCategory.forEach(input =>{
    input.addEventListener("keypress" , function(e){
            if(!checkChar(e)){
                e.preventDefault();}
            });
        
        function checkChar(e){
            const char = String.fromCharCode(e.keyCode);
            const pattern = '[a-zA-Z( )]';
        if(char.match(pattern)){
            return true }}

    })

    
})

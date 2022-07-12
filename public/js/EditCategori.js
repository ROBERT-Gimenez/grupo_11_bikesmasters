window.addEventListener('load', () => {
    let inputCategory = document.querySelectorAll("#IdCategori"),
    categoryError = qs("#CategoriError"),
    form = qs('#Form-Category')
    
    


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
    
    
        
        form.addEventListener("submit" , (event) => {
            event.preventDefault()
            let error;
            inputCategory.forEach((input) => {
                
                    if(input.value.length < 4){
                        
                       return error = true
                    }else{
                        return error = false
                    } 
                })
            if(error == true){
                alert("El Campo debe tener mas de 4 Palabras")
            }else{
                form.submit()
            }
    
})
})

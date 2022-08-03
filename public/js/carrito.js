

let direccion = document.querySelector("input#direccion")
let newDireccion = document.querySelector("input#newdireccion")
let SessionId = document.querySelector('div.inline').getAttribute("target")
let productos = document.querySelectorAll('div.producto-pedido')
let carrito = localStorage.getItem('carrito')
let Precios = document.querySelectorAll('.colum-price')
let btnVaciar = document.querySelector('button#vaciar-carrito')
let btnDelete = document.querySelectorAll('button.delete');
let ProdPrice = document.querySelectorAll('p.subtotal')
let AllPrices = document.querySelector('b#subTotal')
let inputEfectivo = document.querySelector('input#pago_efectivo')
let inputtarjeta = document.querySelector('input#pago_tarjeta')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


    let carro = []
    JSON.parse(carrito).forEach(item =>{

/* --------------Productos a Mostrar---------------------------- */
    productos.forEach(product=>{
    let product_id = product.getAttribute("target");

        if(item== product_id){
        product.style.display="flex"
            console.log(product)
            }
        })
    
/* ---------------------------Precio--------------------------- */
        
    ProdPrice.forEach(t => {
               
        if(item==(t.getAttribute("target"))){
            carro.push((t.textContent).replace(("$"),("")))
            }   })
            console.log(carro)
        if(carro.length >= 1){
           AllPrices.innerHTML=toThousand(carro.reduce((a,b) => {return Number(+a - -b) }))
            }    
        })
     
 /* --------------Precio al Cambiar las Cantidades--------------- */
 
    productos.forEach((product)=>{
        let price = Number(product.children[1].getAttribute("target"))
        let select = product.children[2];
        let Total = product.children[3];
        Total.innerHTML= toThousand(price)
        
/* --------------SI CAMBIA EL PRODUCTO------------------------ */
        if(product.style.display !== "none"){
        product.onchange = function() {
        Total.innerHTML = "$" + toThousand(+select.value * price)
        let carro=[]
        
        ProdPrice.forEach(t => {
        JSON.parse(carrito).forEach(item =>{ 
            if(item ==(t.getAttribute("target"))){
                carro.push((t.textContent).replace("." , "").replace(("$"),("")))    
            }   })  })
        AllPrices.innerHTML=toThousand(carro.reduce((a,b) => {return Number(+a + +b) }))
            console.log(carro) 
        }}       
        })

    
/* ------------------Boton para Vaciar Carro----------------------- */
        btnVaciar.addEventListener('click' , () => {
        let carrito = new Array();
        AllPrices.innerHTML ="0"
        localStorage.setItem("carrito", JSON.stringify(carrito));
        productos.forEach(product=>{
            product.style.display="none"})
        })
/* ----------------Boton para eliminar Producto--------------------- */
        let items = JSON.parse(carrito);

        btnDelete.forEach(btn => {
        btn.addEventListener('click' , (e) => {
            let ProductDelete = +btn.getAttribute("target")
            
            for (let i = 0; i < items.length; i++) {
            if(items[i] == ProductDelete){
                items.splice(i,1);
            break;
            }  
        }

/* ------------------ACTUUALIZAR EL PRECIO FINAL--------------------- */
            let resta = btn.previousElementSibling.textContent.replace("." , "").replace(("$"),(""))
            let precioFinal = (AllPrices.textContent.replace("." , "").replace("." , "").replace(("$"),("")))
            AllPrices.innerHTML=toThousand(Number(precioFinal-resta))
            console.log(items + " item")
            console.log(resta + " restaa")
            console.log(precioFinal + "precioFInal")
            localStorage.setItem("carrito",JSON.stringify(items)) 
            btn.parentElement.style.display="none"

            })
        
            })


/* -------------------------------------------------------------- */
/* req.session.id */
function redirect(){
    window.location.href = "http://localhost:4000/usuario/perfil/agregar/direccion/:id";
}

function Direccion(msg) {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: false,
        timerProgressBar: false,
        html:`
        <div class="div-btn-direccion">
        <button class="btns-direccion" onClick="redirect()" >
        Añadir Direccion
        </button>
        <button class="btns-direccion" >
        Omitir
        </button></div>`,
        buttonsStyling:true,
        allowOutsideClick:true
        
      })              
      Toast.fire({
        icon: 'warning',
        title: `${msg}`
      })
}

fetch("http://localhost:4000/api/Usuario")
    .then((response)=>response.json())
    .then((data)=>{ 
        let user = data.data.find((user) => {if(user.id == SessionId){return user}}) 
        console.log(SessionId)
        direccion.addEventListener('click' ,(e) =>{
        if(user.direccion_id == null){
            Direccion("direccion no registrada")
            e.preventDefault()
        }
    })
        
    })
    .catch((error)=> console.log(error))

/* ------------------------------------------------------ */
async function direccionNew(){

    const { value: formValues } = await Swal.fire({
        title: 'Direccion',
        html:
        '<div class="newDireccion">'+
          '<label id="">Nueva Direccion</label><input id="swal-input1" class="swal2-input">' +
          '<label id="">Quien lo Recibe?</label><input id="swal-input2" class="swal2-input">'+
        '</div>',
        buttonsStyling:true,
        focusConfirm: false, 
        showCancelButton: true,        
        preConfirm: () => {
            if(document.getElementById('swal-input1').value == "" ||
            document.getElementById('swal-input2').value == ""){
                return "Datos invalidos"
            }else{
                return ( 
            "En  "+document.getElementById('swal-input1').value+ "   recibira   " +
            document.getElementById('swal-input2').value
               )
        }
       
            }

         
      })
            if (formValues) {
                    Swal.fire(JSON.stringify(formValues))
                }else{
                    return false
                }
           
      
        
}

newDireccion.addEventListener('click' , (e)=>{
    direccionNew()
    if(!direccionNew){
        e.preventDefault()
    }
    console.log(document.getElementById('swal-input2').value + "holaaa")
    /* if(formValues == "datos invalido"){
        e.preventDefault()
    } */
})
/*--------------------------------------------*/ 
fetch("http://localhost:4000/api/Usuario")
    .then((response)=>response.json())
    .then((data)=>{ 
        let user = data.data.find((user) => {if(user.id == SessionId){return user}}) 
        console.log(user)
    
   

inputtarjeta.addEventListener('click' , (e) =>{
async function Tarjeta(){


const inputOptions = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        'Con Debito': 'Tarjeta de Debito',
        'Con Tarjeta de Credio': 'Tarjeta de Credito',
        'Con Tras. Bancaria':'Trans. Bancaria'
      })
    }, 1000)
  })
  
  const { value: Tarjeta } = await Swal.fire({
    title: 'Selecciona metodo',
    input: 'radio',
    width:'50%',
    showCancelButton: true,
    allowOutsideClick:false,
    stopKeydownPropagation:false,
    inputOptions: inputOptions,
    inputValidator: (value) => {
      if (!value) {
        return 'Selleccione una opcion'
      }
    }
  })
 
}
Tarjeta()

})
 
})

/* ------------------------------------------- */

let Finalizar = document.querySelector('button#Finalizar')

Finalizar.addEventListener('click' , () => {
    
             
            console.log(carrito)
        
            fetch("http://localhost:4000/api/Usuario")
            .then((response)=>response.json())
            .then((data)=>{ 
                let user = data.data.find((user) => {if(user.id == SessionId){return user}}) 
                console.log(user)
function Finaliza(fin) {
    
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: false,
        timerProgressBar: false,
        buttonsStyling:true,
        allowOutsideClick:true
        
      })    
    JSON.parse(carrito).forEach(item =>{  })     
     Swal.fire({ html: `
     <div class="div-btn-direccion">
    ${JSON.parse(carrito)}
     </div>GRACIAS POR SU COMPRA ! 
    Se enviaran los detalles a tu correo  : ${user.email} `,
    title:`${fin}` })

}
Finaliza("Finalizacion de Compra")
})})
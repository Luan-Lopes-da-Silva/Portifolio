let primeironome= document.getElementById("primeiroNome")
let labelprimeiroNome= document.getElementById("labelprimeiroNome")
validprimeiroNome = false

let segundoNome=  document.getElementById('segundoNome')
let labelsegundoNome= document.getElementById ("labelsegundoNome")
validsegundoNome  = false

let email = document.getElementById ('email')
let labelEmail = document.getElementById('labelEmail')
validemail  = false

let confirmEmail = document.getElementById('confirm')
let labelconfirmEmail = document.getElementById('labelconfirmEmail')
validconfirmEmail = false

let senha = document.getElementById('pwd')
let labelSenha = document.getElementById('labelSenha')
validsenha  = false

let confirmSenha = document.getElementById ('confirmpwd')
let labelconfirmSenha = document.getElementById('labelconfirmSenha')
validconfirmSenha =  false


let msgError = document.getElementById('msgError')
let msgSucess =  document.getElementById('msgSucess')

primeironome.addEventListener('keyup', () =>{
  if(primeironome.value.length <=2 ){
   labelprimeiroNome.setAttribute('style', 'color:green')  
   primeironome.setAttribute('style' , 'border-color:green')
   validprimeiroNome= false
  }
   else{
   labelprimeiroNome.setAttribute('style', 'color: white')
   primeironome.setAttribute('style' , 'border-color:white')
   validprimeiroNome= true
   }
   })

segundoNome.addEventListener('keyup' , () =>{
  if(segundoNome.value.length <= 2){
    labelsegundoNome.setAttribute('style' , 'color:green')
    segundoNome.setAttribute('style' , 'border-color:green')
  validsegundoNome=false
  }
  else{
    labelsegundoNome.setAttribute('style' , 'color:white')
    segundoNome.setAttribute('style' , 'border-color:white')
  validsegundoNome = true
  }

})
  

email.addEventListener ("keyup", ()=>{
  if(email.value.length <=6){
    labelEmail.setAttribute ('style' , 'color:green')
    email.setAttribute('style' , 'border-color:green')
    validemail = false
  }else{
    labelEmail.setAttribute('style' , 'color:white')
    email.setAttribute('style' , 'border-color:white')
    validemail = true
  }

})

confirmEmail.addEventListener ("keyup", ()=>{
  if(email.value != confirmEmail.value){
    labelconfirmEmail.setAttribute('style' , 'color:green')
    confirmEmail.setAttribute('style' , 'border-color:green')
    validconfirmEmail = false
  }else{
    labelconfirmEmail.setAttribute('style' , 'color:white')
    confirmEmail.setAttribute('style' , 'border-color:white')
    validconfirmEmail= true
  }

})


senha.addEventListener ("keyup", ()=>{
  if(senha.value.length <=6){
    labelSenha.setAttribute ('style' , 'color:green')
    senha.setAttribute('style', 'border-color: green')
    validsenha = false
  }else{
    labelSenha.setAttribute ('style' , 'color:white')
    senha.setAttribute('style', 'border-color: white')
    validsenha = true
  }

})


confirmSenha.addEventListener ("keyup", ()=>{
  if(senha.value != confirmSenha.value ){
    labelconfirmSenha.setAttribute ('style' , 'color:green')
    confirmSenha.setAttribute ('style' , 'border-color:green')
    validconfirmSenha = false
  }else{
    labelconfirmSenha.setAttribute ('style' , 'color:white')
    confirmSenha.setAttribute ('style' , 'border-color:white')
    validconfirmSenha = true
  }

})

function validar(){
  if (validprimeiroNome && validsegundoNome && validemail && validconfirmEmail && validsenha && validconfirmSenha){
    msgSucess.setAttribute('style' , 'display:block')
    msgError.setAttribute('style' , 'display:none')
  }
  else{
    msgError.setAttribute('style' , 'display:block')
    msgSucess.setAttribute('style' , 'display:none')
  }


}
let olho = document.getElementById('mostrar')
let senha = document.getElementById('senha')
let enviar = document.getElementById('enviar')
let load = document.getElementById('load')

function mostrar(){
  if(senha.type == "password"){
   senha.type = 'text'   
  }
  else{
   senha.type = 'password'   
  }  
}


function clicar (){
 enviar.style.display = 'none'
 load.style.display = 'block'

 setTimeout(() =>{
 window.location.href = 'home.html'
},3000)
}


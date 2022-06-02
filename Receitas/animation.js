 
  let ativar = window.document.getElementById('animar')
  let box = window.document.getElementById('box')
  ativar.addEventListener('click', () =>{
  box.classList.toggle('animar')
  })




  


function clicar(){
let enviar = window.document.getElementById('enviar')
let load = window.document.getElementById('load')
enviar.style.display = 'none'
load.style.display = 'block'
setTimeout(()=>{
  window.location.href = 'Home.html'
  },3000)
  }



function mostrar(){
let mostrar = window.document.getElementById('mostrar')
let password = window.document.getElementById('senha')
if(senha.type == 'password'){
  senha.type='text'
}
else{
  senha.type='password'  
}
}



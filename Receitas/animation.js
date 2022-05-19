 
  let ativar = window.document.getElementById('animar')
  let box = window.document.getElementById('box')
  ativar.addEventListener('click', () =>{
  box.classList.toggle('animar')
  })




  


function clicar(){
let enviar = window.document.getElementById('enviar')
let load = window.document.getElementById('load')
let usuario = window.document.getElementById('usuario')
let senha = window.document.getElementById('senha')
load.style.display = 'block'
enviar.style.display = 'none'
if(usuario === 'sangbom' && senha === '1234'){
        setTimeout(function(){
        window.alert('Login realizado com sucesso !!!')
        window.location.href="Home.html"
        },3000);
        
        }
 else{
        setTimeout(function(){
        window.alert('Usuario ou senha incorretas !!!')
        window.location.href="SenhaInvalida.html"
        },3000);
        }
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
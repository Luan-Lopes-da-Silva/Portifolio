 
  let ativar = window.document.getElementById('animar')
  let box = window.document.getElementById('box')
  ativar.addEventListener('click', () =>{
  box.classList.toggle('animar')
  })




  


function clicar(){
let enviar = window.document.getElementById('enviar')
let load = window.document.getElementById('load')

let usuario = window.document.getElementById('usuario')
let labelUsuario= window.document.getElementById('labelUsuario')


let senha = window.document.getElementById('senha')
let labelSenha= window.document.getElementById('labelSenha')

letmsgError= window.document.getElementById('msgError')
letmsgSucess = window.document.getElementById('msgSucess')

let listaUser= []

let uservalid = {
nome:'',
user:'',
senha:'',
}
listaUser=JSON.parse(localStorage.getItem('listaUser'))
listaUser.forEach((item)=>{
if(usuario.value == item.usuarioCad && senha.value == item.senhaCad){
  uservalid = {
     nome:item.nomeCad,
     usuario:item.usuarioCad,
     senha:item.senhaCad 
  }
}
})  


if(usuario.value == uservalid.usuario && senha.value == uservalid.senha){
  load.style.display = 'block'
  enviar.style.display = 'none'
  let token = Math.random().toString(16).substring(2) +  Math.random().toString(16).substring(2) 
  localStorage.setItem('token' , token)
  localStorage.setItem('userLogado', JSON.stringify(uservalid))
 
  setTimeout(()=>{
    
   window.location.href="Home.html"
 
    },3000);
    
   
    
}else{
  labelUsuario.setAttribute('style' , 'color:red')
  usuario.setAttribute('style' , 'border-color:red')
  labelSenha.setAttribute('style' , 'color:red')
  senha.setAttribute('style' , 'border-color:red')
  msgError.setAttribute('style', 'display:block')
  msgError.innerHTML= 'Usuario ou senha incorretos'
  usuario.focus()


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



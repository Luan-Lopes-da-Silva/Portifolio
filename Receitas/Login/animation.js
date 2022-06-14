//VARIAVEIS//
let slide = document.getElementById('animar')
let box = document.getElementById('box')
let olho = document.getElementById('mostrar')
let btn = document.getElementById('enviar')
let load = document.getElementById('load')

let usuario = document.getElementById('usuario')
let userLabel = document.getElementById('userLabel')

let senha = document.getElementById('senha')
let senhaLabel = document.getElementById('senhaLabel')

let msgError=document.getElementById('msgError')
let listaUser = []

let userValid ={
  nome:'',
  user:'',
  senha:''  
}





//Animação entrada de Form login//
slide.addEventListener('click', () =>{
box.classList.toggle('animar')
})
//FIM//



//Função mostrar/Ocultar senha//
function mostrar(){
if(senha.type == 'password'){
    senha.type = 'text'
}else{
senha.type = 'password'
}    
}
//FIM//

//Função ao clicar carrega load//
function clicar(){
//Lista de usuarios cadastrados//
listaUser = JSON.parse(localStorage.getItem('listaUser'))
listaUser.forEach((item) => {

 //Se todos os campos tiverem corretos incremetar ao array   
 if(usuario.value == item.userCad && senha.value == item.senhaCad){
    userValid={
    nome:item.nome,
    user: item.userCad,
    senha:item.senhaCad    
    }
 }   
})

//Validação de que o usuario e senha existem
if(usuario.value == userValid.user && senha.value == userValid.senha){
btn.style.display='none'
load.style.display='block'
setTimeout(()=>{
 window.location.href = "/Home/Home.html"   
},3000)
}
else{
usuario.style.color= 'red'
userLabel.style.color= 'red'
senha.style.color = 'red'
senhaLabel.style.color='red'
msgError.style.display='block'
msgError.innerHTML = '<strong>Usuario ou senha incorretos</strong>'
usuario.focus()
}


}

//Squares//
let ulSquares = document.querySelector('ul.squares')
for(let i=0; i<11; i++){
const li = document.createElement("li")
const size = Math.floor(Math.random()*(120-10)+10);
const position = Math.random() * (99-1)+1;
const delay =Math.random() * (5,0.1)+0.1;
const duration =Math.random() * (24,12)+12;
li.style.width =`${size}px`
li.style.height =   `${size}px`
li.style.bottom =   `${size}px`
li.style.left = `${position}%`
li.style.animationDelay =`${delay}s`
li.style.animationDuration =`${duration}s`
li.style.animationTimingFunction = `cubic-bezier(${Math.random()},${Math.random()},${Math.random()},${Math.random()}) `
ulSquares.appendChild(li)
}

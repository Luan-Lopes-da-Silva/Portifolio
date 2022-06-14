//VARIAVEIS//
let slide = document.getElementById('animar')
let box = document.getElementById('box')
let olho = document.getElementById('mostrar')
let btn = document.getElementById('enviar')
let load = document.getElementById('load')
let senha = document.getElementById('senha')


//FIM//



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
btn.style.display='none'
load.style.display='block'
setTimeout(()=>{
 window.location.href = "/Home/Home.html"   
},3000)
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

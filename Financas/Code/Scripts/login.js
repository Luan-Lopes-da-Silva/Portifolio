const email = document.querySelector('#email')
const senha = document.querySelector('#senha')
const keys = Object.keys(localStorage)


let find

function checkUser(){
keys.forEach((key)=>{
  const usuarioStr = localStorage.getItem(key)
  var usuarioObj = JSON.parse(usuarioStr)
  if(email.value === usuarioObj.email && senha.value === usuarioObj.senha){
    document.querySelector('#login').style.display = 'none'
    document.querySelector('.loading').style.display = 'block'
  setTimeout(function(){
    window.location.href = 'http://127.0.0.1:5500/Pages/home/home.html'
    },2000)
    localStorage.setItem('logado',JSON.stringify(usuarioObj))
    }
  })
} 
document.querySelector('#login').addEventListener('click',checkUser)




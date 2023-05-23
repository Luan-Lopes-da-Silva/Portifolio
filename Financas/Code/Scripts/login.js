const email = document.querySelector('#email')
const senha = document.querySelector('#senha')
const keys = Object.keys(localStorage)

function checkUser(){
 
keys.forEach((key)=>{
  const usuarioStr = localStorage.getItem(key)
  let usuarioObj = JSON.parse(usuarioStr)
  if(email.value === usuarioObj.email && senha.value === usuarioObj.senha){
    document.querySelector('#login').style.display = 'none'
    document.querySelector('.loading').style.display = 'block'
  let logado = {
    usuario : usuarioObj.nome,
    logado : true,
    acess:0
  }
  setTimeout(function(){
    logado.acess++
    window.location.href = 'http://127.0.0.1:5500/Pages/home/home.html'
    localStorage.setItem('logado',JSON.stringify(logado))
    },2000)
    }
  })
} 
document.querySelector('#login').addEventListener('click',checkUser)




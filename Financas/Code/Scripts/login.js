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
    acess: 0
  }

 

  setTimeout(function(){
    window.location.href = 'http://127.0.0.1:5500/Pages/home/home.html'
    logado.acess++
    localStorage.setItem('logado',JSON.stringify(logado))
    logado.acess++
    localStorage.setItem('logado',JSON.stringify(logado))
    const logadoStorage = localStorage.getItem('logado')
    const logadoObj = JSON.parse(logadoStorage)
    if(logadoObj.acess === 1){
      alert('É a primeira vez no site')
    }else if(logadoObj.acess>1){
      alert('Pode mostrar home')
    }
    },2000)
    }
  })

} 
document.querySelector('#login').addEventListener('click',checkUser)




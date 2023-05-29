const userLocalStorage = localStorage.getItem('Usuarios')
let obj = JSON.parse(userLocalStorage)
let email = document.querySelector('#email')
const form1 = document.querySelector('.form1')
const novaSenhaContainer = document.querySelector('.nova-senha')
const novaSenha = document.querySelector('#novaSenha')
const btn2 = document.querySelector('.nova-senha button')
const btn = document.querySelector('.form1 button')
const confirmSenha = document.querySelector('#confirmNovaSenha')

function verifyEmail(){
  if(obj.email === email.value){
  form1.classList.add('ativo')
  novaSenhaContainer.classList.add('ativo')
  }else{
    alert('Não conseguimos encontrar seu email')
  } 
}

novaSenha.addEventListener('keyup',function(ev){
  if(ev.currentTarget.value.length<8){
    ev.currentTarget.previousElementSibling.innerText = 'Preencha corretamente'
    ev.currentTarget.previousElementSibling.classList.add('error')
  }else{
    ev.currentTarget.previousElementSibling.innerText = 'Preenchido corretamente'
    ev.currentTarget.previousElementSibling.classList.add('right')
    btn2.addEventListener('click',changePassword)
  } 
  })

confirmSenha.addEventListener('keyup',function(ev){
  if(confirmSenha.value!==novaSenha.value){
    confirmSenha.previousElementSibling.innerText = 'Senhas diferentes'
    confirmSenha.previousElementSibling.classList.add('error')
  }else{
    confirmSenha.previousElementSibling.innerText = 'Preenchido corretamente'
    confirmSenha.previousElementSibling.classList.add('right')
    btn2.addEventListener('click',changePassword)
  } 
  })

function changePassword(){
obj.senha = novaSenha.value
localStorage.setItem('Usuarios',JSON.stringify(obj))
btn2.style.display = 'none'
document.querySelector('.loading').style.display = 'block'
setTimeout(()=>{
window.location.href = '../../Pages/login/login.html'
},2000)
}




btn.addEventListener('click',verifyEmail)


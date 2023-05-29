const email = document.querySelector('#email')
const senha = document.querySelector('#senha')
const localStorageItem = localStorage.getItem('Usuarios')
const objLocalStorage = JSON.parse(localStorageItem)
const keysObjeto = Object.keys(JSON.parse(localStorageItem))
let spanSenha = senha.parentElement.previousElementSibling
let spanEmail = email.previousElementSibling
let icon = document.querySelector('#showPassword')

function checkUser(){
  if(objLocalStorage.email === email.value && objLocalStorage.senha === senha.value){
  objLocalStorage.logado = true
  localStorage.setItem('Usuarios',JSON.stringify(objLocalStorage))
  document.querySelector('#login').style.display = 'none'
  document.querySelector('.loading').style.display = 'block'
  spanSenha.innerText = ''
  spanEmail.innerText = ''
  spanEmail.classList.remove('error')
  spanSenha.classList.remove('error')
  setTimeout(()=>{
  window.location.href = '../../Pages/home/home.html'
  },2000)
  }else if(objLocalStorage.email === email.value && objLocalStorage.senha !== senha.value){
  spanSenha.innerText = 'Senha incorreta'
  spanSenha.classList.add('error')
  }else if(objLocalStorage.senha === senha.value && objLocalStorage.email !== email.value){
    spanSenha.innerText = ''
    spanEmail.innerText = 'Email invalido'
    spanEmail.classList.add('error')
  }
  else{
    alert('Usuario não encontrado')
  }
  } 
function showPassword(){
if(senha.type === 'password'){
senha.type = 'text'
icon.setAttribute('src','../../Assets/Svgs/visibility_off_FILL0_wght400_GRAD0_opsz48.svg')
}else{
senha.type = 'password'
icon.setAttribute('src','../../Assets/Svgs/visibility_FILL0_wght400_GRAD0_opsz48 (1).svg')
}
}

icon.addEventListener('click',showPassword)
document.querySelector('#login').addEventListener('click',checkUser)




const email = document.querySelector('#email')
const senha = document.querySelector('#senha')
const localStorageItem = localStorage.getItem('Usuarios')
const objLocalStorage = JSON.parse(localStorageItem)
const keysObjeto = Object.keys(JSON.parse(localStorageItem))
let spanSenha = senha.previousElementSibling
let spanEmail = email.previousElementSibling

function checkUser(){
  if(objLocalStorage.email === email.value && objLocalStorage.senha === senha.value){
  objLocalStorage.logado = true
  localStorage.setItem('Usuarios',JSON.stringify(objLocalStorage))
  document.querySelector('#login').style.display = 'none'
  document.querySelector('.loading').style.display = 'block'
  spanSenha.innerText = ''
  spanEmail.innerText = ''
  setTimeout(()=>{
  window.location.href = 'http://127.0.0.1:5500/Pages/home/home.html'
  },2000)
  }else if(objLocalStorage.email === email.value && objLocalStorage.senha !== senha.value){
  spanSenha.innerText = 'Senha incorreta'
  }else if(objLocalStorage.senha === senha.value && objLocalStorage.email !== email.value){
    spanSenha.innerText = ''
    spanEmail.innerText = 'Email invalido'
  }
  else{
    alert('Usuario não encontrado')
  }
  } 
document.querySelector('#login').addEventListener('click',checkUser)




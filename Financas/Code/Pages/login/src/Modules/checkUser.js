export default function(){
  const localStorageItem = localStorage.getItem('Usuarios')
  const localStorageObj = JSON.parse(localStorageItem)
  const password = document.querySelector('#password')
  let passwordSpan = password.parentElement.previousElementSibling
  const email = document.querySelector('#email')
  let emailSpan = email.previousElementSibling
  
  
  function checkUser(){
    if(localStorageObj.email === email.value && localStorageObj.senha === password.value){
    localStorageObj.logado = true
    localStorage.setItem('Usuarios',JSON.stringify(localStorageObj))
    document.querySelector('#login').style.display = 'none'
    document.querySelector('.loading').style.display = 'block'
    passwordSpan.innerText = ''
    emailSpan.innerText = ''
    emailSpan.classList.remove('error')
    passwordSpan.classList.remove('error')
    setTimeout(()=>{
    window.location.href = '../../home/dist/home.html'
    },2000)
    }else if(localStorageObj.email === email.value && localStorageObj.senha !== password.value){
    passwordSpan.innerText = 'Senha incorreta'
    passwordSpan.classList.add('error')
    }else if(localStorageObj.senha === password.value && localStorageObj.email !== email.value){
      passwordSpan.innerText = ''
      emailSpan.innerText = 'Email invalido'
      emailSpan.classList.add('error')
    }
    else{
      alert('Usuario não encontrado')
    }
    }
    document.querySelector('#login').addEventListener('click',checkUser) 
}

const nome = document.querySelector('#nome')
const emailInput = document.querySelector('#email')
const confirmEmail = document.querySelector('#confirmEmail')
const senha = document.querySelector('#senha')
const confirmSenha = document.querySelector('#confirmSenha')
const salario = document.querySelector('#salario')

nome.addEventListener('keyup',function(ev){
  if(nome.value.length === 0 || nome.value.length<2){
  const span = ev.currentTarget.previousElementSibling
  span.classList.remove('right')
  span.classList.add('error')
  span.innerText = 'Preencha Corretamente'
  }else{
  const span = ev.currentTarget.previousElementSibling
  span.classList.remove('error')
  span.classList.add('right')
  span.innerText = 'Campo Preenchido corretamente'
  }
  })


emailInput.addEventListener('keyup',function(ev){
if(emailInput.value.length === 0 || emailInput.value.length<12){
const span = ev.currentTarget.previousElementSibling
span.classList.remove('right')
span.classList.add('error')
span.innerText = 'Preencha Corretamente'
}else{
const span = ev.currentTarget.previousElementSibling
span.classList.remove('error')
span.classList.add('right')
span.innerText = 'Campo Preenchido corretamente'
}
})

confirmEmail.addEventListener('keyup',function(ev){
 if(confirmEmail.value !=emailInput.value){
  const span = ev.currentTarget.previousElementSibling
  span.classList.remove('right')
  span.classList.add('error')
  span.innerText = 'Email diferente'
 }else{
  const span = ev.currentTarget.previousElementSibling
  span.classList.remove('error')
  span.classList.add('right')
  span.innerText = 'Campo Preenchido corretamente'
 }
})
senha.addEventListener('keyup',function(ev){
  if(senha.value.length === 0 || senha.value.length<8){
    const span = ev.currentTarget.parentElement.previousElementSibling
    span.classList.remove('right')
    span.classList.add('error')
    span.innerText = 'Preencha Corretamente'
    }else{
    const span = ev.currentTarget.parentElement.previousElementSibling
    span.classList.remove('error')
    span.classList.add('right')
    span.innerText = 'Campo Preenchido corretamente'
    }
})
confirmSenha.addEventListener('keyup',function(ev){
  if(confirmSenha.value !=senha.value){
    const span = ev.currentTarget.parentElement.previousElementSibling
    span.classList.remove('right')
    span.classList.add('error')
    span.innerText = 'Senha diferente'
   }else{
    const span = ev.currentTarget.parentElement.previousElementSibling
    span.classList.remove('error')
    span.classList.add('right')
    span.innerText = 'Campo Preenchido corretamente'
   }
})

function showPassword(ev){
if(ev.currentTarget.previousElementSibling.type === 'password'){
  ev.currentTarget.previousElementSibling.type = 'text'
}else{
  ev.currentTarget.previousElementSibling.type ='password'
}
}

function criarPerfil(ev){
ev.preventDefault();
if(emailInput.previousElementSibling.innerText === 'Campo Preenchido corretamente' && confirmEmail.previousElementSibling.innerText === 'Campo Preenchido corretamente'  && senha.parentElement.previousElementSibling.innerText === 'Campo Preenchido corretamente' && confirmSenha.parentElement.previousElementSibling.innerText === 'Campo Preenchido corretamente' && nome.previousElementSibling.innerText === 'Campo Preenchido corretamente'){
let usuario = {
  nome:nome.value,
  email:emailInput.value,
  senha:senha.value,
  salario:salario.value
}
localStorage.setItem(nome.value, JSON.stringify(usuario))
setTimeout(function() {
window.location.href = 'http://127.0.0.1:5500/Pages/login/login.html';
}, 3000);
}else{
   alert('Preencha todos os campos')
}
}
  

const mostrarSenha1 = document.querySelector('#register .form .senha img')
const mostrarSenha2 = document.querySelector('#img2')
const btnConfirma = document.querySelector('button')
mostrarSenha1.addEventListener('click',showPassword)
mostrarSenha2.addEventListener('click',showPassword)
btnConfirma.addEventListener('click',criarPerfil)









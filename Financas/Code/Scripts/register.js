const nome = document.querySelector('#nome')
const emailInput = document.querySelector('#email')
const confirmEmail = document.querySelector('#confirmEmail')
const senha = document.querySelector('#senha')
const confirmSenha = document.querySelector('#confirmSenha')
const salario = document.querySelector('#salario')
const main = document.querySelector('main')
const aviso = document.querySelector('.register')

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
  if(!emailInput.value.match((/.{2,}(?<=)@(?=)\w{2,}\.(?=)\w{2,}/g))){
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
  ev.currentTarget.setAttribute('src','../../Assets/Svgs/visibility_off_FILL0_wght400_GRAD0_opsz48.svg')
}else{
  ev.currentTarget.previousElementSibling.type ='password'
  ev.currentTarget.setAttribute('src','../../Assets/Svgs/visibility_FILL0_wght400_GRAD0_opsz48 (1).svg')
}
}

function criarPerfil(ev){
ev.preventDefault();
const usersLocalStorage = localStorage.getItem('Usuarios')
const objLocalStorage = JSON.stringify(usersLocalStorage)
const emailExiste = objLocalStorage.includes(emailInput.value)
if(emailInput.previousElementSibling.innerText === 'Campo Preenchido corretamente' && confirmEmail.previousElementSibling.innerText === 'Campo Preenchido corretamente'  && senha.parentElement.previousElementSibling.innerText === 'Campo Preenchido corretamente' && confirmSenha.parentElement.previousElementSibling.innerText === 'Campo Preenchido corretamente' && nome.previousElementSibling.innerText === 'Campo Preenchido corretamente' && !emailExiste){
 let usuario = {
  nome:nome.value,
  email:emailInput.value,
  senha:senha.value,
  salario:salario.value,
 }
 localStorage.setItem('Usuarios',JSON.stringify(usuario))
 setTimeout(()=>{
  window.location.href = '../../Pages/login/login.html'
 },1000)
}
else if(nome.value === '' || emailInput.value === '' || confirmEmail.value==='' || senha.value==='' || confirmSenha.value === '' || salario.value === ''){
  alert('Preencha todos os campos')
 }else{
   emailInput.previousElementSibling.innerText = 'Email já utilizado'
   emailInput.previousElementSibling.classList.add('error')
   emailInput.previousElementSibling.classList.remove('right')
   aviso.classList.add('ativo')
   main.classList.add('ativo')
 }
 }

const img1 = document.querySelector('.form .senha img')
img1.addEventListener('click',showPassword)
const img2 = document.querySelector('#img2')
img2.addEventListener('click',showPassword)
const btnConfirma = document.querySelector('button')
btnConfirma.addEventListener('click',criarPerfil)







export default function(){
const name = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const confirmEmail = document.querySelector('#confirmEmail')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirmPassword')

name.addEventListener('keyup',function(ev){
  if(name.value.length === 0 || name.value.length<2){
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

password.addEventListener('keyup',function(ev){
  if(password.value.length === 0 || password.value.length<8){
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
confirmPassword.addEventListener('keyup',function(ev){
  if(confirmPassword.value !=password.value){
    const span = ev.currentTarget.parentElement.previousElementSibling
    span.classList.remove('right')
    span.classList.add('error')
    span.innerText = 'Senhas diferentes'
   }else{
    const span = ev.currentTarget.parentElement.previousElementSibling
    span.classList.remove('error')
    span.classList.add('right')
    span.innerText = 'Campo Preenchido corretamente'
   }
})
}
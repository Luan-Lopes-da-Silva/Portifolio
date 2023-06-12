export default function(){
  const name = document.querySelector('#name')
  const emailInput = document.querySelector('#email')
  const wage = document.querySelector('#wage')
  const main = document.querySelector('main')
  const warning = document.querySelector('.register')
  const confirmEmail = document.querySelector('#confirmEmail')
  const password = document.querySelector('#password')
  const confirmPassword = document.querySelector('#confirmPassword')
  
    function createUser(ev){
    ev.preventDefault();
    const usersLocalStorage = localStorage.getItem('Usuarios')
    const objLocalStorage = JSON.stringify(usersLocalStorage)
    const existsEmail = objLocalStorage.includes(emailInput.value)
    if(emailInput.previousElementSibling.innerText === 'Campo Preenchido corretamente' && confirmEmail.previousElementSibling.innerText === 'Campo Preenchido corretamente'  && password.parentElement.previousElementSibling.innerText === 'Campo Preenchido corretamente' && confirmPassword.parentElement.previousElementSibling.innerText === 'Campo Preenchido corretamente' && name.previousElementSibling.innerText === 'Campo Preenchido corretamente' && !existsEmail){
      let usuario = {
        nome:name.value,
        email:emailInput.value,
        senha:password.value,
        salario:parseFloat(wage.value),
        logado:false
       }
       localStorage.setItem('Usuarios',JSON.stringify(usuario))
      setTimeout(()=>{
       window.location.href = '../../login/dist/login.html'
      },1000)
    }
    else if(name.value === '' || emailInput.value === '' || confirmEmail.value==='' || password.value==='' || confirmPassword.value === '' || wage.value === ''){
      alert('Preencha todos os campos')
     }else{
       emailInput.previousElementSibling.innerText = 'Email já utilizado'
       emailInput.previousElementSibling.classList.add('error')
       emailInput.previousElementSibling.classList.remove('right')
       warning.classList.add('active')
       main.classList.add('active')
     }
     }
    
    const confirmBtn = document.querySelector('button')
    confirmBtn.addEventListener('click',createUser)
}

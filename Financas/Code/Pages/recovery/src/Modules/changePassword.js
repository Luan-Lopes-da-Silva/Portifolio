export default function(){
  const localStorageItem = localStorage.getItem('Usuarios')
  const localStorageObj = JSON.parse(localStorageItem)
  const newPassword = document.querySelector('#newPassword')
  const confirmPassword = document.querySelector('#confirmNewPassword')
  const btn2 = document.querySelector('.newPassword button')
  
  newPassword.addEventListener('keyup',function(ev){
    if(ev.currentTarget.value.length<8){
      ev.currentTarget.previousElementSibling.innerText = 'Preencha corretamente'
      ev.currentTarget.previousElementSibling.classList.add('error')
      ev.currentTarget.previousElementSibling.classList.remove('right')
    }else{
      ev.currentTarget.previousElementSibling.innerText = 'Preenchido corretamente'
      ev.currentTarget.previousElementSibling.classList.add('right')
      ev.currentTarget.previousElementSibling.classList.remove('error')
      btn2.addEventListener('click',changePassword)
    } 
    })
  
  confirmPassword.addEventListener('keyup',function(){
    if(confirmPassword.value!==newPassword.value){
      confirmPassword.previousElementSibling.innerText = 'Senhas diferentes'
      confirmPassword.previousElementSibling.classList.add('error')
      confirmPassword.previousElementSibling.classList.remove('right')
    }else{
      confirmPassword.previousElementSibling.innerText = 'Preenchido corretamente'
      confirmPassword.previousElementSibling.classList.add('right')
      confirmPassword.previousElementSibling.classList.remove('error')
      btn2.addEventListener('click',changePassword)
    } 
    })
  
  function changePassword(){
    localStorageObj.senha = newPassword.value
    localStorage.setItem('Usuarios',JSON.stringify(localStorageObj))
    btn2.style.display = 'none'
    document.querySelector('.loading').style.display = 'block'
    setTimeout(()=>{
    window.location.href = '../../login/dist/index.html'
    },2000)
  
  }
}
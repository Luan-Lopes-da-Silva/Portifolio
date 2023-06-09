export default function(){
  const userLocalStorage = localStorage.getItem('Usuarios')
  let obj = JSON.parse(userLocalStorage)
  const form1 = document.querySelector('.form1')
  const btn = document.querySelector('.form1 button')
  const newPasswordContainer = document.querySelector('.newPassword')
  const email = document.querySelector('#email')

  function verifyEmail(){
    if(obj.email === email.value){
    form1.classList.add('active')
    newPasswordContainer.classList.add('active')
    }else{
      alert('Não conseguimos encontrar seu email')
    } 
  }

  btn.addEventListener('click',verifyEmail)
}

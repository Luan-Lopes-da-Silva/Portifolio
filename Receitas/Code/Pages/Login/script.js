const inputEmail = document.querySelector('#email')
const inputSenha = document.querySelector('#senha')
let loading = document.querySelector('.lds-spinner')
const btn = document.querySelector('#btn')

function validaLogin(){
  if(inputEmail.value.length == '' || inputEmail.value.length <=10 || inputSenha.value.length == '' || inputSenha.value.length <=10){
    alert('Preencha corretamente')
  }else{
    alert('Preenchido corretamente')
    btn.style.display = 'none'
    loading.style.display = 'block'
    setTimeout(()=>{
      window.location.href = '../Home/index.html'
    },3000)
  }

}

btn.addEventListener('click', validaLogin)

console.log(inputEmail, inputSenha, btn)

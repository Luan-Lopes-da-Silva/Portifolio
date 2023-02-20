const inputChefe = document.querySelector('#chefe')
const inputAprendiz = document.querySelector('#aprendiz')
const resultadoChefe = document.querySelector('.resultadoChefe')
const resultadoAprendiz = document.querySelector('.resultadoAprendiz')
const inputEmail = document.querySelector('#email')
let validEmail = false
const inputConfirmaEmail = document.querySelector('#confirmaEmail')
let validConfirmaEmail = false
const inputSenha = document.querySelector('#senha')
let validSenha = false
const inputConfirmaSenha = document.querySelector('#confirmaSenha')
let validConfirmaSenha = false
const msgSucess = document.querySelectorAll('.msgSucess')
const msgError = document.querySelectorAll('.msgError')
const btn = document.querySelector('.btn')
let visiblePassword = document.querySelector('.password')
let hiddenPassword = document.querySelector('span')
let visiblePassword1 = document.querySelectorAll('.password')
let hiddenPassword1 = document.querySelectorAll('span')
let modal = document.querySelector('.preenchidoCorretamente')
let modalIncorreto = document.querySelector('.preenchidoIncorretamente')
let fecharBtnCorreto = document.querySelector('.preenchidoCorretamente .btnFecha')
let fecharBtnIncorreto = document.querySelector('.preenchidoIncorretamente .btnFecha')

console.log(fecharBtnCorreto)





function radioSelect(){
   if(inputChefe.checked==true){
    resultadoAprendiz.innerHTML = 'Voce escolheu a categoria Chefe'
   }else{
    resultadoAprendiz.innerHTML = 'Voce escolheu a categoria Aprendiz'
} 
}

function validaCampos(){
  if(inputEmail.value.length <=5 || inputEmail.value.length<=9 || inputEmail.value == ""){
    inputEmail.style.borderColor = 'red'
    msgError[0].style.display='block'
    msgSucess[0].style.display = 'none'
    validEmail
  
  }else if(inputEmail.value.length >=10 || inputEmail.value.length<=50){
    inputEmail.style.borderColor = 'green'
    msgSucess[0].style.display='block'
    msgError[0].style.display='none'
    validEmail = true
}
if(inputConfirmaEmail.value != inputEmail.value  || inputConfirmaEmail.value == ""){
  inputConfirmaEmail.style.borderColor = 'red'
  msgError[1].style.display='block'
  msgSucess[1].style.display = 'none'
  validConfirmaEmail

}else {
  inputConfirmaEmail.style.borderColor = 'green'
  msgSucess[1].style.display='block'
  msgError[1].style.display='none'
  validConfirmaEmail

}
if(inputSenha.value.length <=2 || inputSenha.value == ""){
  inputSenha.style.borderColor = 'red'
  msgError[2].style.display='block'
  msgSucess[2].style.display = 'none'
  validSenha

}else if(inputSenha.value.length >=6 || inputSenha.value.length <=20) {
  inputSenha.style.borderColor = 'green'
  msgSucess[2].style.display='block'
  msgError[2].style.display='none'
  validSenha = true

}
if(inputConfirmaSenha.value != inputSenha.value  || inputConfirmaSenha.value == ""){
  inputConfirmaSenha.style.borderColor = 'red'
  msgError[3].style.display='block'
  msgSucess[3].style.display = 'none'
  validConfirmaSenha

}else {
  inputConfirmaSenha.style.borderColor = 'green'
  msgSucess[3].style.display='block'
  msgError[3].style.display='none'
  validConfirmaSenha = true
}
}

function Cadastro(){
  if(inputChefe.checked == true || inputAprendiz.checked == true && validEmail == true && validConfirmaEmail == true && validSenha == true && validConfirmaSenha == true ){
    fecharBtnCorreto.addEventListener('click',function(){
      modal.close()
    })
 modal.showModal()
  }else{
    modalIncorreto.showModal()
    fecharBtnIncorreto.addEventListener('click',function(){
      modalIncorreto.close()
    })
}
}
function mostraSenha(){
if(inputSenha.type == 'password'){
inputSenha.type = 'text'
hiddenPassword.classList.add('hidden')
}else{
 inputSenha.type = 'password'
hiddenPassword.classList.remove('hidden')
}
}

function confirmaSenhaMostrar(){
  if(inputConfirmaSenha.type == 'password'){
    inputConfirmaSenha.type = 'text'
    hiddenPassword1[1].classList.add('hidden')
    }else{
     inputConfirmaSenha.type = 'password'
    hiddenPassword1[1].classList.remove('hidden')
    }
}





inputChefe.addEventListener('change',radioSelect)
inputAprendiz.addEventListener('change',radioSelect)
inputEmail.addEventListener('keyup',validaCampos)
inputConfirmaEmail.addEventListener('keyup',validaCampos)
inputSenha.addEventListener('keyup',validaCampos)
inputConfirmaSenha.addEventListener('keyup',validaCampos)
btn.addEventListener('click', Cadastro)
visiblePassword.addEventListener('click',mostraSenha)
visiblePassword1[1].addEventListener('click',confirmaSenhaMostrar)



export default function InitAnimaCartao(){
  const inputName = document.querySelector('#nome-cartao')
  const inputNumber = document.querySelector('#numero-cartao')
  const inputMM =  document.querySelector('#mm')
  const inputYY = document.querySelector('#yy')
  const inputCVV = document.querySelector('#cvv')
  const nameCard =  document.querySelector('#cardName')
  const numberCard = document.querySelector('#cardNumber')
  const cardMM = document.querySelector('#cardMonth')
  const cardYY = document.querySelector('#cardYear')
  const cardCvv = document.querySelector('#cardCvv')
  const btn = document.querySelector('#btn')
  const dialog = document.querySelector('#modal')
  const btnClose = document.querySelector('.close')
function animaCartao(){
nameCard.value = inputName.value
numberCard.value = inputNumber.value
cardMM.value = inputMM.value
cardYY.value = inputYY.value
cardCvv.value = inputCVV.value
}

function abrirModal(){
  dialog.showModal()
}

function fecharModal(){
  dialog.close()
}

btnClose.addEventListener('click',fecharModal)
btn.addEventListener('click',abrirModal)


inputName.addEventListener('keyup', animaCartao)
inputNumber.addEventListener('keyup', animaCartao)
inputMM.addEventListener('keyup', animaCartao)
inputYY.addEventListener('keyup', animaCartao)
inputCVV.addEventListener('keyup', animaCartao)

}
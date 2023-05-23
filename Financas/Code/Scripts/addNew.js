const inputs = document.querySelectorAll('input[type="radio"]')

function checkInput(ev){
if(ev.currentTarget.id === 'saldo'){
document.querySelector('.saldo').style.display = 'block'
document.querySelector('.operacao').style.display = 'none'
document.querySelector('.investimento').style.display = 'none'
document.querySelector('.cartao').style.display = 'none'
document.querySelector('.budget').style.display = 'none'
}else if(ev.currentTarget.id === 'cartao'){
document.querySelector('.cartao').style.display = 'block'
document.querySelector('.operacao').style.display = 'none'
document.querySelector('.investimento').style.display = 'none'
document.querySelector('.saldo').style.display = 'none'
document.querySelector('.budget').style.display = 'none'
}
else if(ev.currentTarget.id === 'operacao'){
  document.querySelector('.operacao').style.display = 'block'
  document.querySelector('.saldo').style.display = 'none'
  document.querySelector('.investimento').style.display = 'none'
  document.querySelector('.cartao').style.display = 'none'
  document.querySelector('.budget').style.display = 'none'
}
else if(ev.currentTarget.id === 'budget'){
  document.querySelector('.budget').style.display = 'block'
  document.querySelector('.operacao').style.display = 'none'
  document.querySelector('.saldo').style.display = 'none'
  document.querySelector('.investimento').style.display = 'none'
  document.querySelector('.cartao').style.display = 'none'
}
else{
  document.querySelector('.investimento').style.display = 'block'
  document.querySelector('.operacao').style.display = 'none'
  document.querySelector('.saldo').style.display = 'none'
  document.querySelector('.cartao').style.display = 'none'
  document.querySelector('.budget').style.display = 'none'

}
}

inputs.forEach((input)=>{
  input.addEventListener('click',checkInput)
})
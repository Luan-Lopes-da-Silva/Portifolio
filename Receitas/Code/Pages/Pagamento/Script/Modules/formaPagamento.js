export default function InitFormaDePagamento(){

  const inputs = document.querySelectorAll('.formas-de-pagamento input')
  const arrayInputs = Array.from(inputs)
  const formPagamento = document.querySelector('.form-pagamento')
  const formBoleto  = document.querySelector('.form-boleto')
  const formTransferencia  = document.querySelector('.form-transferencia')
  const formCartao  = document.querySelector('.form-cartao')



function formaDePagamento(){
  if(arrayInputs[0].checked){
    formPagamento.setAttribute('style', 'display:block')
    formCartao.setAttribute('style', 'display:none')
    formTransferencia.setAttribute('style', 'display:none') 
    formBoleto.setAttribute('style', 'display:none')

  }else if(arrayInputs[1].checked){
    formCartao.setAttribute('style', 'display:none')
    formPagamento.setAttribute('style', 'display:none')
    formBoleto.setAttribute('style', 'display:block')
    formTransferencia.setAttribute('style', 'display:none') 

  }
  else if(arrayInputs[2].checked){
    formCartao.setAttribute('style', 'display:none')
    formPagamento.setAttribute('style', 'display:none')
    formBoleto.setAttribute('style', 'display:none')
    formTransferencia.setAttribute('style', 'display:block') 
  }
  else{
    formPagamento.setAttribute('style', 'display:none')
    formBoleto.setAttribute('style', 'display:none')
    formTransferencia.setAttribute('style', 'display:none') 
    formCartao.setAttribute('style', 'display:block')
  }
}


arrayInputs.forEach((item)=>{
item.addEventListener('change',formaDePagamento)
})
}


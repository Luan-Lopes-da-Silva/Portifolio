const obj = localStorage.getItem('logado')
const objReal = JSON.parse(obj)
console.log(objReal)

function hello(){
 const sayHello = document.querySelector('h1') 
 const date =  new Date()
 const hours = date.getHours()
 const minutes = date.getMinutes()
 if(hours>6 && hours<13){
  sayHello.innerText = `Bom dia ${objReal.nome}`
 }else if(hours>13 && hours<=18){
  sayHello.innerText = `Boa tarde ${objReal.nome}`
  sayHello.style.width = 300+'px'
 }else{
  sayHello.innerText = `Boa noite ${objReal.nome}`
  sayHello.style.width = 300+'px'
 }
}

const valorSpan = document.querySelector('.saldo span')
const numeroConvertido = parseFloat(valorSpan.innerText.slice(3).replace(',','.'))

if(numeroConvertido<=19){
valorSpan.style.color = '#FF0000'
}else if(numeroConvertido>=20 && numeroConvertido<=80){
valorSpan.style.color = '#EBFF00'
}else if(numeroConvertido>80){
valorSpan.style.color = '#9EEF41'
}

const spanCartoes = document.querySelectorAll('.cartao .saldo')
spanCartoes.forEach((span)=>{
const spanConvertido =  parseFloat(span.innerText.slice(3).replace(',','.'))
if(spanConvertido<=19){
  span.style.color = '#FF0000'
  }else if(spanConvertido>=20 && spanConvertido<=80){
  span.style.color = '#EBFF00'
  }else if(spanConvertido>80){
  span.style.color = '#9EEF41'
  }
})

const spanOperacao = document.querySelector('.operacoes .situacao')
const situacao = parseFloat(spanOperacao.innerText.slice(0,2))
if(situacao<=20){
  spanOperacao.nextElementSibling.style.display = 'none'
  spanOperacao.style.color = '#9EEF41'
}else if(situacao>20 && situacao<=60){
  spanOperacao.nextElementSibling.style.display = 'none'
  spanOperacao.style.color = '#EBFF00'
}else{
  spanOperacao.nextElementSibling.style.display = 'block'
  spanOperacao.style.color = '#FF0000'
}

hello();
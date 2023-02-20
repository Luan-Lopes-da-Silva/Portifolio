let valoresUnitarios = document.querySelectorAll('.quantidade')
let arrayValoresUnitarios = Array.from(valoresUnitarios)
let total = document.querySelector('#total')
let inputQuantidade = document.querySelectorAll('.seletorQuantidade')
let arrayQuantidade = Array.from(inputQuantidade)
let taxas = document.querySelector('#taxas')
const valorCorreto1 = valoresUnitarios[0] .innerHTML.slice(3).replace(',' , '.')
const valorCorreto2 = valoresUnitarios[1] .innerHTML.slice(3).replace(',' , '.')
const valorCorreto3 = valoresUnitarios[2] .innerHTML.slice(3).replace(',' , '.')
const desconto = document.querySelector('#desconto')
const descontoValor =  document.querySelector('#descontos')



function totalCarrinho(){
  const totalItem1 = inputQuantidade[0].value * valorCorreto1
  const totalItem2 = inputQuantidade[1].value * valorCorreto2
  const totalItem3 = inputQuantidade[2].value * valorCorreto3
  total.innerHTML =  `R$ ${totalItem1 + totalItem2 + totalItem3}.00 `
  let totalLimpo = +total.innerHTML.slice(3).replace(',' , '.') 
  taxas.innerHTML = `R$ ${totalLimpo/100 * 1}0`
}

function calculoDesconto(){
  let totalParaDescontos = +total.innerHTML.slice(3).replace(',' , '.')
  if(desconto.value == 'RECEITAS5'){
    descontoValor.innerHTML = `R$ ${totalParaDescontos/100 * 5}0`
    return totalParaDescontos
  }else if(desconto.value == 'RECEITAS10'){
    descontoValor.innerHTML = `R$ ${totalParaDescontos/100 * 10}.00`
  }else if(desconto.value == 'RECEITAS15'){
    descontoValor.innerHTML = `R$ ${totalParaDescontos/100 * 15}.00`
  }
  else if(desconto.value == ''){
    descontoValor.innerHTML = `R$ 0.00`
  }
 }




inputQuantidade[0].addEventListener('change' , totalCarrinho,calculoDesconto)
inputQuantidade[1].addEventListener('change' , totalCarrinho)
inputQuantidade[2].addEventListener('change' , totalCarrinho)
desconto.addEventListener('change', calculoDesconto)
taxas.addEventListener('change' , totalCarrinho)
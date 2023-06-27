export function controlCardBalance(){
  const invoice1 = localStorage.getItem('Fatura Cartão 1')
  const invoice2 = localStorage.getItem('Fatura Cartão 2')
  const invoice3 = localStorage.getItem('Fatura Cartão 3')
  const balances = document.querySelectorAll('.balance')
  const sum1 = balances[1].innerText.replace(/[R$/s]/g,'') - invoice1
  const sum2 = balances[2].innerText.replace(/[R$/s]/g,'') - invoice2
  const sum3 = balances[3].innerText.replace(/[R$/s]/g,'') - invoice3
  const sum1Fixed = sum1.toFixed(2)
  const sum2Fixed = sum2.toFixed(2)
  const sum3Fixed = sum3.toFixed(2)
 
  if(invoice1 && invoice2 && invoice3){
    balances[1].innerText = `R$ ${sum1Fixed}`
    balances[2].innerText = `R$ ${sum2Fixed}`
    balances[3].innerText = `R$ ${sum3Fixed}`
  }else{
    balances[1].innerText = balances[1].innerText
    balances[2].innerText = balances[2].innerText
    balances[3].innerText = balances[3].innerText
  }

}
const balances = document.querySelectorAll('.balance')

export function warningBalance(){
  balances.forEach((balance)=>{
  const balanceNumb = parseFloat(balance.innerText.replace(/[R$\s]/g,''))
  if(balanceNumb<10){
  balance.style.color = '#f00' 
  }else if(balanceNumb<200){
  balance.style.color = '#EBFF00' 
  }else{
  balance.style.color = '#9EEF41' 
  }
  })
}

warningBalance()

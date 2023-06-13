export function controlBalance(){
  const balance = document.querySelector('#balance-account')
  const userObj = localStorage.getItem('Usuarios')
  let realObj = JSON.parse(userObj)
  const transfers = localStorage.getItem('Transferencia')
  let transfersObj = JSON.parse(transfers)

  balance.innerText = `R$ ${realObj.salario-transfersObj},00`
}
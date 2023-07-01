export function controlBalance(){
  const balance = document.querySelector('#balance-account')
  const userObj = localStorage.getItem('Usuarios')
  let realObj = JSON.parse(userObj)
  const date = new Date()
  const month = date.getMonth()
  const operationsJune = localStorage.getItem('Contas Junho')
  const operationsJuly = localStorage.getItem('Contas Julho')

console.log(month)
  if(month === 5){
    balance.innerText = `R$ ${realObj.salario-operationsJune},00`
    localStorage.setItem('Saldo',JSON.stringify(realObj.salario-operationsJune))
  }else if(month === 6){
    balance.innerText = `R$ ${realObj.salario-operationsJuly},00`
    localStorage.setItem('Saldo',JSON.stringify(realObj.salario-operationsJuly))
  }
}
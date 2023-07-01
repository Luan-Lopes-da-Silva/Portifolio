export function operationsControl(){
 const date = new Date().getMonth()
 let textOperation = document.querySelector('.container-operations .value')

  
 function checkOperationMonth(){
  if(date === 5){
  const monthValue = localStorage.getItem('Contas Junho') 
  textOperation.innerText = `R$ ${monthValue}.00`
  }else if(date===6){
  const monthValue = localStorage.getItem('Contas Julho') 
  textOperation.innerText = `R$ ${monthValue}.00`
  }
}
checkOperationMonth()

}
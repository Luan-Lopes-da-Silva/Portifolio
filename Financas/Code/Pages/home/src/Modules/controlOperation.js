export function controlOperation(){
 const date = new Date().getMonth()
 let textOperation = document.querySelector('.container-operations .value')
  textOperation.innerText = 'R$ 0.00'
  
 function checkOperationMonth(){
  if(date === 5){
  const monthValue = localStorage.getItem('Contas Junho') 
  textOperation.innerText = `R$ ${monthValue}.00`
  }
}
checkOperationMonth()

}
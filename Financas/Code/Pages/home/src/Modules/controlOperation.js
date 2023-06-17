export function controlOperation(){
 const date = new Date().getMonth()
 let textOperation = document.querySelector('.container-operations .value')
  textOperation.innerText = 'R$ 0.00'
  
 function checkOperationMonth(){
  if(date === 0){
  const monthValue = localStorage.getItem('Contas Janeiro') 
  const values = JSON.parse(monthValue)
  const sum = values.reduce(function(acc,value){
  return acc+value  
  })
  textOperation.innerText = `R$ ${sum}.00`
  }else if(date === 1){
  const monthValue = localStorage.getItem('Contas Fevereiro') 
  console.log('Estamos em Fevereiro')
  const values = JSON.parse(monthValue)
  const sum = values.reduce(function(acc,value){
  return acc+value  
  })
  textOperation.innerText = `R$ ${sum}.00`
  }else if(date === 2){
  const monthValue = localStorage.getItem('Contas Março') 
  const values = JSON.parse(monthValue)
   const sum = values.reduce(function(acc,value){
  return acc+value  
  })
  textOperation.innerText = `R$ ${sum}.00`
  }else if(date === 3){
  const monthValue = localStorage.getItem('Contas Abril')
  const values = JSON.parse(monthValue)
   const sum = values.reduce(function(acc,value){
  return acc+value  
  })
  textOperation.innerText = `R$ ${sum}.00`
  }else if(date === 4){
  const monthValue = localStorage.getItem('Contas Maio') 
  const values = JSON.parse(monthValue)
   const sum = values.reduce(function(acc,value){
  return acc+value  
  })
  textOperation.innerText = `R$ ${sum}.00`
  }else if(date === 5){
  const monthValue = localStorage.getItem('Contas Junho') 
  const values = JSON.parse(monthValue)
   const sum = values.reduce(function(acc,value){
   return acc+value  
  })
  textOperation.innerText = `R$ ${sum}.00`
  }else if(date === 6){
  const monthValue = localStorage.getItem('Contas Julho')
  const values = JSON.parse(monthValue)
   const sum = values.reduce(function(acc,value){
  return acc+value  
  })
  textOperation.innerText = `R$ ${sum}.00` 
  }else if(date === 7){
  const monthValue = localStorage.getItem('Contas Agosto') 
  const values = JSON.parse(monthValue)
   const sum = values.reduce(function(acc,value){
  return acc+value  
  })
  textOperation.innerText = `R$ ${sum}.00`
  }else if(date === 8){
  const monthValue = localStorage.getItem('Contas Setembro') 
  const values = JSON.parse(monthValue)
   const sum = values.reduce(function(acc,value){
  return acc+value  
  })
  textOperation.innerText = `R$ ${sum}.00`
  }else if(date === 9){
  const monthValue = localStorage.getItem('Contas Outubro')
  const values = JSON.parse(monthValue)
   const sum = values.reduce(function(acc,value){
  return acc+value  
  })
  textOperation.innerText = `R$ ${sum}.00`
  }else if(date === 10){
  const monthValue = localStorage.getItem('Contas Novembro') 
  const values = JSON.parse(monthValue)
   const sum = values.reduce(function(acc,value){
  return acc+value  
  })
  textOperation.innerText = `R$ ${sum}.00`
  }else{
  const monthValue = localStorage.getItem('Contas Dezembro') 
  const values = JSON.parse(monthValue)
   const sum = values.reduce(function(acc,value){
  return acc+value  
  })
  textOperation.innerText = `R$ ${sum}.00`
 }
}
checkOperationMonth()

}
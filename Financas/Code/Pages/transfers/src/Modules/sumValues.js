export function sum(){
  const obj = localStorage.getItem('Usuarios')
  let realObj = JSON.parse(obj)

  async function sumTransfers(){
    const transfers = await fetch('http://localhost:3001/transfers').then((res=>res.json()))
    const sum = transfers.reduce(function(acc,transfer){
    return acc+transfer.value
    },0)
    localStorage.setItem('Transferencia',sum)
  }

  document.addEventListener('DOMContentLoaded',()=>{
   sumTransfers()
  })
}

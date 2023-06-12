const cpfInput = document.querySelector('#cpf')
const transferInput = document.querySelector('#transfer')
const form = document.querySelector('form')
const radios = document.querySelectorAll('input[type=radio]')

function renderTransfer(transferData){
const article = document.createElement('article')
article.id = `${transferData.id}`

const type = document.createElement('span')
type.textContent = `${transferData.type}`

const value = document.createElement('span')
value.textContent = `${transferData.value}`

article.append(type,value)
document.querySelector('.transfers-containers').appendChild(article)
}

async function fetchTransfers(){
const transfers = await fetch('http://localhost:3000/transfers').then((res=>res.json()))
transfers.forEach(renderTransfer)
}

document.addEventListener('DOMContentLoaded',()=>{
  fetchTransfers()
})

async function test(ev){
ev.preventDefault()
if(radios[0].checked){

const transferData = {
type: radios[0].value , 
value: transferInput.value
}
const response = await fetch('http://localhost:3000/transfers',{
  method:'POST',
  headers:{
  'Content-Type':'application/json'  
  },
  body:JSON.stringify(transferData)
})
const savedTransfer = await response.json()
form.reset()
renderTransfer(savedTransfer)
}else{
const transferData = {
type: radios[1].value , 
value: transferInput.value
}
const response = await fetch('http://localhost:3000/transfers',{
  method:'POST',
  headers:{
  'Content-Type':'application/json'  
  },
  body:JSON.stringify(transferData)
})
const savedTransfer = await response.json()
form.reset()
renderTransfer(savedTransfer)
}
}

form.addEventListener('submit',test)
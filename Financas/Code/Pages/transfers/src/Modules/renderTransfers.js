export function render(){
  const nameInput = document.querySelector('#name')
  const transferInput = document.querySelector('#transfer')
  const form = document.querySelector('form')
  const radios = document.querySelectorAll('input[type=radio]')
  const values = []
  const regexValue = transferInput.value.replace(/[,]/g,'.')
  
  function createTransfer(transferData){
  const article = document.createElement('article')
  article.id = `${transferData.id}`
  article.classList.add('transfer-container')
  
  const name = document.createElement('span')
  name.textContent = `${transferData.name}`
  name.classList.add('name')
  
  const type = document.createElement('span')
  type.textContent = `${transferData.type}`
  type.classList.add('type')
  
  const value = document.createElement('span')
  value.textContent = `R$ ${transferData.value},00`
  value.classList.add('value')
  
  const createdAt = document.createElement('span')
  createdAt.textContent = `${transferData.createdAt}`
  createdAt.classList.add('created')
  
  article.append(name,type,value,createdAt)
  document.querySelector('.transfers-containers').appendChild(article)
  }
  
  async function fetchTransfers(){
  const transfers = await fetch('http://localhost:3000/transfers').then((res=>res.json()))
  transfers.forEach(createTransfer)
  }
  
  document.addEventListener('DOMContentLoaded',()=>{
    fetchTransfers()
  })

  async function renderTransfer(){
  if(radios[0].checked){
  const createdAt = new Date()
  const transferData = {
  name: nameInput.value,
  type: radios[0].value , 
  value: parseFloat(transferInput.value),
  createdAt: createdAt.toLocaleString('pt-br')
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
  values.push(savedTransfer)
  createTransfer(savedTransfer)

  }else{
    const createdAt = new Date()
    const transferData = {
    name: nameInput.value,
    type: radios[1].value , 
    value: parseFloat(transferInput.value.replace(/[,]/g,'.')),
    createdAt: createdAt.toLocaleString('pt-br')
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
  values.push(savedTransfer)
  createTransfer(savedTransfer)
  }
  }
  
  form.addEventListener('submit',renderTransfer)
}



export function render(){
  const form = document.querySelector('form')
  const months = document.querySelectorAll('.month')
  const array = Array.from(months)
  const nameInput =  document.querySelector('#name')
  const monthInput = document.querySelector('#month')
  const valueInput = document.querySelector('#value')
  const radiosInputs = document.querySelectorAll('input[type="radio"]')
  const button = document.querySelector('#create')
  const values = []

  function createOperation(operationData){
  const foundMonth = array.find(month => month.innerText == monthInput.value)


  if(radiosInputs[0].checked && foundMonth){
   const operation = foundMonth.parentElement
   const balanceOfTheContainer = operation.querySelector('#balance')
   operation.classList.add('ativo')
   operation.classList.remove('desativo')
   operation.children[1].setAttribute('src','https://cdn.lordicon.com/xsdtfyne.json')
   
   const spanName = document.createElement('span')
   spanName.textContent = `${operationData.name}`

   const spanValue = document.createElement('span')
   spanValue.classList.add('value')
   spanValue.textContent = `${operationData.value}`
  
   const spanType = document.createElement('span')
   spanType.textContent = `${operationData.type}`
   spanType.classList.add('debit')
   console.log(foundMonth)
   
   balanceOfTheContainer.innerText = `${parseFloat(balanceOfTheContainer.innerText) - parseFloat(valueInput.value)}.00`
   operation.append(spanName,spanValue,spanType)
   form.reset();
   }else if(radiosInputs[1].checked && foundMonth){
    const operation = foundMonth.parentElement
    const balanceOfTheContainer = operation.querySelector('#balance')
    operation.classList.add('ativo')
    operation.classList.remove('desativo')
    operation.children[1].setAttribute('src','https://cdn.lordicon.com/xsdtfyne.json')
   
    const spanName = document.createElement('span')
    spanName.textContent =`${operationData.name}`
 
    const spanValue = document.createElement('span')
    spanValue.textContent = `${operationData.value}`
    spanValue.classList.add('value')
    console.log(foundMonth)
    
    const spanType = document.createElement('span')
    spanType.textContent = `${operationData.type}`
    spanType.classList.add('credit')
    balanceOfTheContainer.innerText = `${parseFloat(balanceOfTheContainer.innerText)+ parseFloat(valueInput.value.replace(/[\D]/g,'.'))}.00`
    operation.append(spanName,spanValue,spanType)
    form.reset();
  } 
}

async function fetchOperations() {
  const operations = await fetch("http://localhost:3000/operations").then(
    (res) => res.json()
  );
  operations.forEach(createOperation);
}

document.addEventListener("DOMContentLoaded", () =>{
  fetchOperations()
})

async function renderOperation() {
  if (radiosInputs[0].checked) {
    const operationData = {
      name: nameInput.value,
      type: 'Debit',
      value: parseFloat(valueInput.value.replace(/[\D]/g,'.')).toFixed(2),
      month:monthInput.value
    };
    const response = await fetch("http://localhost:3000/operations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(operationData),
    });
    const savedOperation = await response.json();
    values.push(savedOperation)
    createOperation(savedOperation);
    form.reset();
    
  } else {
    const operationData = {
      name: nameInput.value,
      type: 'Credit',
      value: parseFloat(valueInput.value.replace(/[\D]/g,'.')).toFixed(2),
      month:monthInput.value
    };
    const response = await fetch("http://localhost:3000/operations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(operationData),
    });
    const savedOperation = await response.json();
    values.push(savedOperation)
    createOperation(savedOperation);
    form.reset();
  }
}

button.addEventListener('click',renderOperation)
}

  
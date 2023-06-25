export function render(){
  const form = document.querySelector('form')
  const months = document.querySelectorAll('.month')
  const array = Array.from(months)
  const nameInput =  document.querySelector('#name')
  const monthInput = document.querySelector('#month')
  const valueInput = document.querySelector('#value')
  const radiosInputs = document.querySelectorAll('input[type="radio"]')
  const button = document.querySelector('#create')

  function createOperation(operationData){
    const foundMonth = array.find(month => month.innerText == monthInput.value)
    if(foundMonth){
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
     balanceOfTheContainer.innerText = `${parseFloat(balanceOfTheContainer.innerText) - parseFloat(valueInput.value)}.00`
     operation.append(spanName,spanValue,spanType)
     form.reset();
     }
  }


async function fetchOperations() {
  const operations = await fetch("http://localhost:3000/operations").then(
    (res) => res.json()
  );
  const findJune = operations.filter(operation => operation.month === 'Junho')


  if(findJune){
    const operation = array[5].parentElement
    const balanceOfTheContainer = operation.querySelector('#balance')
    const values =  operations.map(operation => parseFloat(operation.value))
    const initialValue = 0
    const juneMonthSum = values.reduce(
      (accumulator, value) => 
      accumulator + value,
      initialValue
    );
    operation.classList.add('ativo')
    operation.classList.remove('desativo')
    operation.children[1].setAttribute('src','https://cdn.lordicon.com/xsdtfyne.json')

    findJune.forEach((findItem)=>{
      const spanName = document.createElement('span')
      spanName.textContent =`${findItem.name}`
   
      const spanValue = document.createElement('span')
      spanValue.textContent = `${findItem.value}`
      spanValue.classList.add('value')
     
      const spanType = document.createElement('span')
      spanType.textContent = `${findItem.type}`
      spanType.classList.add('debit')
      operation.append(spanName,spanValue,spanType)
    })
    localStorage.setItem('Contas Junho',JSON.stringify(juneMonthSum))
    balanceOfTheContainer.innerText = `${parseFloat(balanceOfTheContainer.innerText)-parseFloat(juneMonthSum)}.00`
    form.reset()

  
}
}

document.addEventListener("DOMContentLoaded", () =>{
  fetchOperations()
})

async function renderOperation(ev) {
  ev.preventDefault()
  if (radiosInputs[0].checked) {
    const operationData = {
      name: nameInput.value,
      type: 'Debit',
      value: parseFloat(valueInput.value.replace(/[-]/g,'' )).toFixed(2),
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
    createOperation(savedOperation);
  }
}
button.addEventListener('click',renderOperation)
}



  
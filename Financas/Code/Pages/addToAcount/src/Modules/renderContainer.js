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
  localStorage.setItem('Contas Julho', 0)

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

  function createOperationOff(ev){
    ev.preventDefault()
    const foundMonth = array.find(month => month.innerText == monthInput.value)
    const monthContainer = foundMonth.parentElement
    const monthName = monthContainer.querySelector('.month').innerText
     if(monthName === 'Julho'){
      const operation = foundMonth.parentElement
      const balanceOfTheContainer = operation.querySelector('#balance')
      operation.classList.add('ativo')
      operation.classList.remove('desativo')
      operation.children[1].setAttribute('src','https://cdn.lordicon.com/xsdtfyne.json')
      
      const spanName = document.createElement('span')
      spanName.textContent = `${nameInput.value}`
   
      const spanValue = document.createElement('span')
      spanValue.classList.add('value')
      spanValue.textContent = `${valueInput.value}`
    
      const spanType = document.createElement('span')
      spanType.textContent = `${'Debit'}`
      spanType.classList.add('debit')
      balanceOfTheContainer.innerText = `${parseFloat(balanceOfTheContainer.innerText) - parseFloat(valueInput.value)}.00`
      const newOperation = {
      name:nameInput.value,
      value:valueInput.value
      }
       operation.append(spanName,spanValue,spanType) 
       values.push(newOperation)
       const valuesJuly =  values.map(operation => parseFloat(operation.value))
       const julyMonthSum = valuesJuly.reduce(
         (accumulator, value) => 
         accumulator + value
       );
      
      localStorage.setItem('Contas Julho', JSON.stringify(julyMonthSum))
      form.reset();
     }else{
      console.log('Outro mes')
     }
  }


  async function fetchOperations() {
    const operations = await fetch("http://localhost:3002/operations").then(
      (res) => res.json()
    );
    const date = new Date().getMonth()
    const findJuly = operations.filter(operation => operation.month === 'Julho')
    const findJune = operations.filter(operation => operation.month === 'Junho')
  
    const operationJune = array[5].parentElement
    const balanceOfTheContainerJune = operationJune.querySelector('#balance')
    const valuesJune =  operations.map(operation => parseFloat(operation.value))
    const initialValueJune = 0
    const juneMonthSum = valuesJune.reduce(
      (accumulator, value) => 
      accumulator + value,
      initialValueJune
    );
    operationJune.classList.add('ativo')
    operationJune.classList.remove('desativo')
    operationJune.children[1].setAttribute('src','https://cdn.lordicon.com/xsdtfyne.json')
  
    findJune.forEach((findItem)=>{
      const spanName = document.createElement('span')
      spanName.textContent =`${findItem.name}`
   
      const spanValue = document.createElement('span')
      spanValue.textContent = `${findItem.value}`
      spanValue.classList.add('value')
     
      const spanType = document.createElement('span')
      spanType.textContent = `${findItem.type}`
      spanType.classList.add('debit')
      operationJune.append(spanName,spanValue,spanType)
    })
    localStorage.setItem('Contas Junho',JSON.stringify(juneMonthSum))
    balanceOfTheContainerJune.innerText = `${parseFloat(balanceOfTheContainerJune.innerText)-parseFloat(juneMonthSum)}.00`
    form.reset()  
  
    if(date === 6 && findJuly){
      const operationsJuly = array[6].parentElement
      const balanceOfTheContainerJuly = operationsJuly.querySelector('#balance')
      const valuesJuly =  findJuly.map(operation => parseFloat(operation.value))
      const initialValueJuly = 0
      const julyMonthSum = valuesJuly.reduce(
      (accumulator, value) => 
      accumulator + value,
      initialValueJuly
      );
      operationsJuly.classList.add('ativo')
      operationsJuly.classList.remove('desativo')
      operationsJuly.children[1].setAttribute('src','https://cdn.lordicon.com/xsdtfyne.json')
  
      findJuly.forEach((findItem)=>{
      const spanName = document.createElement('span')
      spanName.textContent =`${findItem.name}`
  
      const spanValue = document.createElement('span')
      spanValue.textContent = `${findItem.value}`
      spanValue.classList.add('value')
   
      const spanType = document.createElement('span')
      spanType.textContent = `${findItem.type}`
      spanType.classList.add('debit')
      operationsJuly.append(spanName,spanValue,spanType)
    })
    localStorage.setItem('Contas Julho',JSON.stringify(julyMonthSum))
    balanceOfTheContainerJuly.innerText = `${parseFloat(balanceOfTheContainerJuly.innerText)-parseFloat(julyMonthSum)}.00`
    form.reset()  
    }
  }

  document.addEventListener("DOMContentLoaded", () =>{
    const response = fetch("http://localhost:3002/operations").then(response => {
      if(!response.ok){
        throw new Error('Nossos servidores estão offline no momento')
      }
      return response
     }).catch(button.addEventListener('click',createOperationOff))
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
    const response = await fetch("http://localhost:3002/operations", {
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



  
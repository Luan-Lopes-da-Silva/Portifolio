export function renderBill(){
const form = document.querySelector('form')
const idInput = document.querySelector('#id')
const nameInput = document.querySelector('#name')
const valueInput = document.querySelector('#value')
const cards = document.querySelectorAll('.card-container')
const arrayCards = Array.from(cards)
const accountsCard1 = []
const accountsCard2 = []
const accountsCard3 = []
const button = document.querySelector('button')
console.log(cards)
  
  function render(ev){
    ev.preventDefault()
    let bill = {
      id:parseFloat(idInput.value),
      name:nameInput.value,
      value:parseFloat(valueInput.value.replace('\[,]\g','.'))
    }
    const findCard = arrayCards.find((card=>card.id === idInput.value))
    if(findCard){
    const operationContainer = document.createElement('div')
    operationContainer.classList.add('card-operation')

    const name = document.createElement('span')
    name.textContent = `${bill.name.toUpperCase()}`

    const value = document.createElement('span')
    value.textContent = `R$ ${bill.value}.00`
    value.classList.add('value')

    operationContainer.append(name,value)
    findCard.append(operationContainer)
    if(findCard.id === '1'){
    accountsCard1.push(bill)
    }else if(findCard.id === '2'){
    accountsCard2.push(bill)
    }else if(findCard.id === '3'){
    accountsCard3.push(bill)
    }
    }else{
    alert('Cartão inexistente')
    }
}

  function decrementBalance(ev){
  ev.preventDefault()
  const sumCards1 = accountsCard1.reduce(function(acc, currentValue) {
    return acc + currentValue.value;
  }, 0);
  const sumCards2 = accountsCard2.reduce(function(acc, currentValue) {
    return acc + currentValue.value;
  }, 0);
  
  const sumCards3 = accountsCard3.reduce(function(acc, currentValue) {
    return acc + currentValue.value;
  }, 0);

 localStorage.setItem('Fatura Cartão 1', parseFloat(sumCards1))
 localStorage.setItem('Fatura Cartão 2', parseFloat(sumCards2))
 localStorage.setItem('Fatura Cartão 3', parseFloat(sumCards3))
  }
  form.addEventListener('submit',render)
  form.addEventListener('submit',decrementBalance)
}
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


  

  //function decrementBalance(ev){
  //ev.preventDefault()
  //const sumCards1 = accountsCard1.reduce(function(acc, currentValue) {
  //  return acc + currentValue.value;
  //}, 0);
  //const sumCards2 = accountsCard2.reduce(function(acc, currentValue) {
  //  return acc + currentValue.value;
  //}, 0);
  //
  //const sumCards3 = accountsCard3.reduce(function(acc, currentValue) {
  //  return acc + currentValue.value;
  //}, 0);
  //
  //localStorage.setItem('Fatura Cartão 1', parseFloat(sumCards1))
  //localStorage.setItem('Fatura Cartão 2', parseFloat(sumCards2))
  //localStorage.setItem('Fatura Cartão 3', parseFloat(sumCards3))
  //}

function render(billData){
const findCard = arrayCards.find(card => card.id === idInput.value)
if(findCard){
  const operationContainer = document.createElement('div')
  operationContainer.classList.add('card-operation')
  const name = document.createElement('span')
  name.textContent = `${billData.name.toUpperCase()}`
  const value = document.createElement('span')
  value.textContent = `${billData.value}`
  value.classList.add('value')
  operationContainer.append(name,value)
  findCard.append(operationContainer)
}
}

async function fetchBills(){
const bills = await fetch("http://localhost:3000/bills").then(res => res.json())
const billsID1 =  bills.filter(bills => bills.idCard === '1')
const billsID2 =  bills.filter(bills => bills.idCard === '2')
const billsID3 =  bills.filter(bills => bills.idCard === '3')
const values1 = billsID1.map(bill => parseFloat(bill.value))
const values2 = billsID2.map(bill => parseFloat(bill.value))
const values3 = billsID3.map(bill => parseFloat(bill.value))

const initialValue = 0
const billsCard1 = values1.reduce(
  (accumulator, value) => 
  accumulator + value,
  initialValue
);
localStorage.setItem('Fatura Cartão 1' , billsCard1)

billsID1.forEach((bill)=>{
  const operationContainer = document.createElement('div')
  operationContainer.classList.add('card-operation')

  const name = document.createElement('span')
  name.textContent = `${bill.name.toUpperCase()}`
  const value = document.createElement('span')
  value.textContent = `${bill.value}`
  value.classList.add('value')

  operationContainer.append(name,value)
  arrayCards[0].append(operationContainer)
})

billsID2.forEach((bill)=>{
  const operationContainer = document.createElement('div')
  operationContainer.classList.add('card-operation')

  const name = document.createElement('span')
  name.textContent = `${bill.name.toUpperCase()}`
  const value = document.createElement('span')
  value.textContent = `${bill.value}`
  value.classList.add('value')

  operationContainer.append(name,value)
  arrayCards[1].append(operationContainer)
})

const billsCard2 = values2.reduce(
  (accumulator, value) => 
  accumulator + value,
  initialValue
);
localStorage.setItem('Fatura Cartão 2' , billsCard2)

billsID3.forEach((bill)=>{
  const operationContainer = document.createElement('div')
  operationContainer.classList.add('card-operation')

  const name = document.createElement('span')
  name.textContent = `${bill.name.toUpperCase()}`
  const value = document.createElement('span')
  value.textContent = `${bill.value}`
  value.classList.add('value')

  operationContainer.append(name,value)
  arrayCards[2].append(operationContainer)
})

const billsCard3 = values3.reduce(
  (accumulator, value) => 
  accumulator + value,
  initialValue
);
localStorage.setItem('Fatura Cartão 3' , billsCard3)
}

document.addEventListener("DOMContentLoaded", () =>{
  fetchBills()
})


async function renderBills(ev) {
  if (valueInput.value != '' && nameInput.value != '' && idInput.value != '') {
    const billData = {
      idCard:idInput.value,
      name:nameInput.value,
      value:valueInput.value.replace('\[,]\g','.')
    };
    const response = await fetch("http://localhost:3000/bills", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(billData),
    });
    const savedBill = await response.json();
    render(savedBill);
  }
}
button.addEventListener('click',renderBills)
}



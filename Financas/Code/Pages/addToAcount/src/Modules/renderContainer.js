export function render(){
  const form = document.querySelector('form')
const months = document.querySelectorAll('.month')
const array = Array.from(months)

function renderContainer(ev){
  ev.preventDefault()
  const foundMonth = array.find(month => month.innerText == monthInput.value)
  if(radiosInputs[0].checked && foundMonth){
   const operation = foundMonth.parentElement
   const balanceOfTheContainer = operation.querySelector('#balance')
   operation.classList.add('ativo')
   operation.classList.remove('desativo')
   operation.children[1].setAttribute('src','https://cdn.lordicon.com/xsdtfyne.json')
   
   const spanName = document.createElement('span')
   spanName.textContent = nameInput.value

   const spanValue = document.createElement('span')
   spanValue.classList.add('value')
   spanValue.textContent = parseFloat(valueInput.value.replace(/[\D]/g,'.')).toFixed(2)
  
   const spanType = document.createElement('span')
   spanType.textContent = 'D'
   spanType.classList.add('debit')
   
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
    spanName.textContent = nameInput.value
 
    const spanValue = document.createElement('span')
    spanValue.textContent = parseFloat(valueInput.value.replace(/[\D]/g,'.')).toFixed(2)
    spanValue.classList.add('value')
    
    
    const spanType = document.createElement('span')
    spanType.textContent = 'C'
    spanType.classList.add('credit')
    balanceOfTheContainer.innerText = `${parseFloat(balanceOfTheContainer.innerText)+ parseFloat(valueInput.value.replace(/[\D]/g,'.'))}.00`
    operation.append(spanName,spanValue,spanType)
    form.reset();
  }
}

const nameInput =  document.querySelector('#name')
const monthInput = document.querySelector('#month')
const valueInput = document.querySelector('#value')
const radiosInputs = document.querySelectorAll('input[type="radio"]')

const button = document.querySelector('button')
button.addEventListener('click',renderContainer)


}
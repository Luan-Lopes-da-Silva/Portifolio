import './styles/index.css';
const form = document.querySelector('form')
const months = document.querySelectorAll('.month')
const array = Array.from(months)
const icons = document.querySelectorAll('.icon')
const iconRefence = document.querySelector('.icon')
const srcPrimaryIcon = iconRefence.getAttribute('src')
console.log()

function showOrHide(ev){
  if(ev.currentTarget.getAttribute('src') === srcPrimaryIcon){
   ev.currentTarget.setAttribute('src','https://cdn.lordicon.com/xsdtfyne.json')
   ev.currentTarget.parentElement.classList.add('ativo')
  }else{
  ev.currentTarget.setAttribute('src', srcPrimaryIcon)
  ev.currentTarget.parentElement.classList.add('desativo')
  ev.currentTarget.parentElement.classList.remove('ativo')
  }
}
function renderContainer(ev){
  ev.preventDefault()
  const foundMonth = array.find(month => month.innerText == monthInput.value)
  if(radiosInputs[0].checked && foundMonth){
   const operacao = foundMonth.parentElement
   operacao.classList.add('ativo')
   operacao.classList.remove('desativo')
   operacao.children[1].setAttribute('src','https://cdn.lordicon.com/xsdtfyne.json')
   
   const spanName = document.createElement('span')
   spanName.textContent = nameInput.value

   const spanValue = document.createElement('span')
   spanValue.textContent = valueInput.value

   const spanType = document.createElement('span')
   spanType.textContent = 'D'
   spanType.classList.add('debit')
    
   operacao.append(spanName,spanValue,spanType)
   form.reset();
   }else if(radiosInputs[1].checked && foundMonth){
    const operacao = foundMonth.parentElement
    operacao.classList.add('ativo')
    operacao.classList.remove('desativo')
    operacao.children[1].setAttribute('src','https://cdn.lordicon.com/xsdtfyne.json')
   
    const spanName = document.createElement('span')
    spanName.textContent = nameInput.value
 
    const spanValue = document.createElement('span')
    spanValue.textContent = valueInput.value
    spanValue.classList.add('value')
 
    const spanType = document.createElement('span')
    spanType.textContent = 'C'
    spanType.classList.add('credit')
     
    operacao.append(spanName,spanValue,spanType)
    form.reset();
  }
}


const nameInput =  document.querySelector('#name')
const monthInput = document.querySelector('#month')
const valueInput = document.querySelector('#value')
const radiosInputs = document.querySelectorAll('input[type="radio"]')

const button = document.querySelector('button')
button.addEventListener('click',renderContainer)
icons.forEach((icon)=>{
icon.addEventListener('click',showOrHide)
})
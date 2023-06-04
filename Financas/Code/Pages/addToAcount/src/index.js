function verifyValue(){

}

function verifyMonth(){

}

function createName(){

}

function createMonth(){

}

function createValue(){

}

function renderContainer(ev){
  ev.preventDefault()
  if(radiosInputs[0].checked){
    console.log('Input debito')
  }else{
    console.log('Input credito')
  }
}

const nameInput =  document.querySelector('#name')
const monthInput = document.querySelector('#month')
const valueInput = document.querySelector('#value')
const radiosInputs = document.querySelectorAll('input[type="radio"]')

const button = document.querySelector('button')
button.addEventListener('click',renderContainer)
const obj = localStorage.getItem('Usuarios')
let realObj = JSON.parse(obj)
const value = document.querySelector('.value')
const regexValue = value.innerText.replace(/[R$\s]/g,'')
const wage = realObj.salario
const msg = document.querySelector('.msg span')
const after = document.styleSheets[0].cssRules[29]

export function operations(){
  const valueInPercent = regexValue/wage*100
  const fixValue = valueInPercent.toFixed(2)
  if(valueInPercent<75){
  value.style.color = '#9EEF41'
  msg.innerText = `${fixValue}% de seu salario mensal`
  msg.style.color = '#9EEF41'
  after.style.setProperty('width',`${fixValue}`+ '%')
  after.style.setProperty('background-color', '#9EEF41')
  msg.nextElementSibling.setAttribute('src','../../../Assets/Svgs/thumb_up_FILL0_wght400_GRAD0_opsz48.svg')
  }else{
  value.style.color = '#f00'
  msg.innerText = `${fixValue}% de seu salario mensal`
  msg.style.color = '#f00'
  after.style.setProperty('width',`${valueInPercent}`+ '%')
  after.style.setProperty('background-color', '#f00')
  msg.nextElementSibling.setAttribute('src','../../../Assets/Svgs/SVGRepo_iconCarrier.svg')
  }
  return valueInPercent
  }
  operations()
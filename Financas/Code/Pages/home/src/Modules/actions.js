const valueInActions = document.querySelectorAll('.valueInActions')
const budget = parseFloat(document.querySelector('#budget').innerText.replace(/[a-zR$]/g,''))

export function controlActions(){
  valueInActions.forEach((value)=>{
    const valueNew = value.innerText.replace(/[R$\s]/g,'')
    value.nextElementSibling.nextElementSibling.innerText = `${valueNew/budget*100}% de budget de investimento`
    })
}
controlActions()
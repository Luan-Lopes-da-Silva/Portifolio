export default function operationValues(){
  const button = document.querySelector('#create')
  const radiosInputs = document.querySelectorAll('input[type="radio"]')
  const monthInput = document.querySelector('#month')
  const valueInput = document.querySelector('#value')
  const valuesJanuary = []
  const valuesFebruary = []
  const valuesMarch = []
  const valuesApril = []
  const valuesMay = []
  const valuesJune = []
  const valuesJuly = []
  const valuesAugust = []
  const valuesSeptember = []
  const valuesOctober = []
  const valuesNovember = []
  const valuesDecember = []

  function sumOfValues(ev){
    ev.preventDefault() 
   if(monthInput.value === 'Janeiro' && radiosInputs[0].checked){
    valuesJanuary.push(parseFloat(valueInput.value.replace(/[\D]/g,'.')))
    localStorage.setItem('Contas Janeiro', JSON.stringify(valuesJanuary))
   }else if(monthInput.value === 'Fevereiro'){
    valuesFebruary.push(parseFloat(valueInput.value.replace(/[\D]/g,'.')))
    localStorage.setItem('Contas Fevereiro', JSON.stringify(valuesFebruary))
   }else if(monthInput.value === 'Março'){
    valuesMarch.push(parseFloat(valueInput.value.replace(/[\D]/g,'.')))
    localStorage.setItem('Contas Março', JSON.stringify(valuesMarch))
   }else if(monthInput.value === 'Abril'){
    valuesApril.push(parseFloat(valueInput.value.replace(/[\D]/g,'.')))
    localStorage.setItem('Contas Abril', JSON.stringify(valuesApril))
   }else if(monthInput.value === 'Maio'){
    valuesMay.push(parseFloat(valueInput.value.replace(/[\D]/g,'.')))
    localStorage.setItem('Contas Maio', JSON.stringify(valuesMay))
   }else if(monthInput.value === 'Junho'){
    valuesJune.push(parseFloat(valueInput.value.replace(/[\D]/g,'.')))
    localStorage.setItem('Contas Junho', JSON.stringify(valuesJune))
   }
   else if(monthInput.value === 'Julho'){
    valuesJuly.push(parseFloat(valueInput.value.replace(/[\D]/g,'.')))
    localStorage.setItem('Contas Julho', JSON.stringify(valuesJuly))
   }
   else if(monthInput.value === 'Agosto'){
    valuesAugust.push(parseFloat(valueInput.value.replace(/[\D]/g,'.')))
    localStorage.setItem('Contas Agosto', JSON.stringify(valuesAugust))
   }else if(monthInput.value === 'Setembro'){
    valuesSeptember.push(parseFloat(valueInput.value.replace(/[\D]/g,'.')))
    localStorage.setItem('Contas Setembro', JSON.stringify(valuesSeptember))
   }else if(monthInput.value === 'Outubro'){
    valuesOctober.push(parseFloat(valueInput.value.replace(/[\D]/g,'.')))
    localStorage.setItem('Contas Novembro', JSON.stringify(valuesOctober))
   }else if(monthInput.value === 'Novembro'){
    valuesNovember.push(parseFloat(valueInput.value.replace(/[\D]/g,'.')))
    localStorage.setItem('Contas Novembro', JSON.stringify(valuesNovember))
   }else{
    valuesDecember.push(parseFloat(valueInput.value.replace(/[\D]/g,'.')))
    localStorage.setItem('Contas Dezembro', JSON.stringify(valuesDecember))
   }
  }
  button.addEventListener('click',sumOfValues)
}
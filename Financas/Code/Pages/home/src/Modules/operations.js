export  function operationsFunc(){
  const obj = localStorage.getItem('Usuarios')
  let realObj = JSON.parse(obj)
  const value = document.querySelector('.value')
  const wage = realObj.salario
  const msg = document.querySelector('.msg span')
  const after = document.styleSheets[0].cssRules[61]
  

  const monthValue = localStorage.getItem('Contas Junho')
    const values = JSON.parse(monthValue)
     const valueInPercent = values/wage*100
  const fixValue = valueInPercent.toFixed(2)
  

  
    function operations(){
      if(!localStorage.getItem('Contas Junho')){
        value.style.color = '#9EEF41'
        msg.innerText = `0.00% de seu salario mensal`
        msg.style.color = '#9EEF41'
        msg.nextElementSibling.setAttribute('src','../../../Assets/Svgs/thumb_up_FILL0_wght400_GRAD0_opsz48.svg')
        after.style.setProperty('width', 0+'%')
        after.style.setProperty('background-color', '#9EEF41')
      }else if(localStorage.getItem('Contas Junho') && valueInPercent<75){
        value.style.color = '#9EEF41'
        msg.innerText = `${fixValue} de seu salario mensal`
        msg.style.color = '#9EEF41'
        msg.nextElementSibling.setAttribute('src','../../../Assets/Svgs/thumb_up_FILL0_wght400_GRAD0_opsz48.svg')
        after.style.setProperty('width', `${valueInPercent}`+'%')
        after.style.setProperty('background-color', '#9EEF41')
      }else{
        value.style.color = '#F00'
        msg.innerText = `${fixValue} de seu salario mensal`
        msg.style.color = '#F00'
        msg.nextElementSibling.setAttribute('src','../../../Assets/Svgs/SVGRepo_iconCarrier.svg')
        after.style.setProperty('width',`${valueInPercent}`+'%')
        after.style.setProperty('background-color', '#F00')
      }
      return valueInPercent
    }


  operations()
}
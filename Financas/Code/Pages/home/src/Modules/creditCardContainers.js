export default function creditCardContainer(){
  const inputs = document.querySelectorAll('.models input[type="radio"]')
  const radios = document.querySelectorAll('.radio')
  const forms = document.querySelectorAll('.forms')
  const btnShowInputs = document.querySelectorAll('.createCard')
  const creditCardContainers = document.querySelectorAll('.container-card')
  console.log(creditCardContainers[1])
 

  function showCard(ev){
  ev.preventDefault()
  const btnTarget = ev.currentTarget
  if(btnTarget.id == 1){
    const formCurrent = forms[0]
    formCurrent.style.display = 'grid'
  }else if(btnTarget.id==2){
    const formCurrent = forms[1]
    formCurrent.style.display = 'grid'

  }else if(btnTarget.id==3){
    const formCurrent = forms[2]
    formCurrent.style.display = 'grid'

  }else{
    const formCurrent = forms[3]
    formCurrent.style.display = 'grid'
  }
  }
  
  function createCard1(ev){
    const formCurrent = ev.currentTarget
    ev.preventDefault()
    if(inputs[0].checked){
      const card = {
      name:'Cartão 1',
      model:radios[0].querySelector('img').getAttribute('src'),
      limit:parseFloat(formCurrent.querySelector('#limit').value.replace('/[,]/g','.')).toFixed(2)
    }
    localStorage.setItem('Cartão 1', JSON.stringify(card))
      }else if(inputs[1].checked){
        const card = {
          name:'Cartão 1',
          model:radios[1].querySelector('img').getAttribute('src'),
                limit:parseFloat(formCurrent.querySelector('#limit').value.replace('/[,]/g','.')).toFixed(2)        }
        localStorage.setItem('Cartão 1', JSON.stringify(card))
    
      }else if(inputs[2].checked){
        const card = {
          name:'Cartão 1',
          model:radios[2].querySelector('img').getAttribute('src'),
                limit:parseFloat(formCurrent.querySelector('#limit').value.replace('/[,]/g','.')).toFixed(2)  
        }
        localStorage.setItem('Cartão 1', JSON.stringify(card))
      }else{
        const card = {
          name:'Cartão 1',
          model:radios[3].querySelector('img').getAttribute('src'),
                limit:parseFloat(formCurrent.querySelector('#limit').value.replace('/[,]/g','.')).toFixed(2)  
        }
        localStorage.setItem('Cartão 1', JSON.stringify(card))
      }

      setTimeout(()=>{
        formCurrent.style.display='none' 
        window.location.reload()
      },500)
     
  }
  
  function createCard2(ev){
    ev.preventDefault()
    const formCurrent = ev.currentTarget
    if(inputs[0].checked){
      const card = {
      name:'Cartão 2',
      model:radios[0].querySelector('img').getAttribute('src'),
            limit:parseFloat(formCurrent.querySelector('#limit').value.replace('/[,]/g','.')).toFixed(2)  
    }
    localStorage.setItem('Cartão 2', JSON.stringify(card))
      }else if(inputs[1].checked){
        const card = {
          name:'Cartão 2',
          model:radios[1].querySelector('img').getAttribute('src'),
                limit:parseFloat(formCurrent.querySelector('#limit').value.replace('/[,]/g','.')).toFixed(2)  
        }
        localStorage.setItem('Cartão 2', JSON.stringify(card))
    
      }else if(inputs[2].checked){
        const card = {
          name:'Cartão 2',
          model:radios[2].querySelector('img').getAttribute('src'),
                limit:parseFloat(formCurrent.querySelector('#limit').value.replace('/[,]/g','.')).toFixed(2)  
        }
        localStorage.setItem('Cartão 2', JSON.stringify(card))
      }else{
        const card = {
          name:'Cartão 2',
          model:radios[3].querySelector('img').getAttribute('src'),
                limit:parseFloat(formCurrent.querySelector('#limit').value.replace('/[,]/g','.')).toFixed(2)  
        }
        localStorage.setItem('Cartão 2', JSON.stringify(card))
      }
      setTimeout(()=>{
        formCurrent.style.display='none' 
        window.location.reload()
      },500)
  }

  function createCard3(ev){
    ev.preventDefault()
    const formCurrent = ev.currentTarget

    if(inputs[0].checked){
      const card = {
      name:'Cartão 3',
      model:radios[0].querySelector('img').getAttribute('src'),
            limit:parseFloat(formCurrent.querySelector('#limit').value.replace('/[,]/g','.')).toFixed(2)  
    }
    localStorage.setItem('Cartão 3', JSON.stringify(card))
      }else if(inputs[1].checked){
        const card = {
          name:'Cartão 3',
          model:radios[1].querySelector('img').getAttribute('src'),
                limit:parseFloat(formCurrent.querySelector('#limit').value.replace('/[,]/g','.')).toFixed(2)  
        }
        localStorage.setItem('Cartão 3', JSON.stringify(card))
    
      }else if(inputs[2].checked){
        const card = {
          name:'Cartão 3',
          model:radios[2].querySelector('img').getAttribute('src'),
                limit:parseFloat(formCurrent.querySelector('#limit').value.replace('/[,]/g','.')).toFixed(2)  
        }
        localStorage.setItem('Cartão 3', JSON.stringify(card))
      }else{
        const card = {
          name:'Cartão 3',
          model:radios[3].querySelector('img').getAttribute('src'),
                limit:parseFloat(formCurrent.querySelector('#limit').value.replace('/[,]/g','.')).toFixed(2)  
        }
        localStorage.setItem('Cartão 3', JSON.stringify(card))
      }

      setTimeout(()=>{
      formCurrent.style.display='none'
      },1000)
  }

  function createCard4(ev){
    ev.preventDefault()
    const formCurrent = ev.currentTarget
    if(inputs[0].checked){
      const card = {
      name:'Cartão 4',
      model:radios[0].querySelector('img').getAttribute('src'),
      limit:parseFloat(formCurrent.querySelector('#limit').value.replace('/[,]/g','.')).toFixed(2)  
    }
    localStorage.setItem('Cartão 4', JSON.stringify(card))
      }else if(inputs[1].checked){
        const card = {
          name:'Cartão 4',
          model:radios[1].querySelector('img').getAttribute('src'),
                limit:parseFloat(formCurrent.querySelector('#limit').value.replace('/[,]/g','.')).toFixed(2)  
        }
        localStorage.setItem('Cartão 4', JSON.stringify(card))
    
      }else if(inputs[2].checked){
        const card = {
          name:'Cartão 4',
          model:radios[2].querySelector('img').getAttribute('src'),
                limit:parseFloat(formCurrent.querySelector('#limit').value.replace('/[,]/g','.')).toFixed(2)  
        }
        localStorage.setItem('Cartão 4', JSON.stringify(card))
      }else{
        const card = {
          name:'Cartão 4',
          model:radios[3].querySelector('img').getAttribute('src'),
                limit:parseFloat(formCurrent.querySelector('#limit').value.replace('/[,]/g','.')).toFixed(2)  
        }
        localStorage.setItem('Cartão 4', JSON.stringify(card))
      }
      setTimeout(()=>{
        formCurrent.style.display='none' 
        window.location.reload()
      },500)
  }
  function render(){
    if(localStorage.getItem('Cartão 1') && localStorage.getItem('Cartão 2') && localStorage.getItem('Cartão 3') && localStorage.getItem('Cartão 4')){
      const localStorageCard1 = JSON.parse(localStorage.getItem('Cartão 1'))
      const localStorageCard2 = JSON.parse(localStorage.getItem('Cartão 2'))
      const localStorageCard3 = JSON.parse(localStorage.getItem('Cartão 3'))
      const localStorageCard4 = JSON.parse(localStorage.getItem('Cartão 3'))
        
      const spanTitle = document.createElement('span')
      spanTitle.classList.add('title')
      spanTitle.textContent = 'Seu saldo'

      const spanTitle2 = document.createElement('span')
      spanTitle2.classList.add('title')
      spanTitle2.textContent = 'Seu saldo'

      const spanTitle3 = document.createElement('span')
      spanTitle3.classList.add('title')
      spanTitle3.textContent = 'Seu saldo'

      const spanTitle4 = document.createElement('span')
      spanTitle4.classList.add('title')
      spanTitle4.textContent = 'Seu saldo'
      
      const imgCard = document.createElement('img')
      imgCard.setAttribute('src',`${localStorageCard1.model}`)
      const imgCard2 = document.createElement('img')
      imgCard2.setAttribute('src',`${localStorageCard2.model}`)
      const imgCard3 = document.createElement('img')
      imgCard3.setAttribute('src',`${localStorageCard3.model}`)
      const imgCard4 = document.createElement('img')
      imgCard4.setAttribute('src',`${localStorageCard4.model}`)
      
      const spanBalance = document.createElement('span')
      spanBalance.classList.add('balance')
      spanBalance.id = 'balance1'
      spanBalance.textContent= `R$ ${localStorageCard1.limit}`

      const spanBalance2 = document.createElement('span')
      spanBalance2.classList.add('balance')
      spanBalance2.id = 'balance2'
      spanBalance2.textContent= `R$ ${localStorageCard2.limit}`

      const spanBalance3 = document.createElement('span')
      spanBalance3.classList.add('balance')
      spanBalance3.id = 'balance3'
      spanBalance3.textContent= `R$ ${localStorageCard3.limit}`

      const spanBalance4 = document.createElement('span')
      spanBalance4.classList.add('balance')
      spanBalance4.id = 'balance4'
      spanBalance4.textContent= `R$ ${localStorageCard4.limit}`
      
      creditCardContainers[0].append(imgCard,spanTitle,spanBalance)
      creditCardContainers[0].removeChild(btnShowInputs[0])
      creditCardContainers[0].classList.add('active')
      creditCardContainers[1].append(imgCard2,spanTitle2,spanBalance2)
      creditCardContainers[1].removeChild(btnShowInputs[1])
      creditCardContainers[1].classList.add('active')
      creditCardContainers[2].append(imgCard3,spanTitle3,spanBalance3)
      creditCardContainers[2].removeChild(btnShowInputs[2])
      creditCardContainers[2].classList.add('active')
      creditCardContainers[3].append(imgCard4,spanTitle4,spanBalance4)
      creditCardContainers[3].removeChild(btnShowInputs[3])
      creditCardContainers[3].classList.add('active')
  }else{
    console.log('cartão nao existe')
  }
}
  render()

forms[0].addEventListener('submit',createCard1)
forms[1].addEventListener('submit',createCard2)  
forms[2].addEventListener('submit',createCard3)
forms[3].addEventListener('submit',createCard4)
btnShowInputs.forEach((btn)=>{
btn.addEventListener('click',showCard)  
})

}
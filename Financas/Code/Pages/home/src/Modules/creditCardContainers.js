export default function creditCardContainer(){
  const forms = document.querySelectorAll('.forms')
  const btnShowInputs = document.querySelectorAll('.createCard')
  const creditCardContainers = document.querySelectorAll('.container-card')


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
    ev.preventDefault()
    const currentForm = ev.currentTarget
    const currentLimit = ev.currentTarget.querySelector('.inputs #limit')
    const radios = ev.currentTarget.querySelectorAll('.models .radio ')
    if(radios[0].querySelector('input').checked){
    const card = {
      name: 'Cartão 1',
      model: '../../../Assets/Svgs/1.svg',
      limit: Number(currentLimit.value.replace(/[,]/g,'.')).toFixed(2)
    }
    localStorage.setItem('Cartão 1', JSON.stringify(card))
    setTimeout(()=>{
      currentForm.style.display='none' 
      window.location.reload()
    },500)
    }else if(radios[1].querySelector('input').checked){
      const card = {
        name: 'Cartão 1',
        model: '../../../Assets/Svgs/2.svg',
        limit: Number(currentLimit.value.replace(/[,]/g,'.')).toFixed(2)
      }
      localStorage.setItem('Cartão 1', JSON.stringify(card))
      setTimeout(()=>{
        currentForm.style.display='none' 
        window.location.reload()
      },500)
    }else if(radios[2].querySelector('input').checked){
      const card = {
        name: 'Cartão 1',
        model: '../../../Assets/Svgs/3.svg',
        limit: Number(currentLimit.value.replace(/[,]/g,'.')).toFixed(2)
      }
      localStorage.setItem('Cartão 1', JSON.stringify(card))
      setTimeout(()=>{
        currentForm.style.display='none' 
        window.location.reload()
      },500)
    }else{
      const card = {
        name: 'Cartão 1',
        model: '../../../Assets/Svgs/4.svg',
        limit: Number(currentLimit.value.replace(/[,]/g,'.')).toFixed(2)
      }
      localStorage.setItem('Cartão 1', JSON.stringify(card))
      setTimeout(()=>{
        currentForm.style.display='none' 
        window.location.reload()
      },500)
    }
  }
  
  function createCard2(ev){
  ev.preventDefault()
  const currentForm = ev.currentTarget
  const currentLimit = ev.currentTarget.querySelector('.inputs #limit')
  const radios = ev.currentTarget.querySelectorAll('.models .radio ')
  if(radios[0].querySelector('input').checked){
  const card = {
    name: 'Cartão 2',
    model: '../../../Assets/Svgs/1.svg',
    limit: Number(currentLimit.value.replace(/[,]/g,'.')).toFixed(2)
  }
  localStorage.setItem('Cartão 2', JSON.stringify(card))
  setTimeout(()=>{
    currentForm.style.display='none' 
    window.location.reload()
  },500)
  }else if(radios[1].querySelector('input').checked){
    const card = {
      name: 'Cartão 2',
      model: '../../../Assets/Svgs/2.svg',
      limit: Number(currentLimit.value.replace(/[,]/g,'.')).toFixed(2)
    }
    localStorage.setItem('Cartão 2', JSON.stringify(card))
    setTimeout(()=>{
      currentForm.style.display='none' 
      window.location.reload()
    },500)
  }else if(radios[2].querySelector('input').checked){
    const card = {
      name: 'Cartão 2',
      model: '../../../Assets/Svgs/3.svg',
      limit: Number(currentLimit.value.replace(/[,]/g,'.')).toFixed(2)
    }
    localStorage.setItem('Cartão 2', JSON.stringify(card))
    setTimeout(()=>{
      currentForm.style.display='none' 
      window.location.reload()
    },500)
  }else{
    const card = {
      name: 'Cartão 2',
      model: '../../../Assets/Svgs/4.svg',
      limit: Number(currentLimit.value.replace(/[,]/g,'.')).toFixed(2)
    }
    localStorage.setItem('Cartão 2', JSON.stringify(card))
    setTimeout(()=>{
      currentForm.style.display='none' 
      window.location.reload()
    },500)
  }
  }

  function createCard3(ev){
    const currentForm = ev.currentTarget
    ev.preventDefault()
    const currentLimit = ev.currentTarget.querySelector('.inputs #limit')
    const radios = ev.currentTarget.querySelectorAll('.models .radio ')
    if(radios[0].querySelector('input').checked){
    const card = {
      name: 'Cartão 3',
      model: '../../../Assets/Svgs/1.svg',
      limit: Number(currentLimit.value.replace(/[,]/g,'.')).toFixed(2)
    }
    localStorage.setItem('Cartão 3', JSON.stringify(card))
    setTimeout(()=>{
      currentForm.style.display='none' 
      window.location.reload()
    },500)
    }else if(radios[1].querySelector('input').checked){
      const card = {
        name: 'Cartão 3',
        model: '../../../Assets/Svgs/2.svg',
        limit: Number(currentLimit.value.replace(/[,]/g,'.')).toFixed(2)
      }
      localStorage.setItem('Cartão 3', JSON.stringify(card))
      setTimeout(()=>{
        currentForm.style.display='none' 
        window.location.reload()
      },500)
    }else if(radios[2].querySelector('input').checked){
      const card = {
        name: 'Cartão 3',
        model: '../../../Assets/Svgs/3.svg',
        limit: Number(currentLimit.value.replace(/[,]/g,'.')).toFixed(2)
      }
      localStorage.setItem('Cartão 3', JSON.stringify(card))
      setTimeout(()=>{
        currentForm.style.display='none' 
        window.location.reload()
      },500)
    }else{
      const card = {
        name: 'Cartão 3',
        model: '../../../Assets/Svgs/4.svg',
        limit: Number(currentLimit.value.replace(/[,]/g,'.')).toFixed(2)
      }
      localStorage.setItem('Cartão 3', JSON.stringify(card))
      setTimeout(()=>{
        currentForm.style.display='none' 
        window.location.reload()
      },500)
    }
    }

    function createCard4(ev){
      const currentForm = ev.currentTarget
      ev.preventDefault()
      const currentLimit = ev.currentTarget.querySelector('.inputs #limit')
      const radios = ev.currentTarget.querySelectorAll('.models .radio ')
      if(radios[0].querySelector('input').checked){
      const card = {
        name: 'Cartão 4',
        model: '../../../Assets/Svgs/1.svg',
        limit: Number(currentLimit.value.replace(/[,]/g,'.')).toFixed(2)
      }
      localStorage.setItem('Cartão 4', JSON.stringify(card))
      setTimeout(()=>{
        currentForm.style.display='none' 
        window.location.reload()
      },500)
      }else if(radios[1].querySelector('input').checked){
        const card = {
          name: 'Cartão 4',
          model: '../../../Assets/Svgs/2.svg',
          limit: Number(currentLimit.value.replace(/[,]/g,'.')).toFixed(2)
        }
        localStorage.setItem('Cartão 4', JSON.stringify(card))
        setTimeout(()=>{
          currentForm.style.display='none' 
          window.location.reload()
        },500)
      }else if(radios[2].querySelector('input').checked){
        const card = {
          name: 'Cartão 4',
          model: '../../../Assets/Svgs/3.svg',
          limit: Number(currentLimit.value.replace(/[,]/g,'.')).toFixed(2)
        }
        localStorage.setItem('Cartão 4', JSON.stringify(card))
        setTimeout(()=>{
          currentForm.style.display='none' 
          window.location.reload()
        },500)
      }else{
        const card = {
          name: 'Cartão 4',
          model: '../../../Assets/Svgs/4.svg',
          limit: Number(currentLimit.value.replace(/[,]/g,'.')).toFixed(2)
        }
        localStorage.setItem('Cartão 4', JSON.stringify(card))
        setTimeout(()=>{
          currentForm.style.display='none' 
          window.location.reload()
        },500)
      }
      }

      function render(){
        if(localStorage.getItem('Cartão 1') && localStorage.getItem('Cartão 2') && localStorage.getItem('Cartão 3') && localStorage.getItem('Cartão 4')){
          const localStorageCard1 = JSON.parse(localStorage.getItem('Cartão 1'))
          const localStorageCard2 = JSON.parse(localStorage.getItem('Cartão 2'))
          const localStorageCard3 = JSON.parse(localStorage.getItem('Cartão 3'))
          const localStorageCard4 = JSON.parse(localStorage.getItem('Cartão 4'))
    
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
          spanBalance.textContent= `R$ ${parseFloat(localStorageCard1.limit - localStorage.getItem('Fatura Cartão 1')).toFixed(2)}`
          
          
          const spanBalance2 = document.createElement('span')
          spanBalance2.classList.add('balance')
          spanBalance2.id = 'balance2'
          spanBalance2.textContent= `R$ ${parseFloat(localStorageCard2.limit - localStorage.getItem('Fatura Cartão 2')).toFixed(2)}`

       
    
          const spanBalance3 = document.createElement('span')
          spanBalance3.classList.add('balance')
          spanBalance3.id = 'balance3'
          spanBalance3.textContent= `R$ ${parseFloat(localStorageCard3.limit - localStorage.getItem('Fatura Cartão 3')).toFixed(2) }`
    
          const spanBalance4 = document.createElement('span')
          spanBalance4.classList.add('balance')
          spanBalance4.id = 'balance4'
          spanBalance4.textContent= `R$ ${parseFloat(localStorageCard4.limit - localStorage.getItem('Fatura Cartão 4')).toFixed(2)}`
    
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

          const balanceNumb1 = parseFloat(spanBalance.innerText.replace(/[R$\s]/g,''))
          const balanceNumb2 = parseFloat(spanBalance2.innerText.replace(/[R$\s]/g,''))
          const balanceNumb3 = parseFloat(spanBalance3.innerText.replace(/[R$\s]/g,''))
          const balanceNumb4 = parseFloat(spanBalance4.innerText.replace(/[R$\s]/g,''))
          
          if(balanceNumb1<100){
            spanBalance.style.color = '#F00'
          }else if(balanceNumb1>100 && balanceNumb1<=300){
            spanBalance.style.color = '#EBFF00'
          }else {
            spanBalance.style.color = '#9EEF41'
          }

          if(balanceNumb2<100){
            spanBalance2.style.color = '#F00'
          }else if(balanceNumb2>100 && balanceNumb2<=300){
            spanBalance2.style.color = '#EBFF00'
          }else {
            spanBalance2.style.color = '#9EEF41'
          }

          if(balanceNumb3<100){
            spanBalance3.style.color = '#F00'
          }else if(balanceNumb3>100 && balanceNumb3<=300){
            spanBalance3.style.color = '#EBFF00'
          }else {
            spanBalance3.style.color = '#9EEF41'
          }

          if(balanceNumb4<100){
            spanBalance4.style.color = '#F00'
          }else if(balanceNumb4>100 && balanceNumb4<=300){
            spanBalance4.style.color = '#EBFF00'
          }else {
            spanBalance4.style.color = '#9EEF41'
          }


      }else if(localStorage.getItem('Cartão 1') && localStorage.getItem('Cartão 2') && localStorage.getItem('Cartão 3')){
        const localStorageCard1 = JSON.parse(localStorage.getItem('Cartão 1'))

        const spanTitle = document.createElement('span')
        spanTitle.classList.add('title')
        spanTitle.textContent = 'Seu saldo'

        const imgCard = document.createElement('img')
        imgCard.setAttribute('src',`${localStorageCard1.model}`)

        const spanBalance = document.createElement('span')
        spanBalance.classList.add('balance')
        spanBalance.id = 'balance1'
        spanBalance.textContent= `R$ ${parseFloat(localStorageCard1.limit - localStorage.getItem('Fatura Cartão 1')).toFixed(2)}`

        creditCardContainers[0].append(imgCard,spanTitle,spanBalance)
        creditCardContainers[0].removeChild(btnShowInputs[0])
        creditCardContainers[0].classList.add('active')

        const localStorageCard2 = JSON.parse(localStorage.getItem('Cartão 2'))

        const spanTitle2 = document.createElement('span')
        spanTitle2.classList.add('title')
        spanTitle2.textContent = 'Seu saldo'

        const imgCard2 = document.createElement('img')
        imgCard2.setAttribute('src',`${localStorageCard2.model}`)

        const spanBalance2 = document.createElement('span')
        spanBalance2.classList.add('balance')
        spanBalance2.id = 'balance2'
        spanBalance2.textContent= `R$ ${parseFloat(localStorageCard2.limit - localStorage.getItem('Fatura Cartão 2')).toFixed(2)}`

        creditCardContainers[1].append(imgCard2,spanTitle2,spanBalance2)
        creditCardContainers[1].removeChild(btnShowInputs[1])
        creditCardContainers[1].classList.add('active')

        const localStorageCard3 = JSON.parse(localStorage.getItem('Cartão 3'))

        const spanTitle3 = document.createElement('span')
        spanTitle3.classList.add('title')
        spanTitle3.textContent = 'Seu saldo'

        const imgCard3 = document.createElement('img')
        imgCard3.setAttribute('src',`${localStorageCard3.model}`)

        const spanBalance3 = document.createElement('span')
        spanBalance3.classList.add('balance')
        spanBalance3.id = 'balance3'
        spanBalance3.textContent= `R$ ${parseFloat(localStorageCard3.limit-localStorage.getItem('Fatura Cartão 3')).toFixed(2)}`

        creditCardContainers[2].append(imgCard3,spanTitle3,spanBalance3)
        creditCardContainers[2].removeChild(btnShowInputs[2])
        creditCardContainers[2].classList.add('active')
      }else if(localStorage.getItem('Cartão 1') && localStorage.getItem('Cartão 2')){

        const localStorageCard1 = JSON.parse(localStorage.getItem('Cartão 1'))

        const spanTitle = document.createElement('span')
        spanTitle.classList.add('title')
        spanTitle.textContent = 'Seu saldo'

        const imgCard = document.createElement('img')
        imgCard.setAttribute('src',`${localStorageCard1.model}`)

        const spanBalance = document.createElement('span')
        spanBalance.classList.add('balance')
        spanBalance.id = 'balance1'
        spanBalance.textContent= `R$ ${parseFloat(localStorageCard1.limit - localStorage.getItem('Fatura Cartão 1')).toFixed(2) }`

        creditCardContainers[0].append(imgCard,spanTitle,spanBalance)
        creditCardContainers[0].removeChild(btnShowInputs[0])
        creditCardContainers[0].classList.add('active')

        const localStorageCard2 = JSON.parse(localStorage.getItem('Cartão 2'))

        const spanTitle2 = document.createElement('span')
        spanTitle2.classList.add('title')
        spanTitle2.textContent = 'Seu saldo'

        const imgCard2 = document.createElement('img')
        imgCard2.setAttribute('src',`${localStorageCard2.model}`)

        const spanBalance2 = document.createElement('span')
        spanBalance2.classList.add('balance')
        spanBalance2.id = 'balance2'
        spanBalance2.textContent= `R$ ${parseFloat(localStorageCard2.limit - localStorage.getItem('Fatura Cartão 2')).toFixed(2)}`

        creditCardContainers[1].append(imgCard2,spanTitle2,spanBalance2)
        creditCardContainers[1].removeChild(btnShowInputs[1])
        creditCardContainers[1].classList.add('active')
      }else if(localStorage.getItem('Cartão 1')){
        const localStorageCard1 = JSON.parse(localStorage.getItem('Cartão 1'))

        const spanTitle = document.createElement('span')
        spanTitle.classList.add('title')
        spanTitle.textContent = 'Seu saldo'

        const imgCard = document.createElement('img')
        imgCard.setAttribute('src',`${localStorageCard1.model}`)

        const spanBalance = document.createElement('span')
        spanBalance.classList.add('balance')
        spanBalance.id = 'balance1'
        spanBalance.textContent= `R$ ${parseFloat(localStorageCard1.limit - localStorage.getItem('Fatura Cartão 2')).toFixed(2)}`

        creditCardContainers[0].append(imgCard,spanTitle,spanBalance)
        creditCardContainers[0].removeChild(btnShowInputs[0])
        creditCardContainers[0].classList.add('active')
      }
      else{
        console.log('cartões nao existe')
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
const obj = localStorage.getItem('Usuarios')
let objReal = JSON.parse(obj)
const main = document.querySelector('main')
const inputsRadios = document.querySelectorAll('input[type="radio"]')
const regex = objReal.nome.replace(/(?<=\s)\w{1,}/g,"")
let progressBar = document.querySelector('.circular-progress')
let valueContainer = document.querySelector('.value-container')
let text = valueContainer.querySelector('p')
const saldos = document.querySelectorAll('.saldo')
const msg = document.querySelector('.msg span')
const valor = document.querySelector('.valor')
const valorRegex = valor.innerText.replace(/[R$\s]/g,'')
const salario = objReal.salario
const after = document.styleSheets[0].cssRules[29]
console.log(after)


saldos.forEach((saldo)=>{
const saldoNumb = parseFloat(saldo.innerText.replace(/[R$\s]/g,''))
if(saldoNumb<10){
saldo.style.color = '#f00' 
}else if(saldoNumb<40){
saldo.style.color = '#EBFF00' 
}else if(saldoNumb<250){
saldo.style.color = '#9EEF41' 
}
})

let progressValue = 0 
let progressEndValue = 0
let speed = 10

let progress = setInterval(()=>{
  progressValue++;
  if(valueContainer.innerText === 'Seu score esta normal'){
  progressBar.style.background = `conic-gradient(
  #fb8500 ${progressValue * 3.6}deg,
  #E2E1E3 ${progressValue*3.6}deg 
  )`;
  text.style.color = '#fb8500'
  progressEndValue = 25
  if(progressValue === progressEndValue){
    clearInterval(progress)
  }  
  }else if(valueContainer.innerText === 'Seu score esta ruim'){
    progressBar.style.background = `conic-gradient(
      #d00000 ${progressValue * 3.6}deg,
      #E2E1E3 ${progressValue*3.6}deg 
     )`;
     text.style.color = '#d00000'
      progressEndValue = 10
      if(progressValue === progressEndValue){
        clearInterval(progress)
      } 
  }else if(valueContainer.innerText === 'Seu score esta bom'){
    progressBar.style.background = `conic-gradient(
      #4d5bf9 ${progressValue * 3.6}deg,
      #E2E1E3 ${progressValue*3.6}deg 
     )`;
     text.style.color = '#4d5bf9'
      progressEndValue = 50
      if(progressValue === progressEndValue){
        clearInterval(progress)
      } 
  }else if(valueContainer.innerText === 'Seu score esta excelente'){
    progressBar.style.background = `conic-gradient(
      #9EEF41 ${progressValue * 3.6}deg,
      #E2E1E3 ${progressValue*3.6}deg 
     )`;
     text.style.color = '#9EEF41'
      progressEndValue = 100
      if(progressValue === progressEndValue){
        clearInterval(progress)
      }
  }
},speed)

function hello(){
 const sayHello = document.querySelector('h1') 
 const date =  new Date()
 const hours = date.getHours()
 if(hours>6 && hours<13){
  sayHello.innerText = `Bom dia ${regex}`
 }else if(hours>13 && hours<=18){
  sayHello.innerText = `Boa tarde ${regex}`
  sayHello.style.width = 300+'px'
 }else{
  sayHello.innerText = `Boa noite ${regex}`
  sayHello.style.width = 300+'px'
 }
}

function logout(ev){
  ev.preventDefault();
  objReal.logado = false
  localStorage.setItem('Usuarios',JSON.stringify(objReal))
  setTimeout(()=>{
  alert('Você foi desconectado')
  window.location.href = 'http://127.0.0.1:5500/Pages/login/login.html'
  },1000)
}




const logoutBtn = document.querySelector('.avatar p')
logoutBtn.addEventListener('click',logout)


function avatarImg(){
const img = this.files[0]
const reader = new FileReader()
reader.onload = ()=>{
  const imgUrl = reader.result
  objReal.avatar = imgUrl
  objReal.salario = 3800.00
  localStorage.setItem('Usuarios',JSON.stringify(objReal))
}
reader.readAsDataURL(img)
}

window.onload = ()=>{
  if(objReal.avatar){
    const avatar = document.querySelector('#avatar')
    avatarInput.previousElementSibling.style.zIndex =0
    avatar.style.zIndex = 1000
    avatar.setAttribute('src',objReal.avatar)
  }else{
    console.log('Perfil sem foto')
  }

}

function operations(){
  const valorEmPorcentagem = valorRegex/salario*100
  const valorAjustado = valorEmPorcentagem.toFixed(2)
  
  if(valorEmPorcentagem<75){
  valor.style.color = '#9EEF41'
  msg.innerText = `${valorAjustado}% de seu salario mensal`
  msg.style.color = '#9EEF41'
  after.style.setProperty('width',`${valorEmPorcentagem}`+ '%')
  after.style.setProperty('background-color', '#9EEF41')
  msg.nextElementSibling.setAttribute('src','../../Assets/Svgs/thumb_up_FILL0_wght400_GRAD0_opsz48.svg')
  }else{
  valor.style.color = '#f00'
  msg.innerText = `${valorAjustado}% de seu salario mensal`
  msg.style.color = '#f00'
  after.style.setProperty('width',`${valorEmPorcentagem}`+ '%')
  after.style.setProperty('background-color', '#f00')
  msg.nextElementSibling.setAttribute('src','../../Assets/Svgs/SVGRepo_iconCarrier.svg')
  }
  }
  
  operations()

const avatar = document.querySelector('#avatar') 
avatar.addEventListener('click',function(){
  avatar.parentElement.firstElementChild.style.zIndex = 1000
  avatar.style.zIndex = 0
})
const avatarInput = document.querySelector('#avatarInput')
avatarInput.addEventListener('change',avatarImg)

hello();
const obj = localStorage.getItem('Usuarios')
let objReal = JSON.parse(obj)
const main = document.querySelector('main')
const inputs = document.querySelector('.inputs')
const inputsRadios = document.querySelectorAll('input[type="radio"]')
const regex = objReal.nome.replace(/(?<=\s)\w{1,}/g,"")


function hello(){
 const sayHello = document.querySelector('h1') 
 const date =  new Date()
 const hours = date.getHours()
 const minutes = date.getMinutes()
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
inputs.style.display = 'block'
function checkInput(ev){
if(ev.currentTarget.id === 'saldo'){
document.querySelector('.saldo').style.display = 'block'
document.querySelector('.operacao').style.display = 'none'
document.querySelector('.investimento').style.display = 'none'
document.querySelector('.cartao').style.display = 'none'
document.querySelector('.budget').style.display = 'none'
}else if(ev.currentTarget.id === 'cartao'){
document.querySelector('.cartao').style.display = 'block'
document.querySelector('.operacao').style.display = 'none'
document.querySelector('.investimento').style.display = 'none'
document.querySelector('.saldo').style.display = 'none'
document.querySelector('.budget').style.display = 'none'
}
else if(ev.currentTarget.id === 'operacao'){
  document.querySelector('.operacao').style.display = 'block'
  document.querySelector('.saldo').style.display = 'none'
  document.querySelector('.investimento').style.display = 'none'
  document.querySelector('.cartao').style.display = 'none'
  document.querySelector('.budget').style.display = 'none'
}
else if(ev.currentTarget.id === 'budget'){
  document.querySelector('.budget').style.display = 'block'
  document.querySelector('.operacao').style.display = 'none'
  document.querySelector('.saldo').style.display = 'none'
  document.querySelector('.investimento').style.display = 'none'
  document.querySelector('.cartao').style.display = 'none'
}
else{
  document.querySelector('.investimento').style.display = 'block'
  document.querySelector('.operacao').style.display = 'none'
  document.querySelector('.saldo').style.display = 'none'
  document.querySelector('.cartao').style.display = 'none'
  document.querySelector('.budget').style.display = 'none'

}
}

inputsRadios.forEach((input)=>{
  input.addEventListener('click',checkInput)
})

const logoutBtn = document.querySelector('.avatar p')
logoutBtn.addEventListener('click',logout)
const btns = document.querySelectorAll('button')
btns.forEach((btn)=>{
  btn.addEventListener('click',(ev)=>{
  ev.preventDefault()
    if(btn.id==='saldo'){
    document.querySelector('.container-saldo').style.display = 'block'
    document.querySelector('#saldo-conta').innerText = `R$ ${document.querySelector('#valorDeSaldo').value}`
    }else if(btn.id==='budget'){
    document.querySelector('.container-investimentos').style.display = 'block'
    document.querySelector('.container-investimentos span').innerText = `Valor para investimento R$ ${document.querySelector('#valorParaInvestimento').value}`
    }else if(btn.id ==='cartao'){
    const containerCartoes = document.querySelector('.container-cartoes')
    containerCartoes.style.display = 'grid'
    const divCartao = document.createElement('div')
    divCartao.classList.add('container-cartao')
    const spanNome = document.createElement('span')
    spanNome.classList.add('nome')
    spanNome.innerText = `${document.querySelector('#nomeCartao').value}`
    const img = document.createElement('img')
    img.setAttribute('src','../../Assets/Svgs/credit-card-svgrepo-com (2).svg')
    const spanText = document.createElement('span')
    spanText.classList.add('text')
    spanText.innerText = 'Seu saldo'
    const spanSaldo = document.createElement('span')
    spanSaldo.classList.add('saldo')
    spanSaldo.innerText = `R$ ${document.querySelector('#saldoCartao').value}`
    containerCartoes.appendChild(divCartao)
    divCartao.append(spanNome,img,spanText,spanSaldo)
    document.querySelector('#saldoCartao').value = ''  
    document.querySelector('#nomeCartao').value = ''
    }
  })
})

function avatarImg(){
const img = this.files[0]

const reader = new FileReader()
reader.onload = ()=>{
  const imgUrl = reader.result
  objReal.avatar = imgUrl
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

const avatar = document.querySelector('#avatar') 
avatar.addEventListener('click',function(){
  avatar.parentElement.firstElementChild.style.zIndex = 1000
  avatar.style.zIndex = 0
})
const avatarInput = document.querySelector('#avatarInput')
avatarInput.addEventListener('change',avatarImg)

hello();
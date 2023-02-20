
const favorito = document.querySelectorAll('.favorito')
const favoritoHeader = document.querySelectorAll('.icons-header')

function favoritar(event){
  const pai = event.currentTarget.parentElement
  const h3 = pai.querySelector('h3')
  event.currentTarget.classList.toggle('heart')
   alert(`${h3.innerText} foi adicionado a sua lista de favoritos`)
 
}

favorito.forEach((item)=>{
item.addEventListener('click',favoritar)

})


const linkInterno = document.querySelectorAll('.js-scroll a[href^="#"]')
function scrollInternoSuave(event){
event.preventDefault();
const href  = event.currentTarget.getAttribute('href')
const section = document.querySelector(href)
section.scrollIntoView({
  behavior:'smooth',
  block:'start',
})
}
linkInterno.forEach((link)=>{
 link.addEventListener('click',scrollInternoSuave) 
})

const rating = document.querySelectorAll('.rating .star')  

function ratingClick(event){
 event.currentTarget.classList.toggle('favorite')
}
rating.forEach((item)=>{
  item.addEventListener('click',ratingClick)
})


function comprarItem(event){
event.preventDefault();
const produto = event.currentTarget.parentElement
const nomeProduto = produto.querySelector('h3')
const preco = produto.querySelector('p')
alert(`O produto ${nomeProduto.innerText} de preço ${preco.innerText} foi adicionado ao seu carrinho `)
}
const buy = document.querySelectorAll('.carrinho')
buy.forEach((item)=>{
  item.addEventListener('click', comprarItem)
})


  const menuMobile = document.querySelector('.menu')
  const menuList = document.querySelector('.nav-list')
  function OpenMenu(){
    menuMobile.classList.toggle('ativo')
    menuList.classList.toggle('ativo')
  }
menuMobile.addEventListener('click',OpenMenu)













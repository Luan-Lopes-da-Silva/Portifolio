export default function showMenu(){
let menuIcon = document.querySelector('#iconMenu')
const ulTarget = document.querySelector('#second')
console.log(menuIcon.getAttribute('src'))

function showOrHide(){
if(ulTarget.classList.contains('desativo')){
  ulTarget.classList.remove('desativo')
  ulTarget.classList.add('ativo')
  menuIcon.setAttribute('src','../../../Assets/Svgs/close_FILL0_wght400_GRAD0_opsz48.svg')
}else{
  ulTarget.classList.remove('ativo')
  ulTarget.classList.add('desativo')
  menuIcon.setAttribute('src','../../../Assets/Svgs/menu_FILL0_wght400_GRAD0_opsz48.svg')
}
}
menuIcon.addEventListener('click',showOrHide)
}
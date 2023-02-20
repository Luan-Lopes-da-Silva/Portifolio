export default function menuMobile(){
  const menuMobile = document.querySelector('.menu')
  const menuList = document.querySelector('.nav-list')
  function OpenMenu(){
    menuMobile.classList.toggle('ativo')
    menuList.classList.toggle('ativo')
  }
menuMobile.addEventListener('click',OpenMenu)
}


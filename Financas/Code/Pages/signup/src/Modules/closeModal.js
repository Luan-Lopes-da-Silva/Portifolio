const closeIcon = document.querySelector('#closeIcon')
const modal = document.querySelector('.register')
const main = document.querySelector('main')

export default function closeModal(){
  function close(){
  modal.classList.remove('active')
  main.classList.remove('active')
  }
  closeIcon.addEventListener('click',close)
}
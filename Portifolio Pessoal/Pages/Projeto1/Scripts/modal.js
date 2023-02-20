export default function modal(){
 const imgPrincipal = document.querySelector('.principal img')
 const modal = document.querySelector('.modal')
 const main = document.querySelector('.projeto-portifolio')
 const modalClose = document.querySelector('.close-modal')
 const imgModal = document.querySelector('.modal img')

 
 function zoomImg(){
  let srcImgPrincipal = imgPrincipal.getAttribute('src')
  imgModal.setAttribute('src',srcImgPrincipal)
  modal.style.display = 'block'
  main.classList.add('modal-ativo')
 }

 function zoomOut(){
  modal.style.display = 'none'
  main.classList.remove('modal-ativo')
 }

 imgPrincipal.addEventListener('click',zoomImg)
 modalClose.addEventListener('click',zoomOut)
 imgModal.addEventListener('click',zoomOut)
}
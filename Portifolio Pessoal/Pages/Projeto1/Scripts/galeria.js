export default function galeria(){
  const imgPrincipal = document.querySelector('.principal img')
  const imgsSecundarias = document.querySelectorAll('.secundarias img')
  
  function galeria(event){
  let srcImgPrincipal = imgPrincipal.getAttribute('src')
  let imgClicada = event.currentTarget
  let srcImgClicada = imgClicada.getAttribute('src')
  imgPrincipal.setAttribute('src',srcImgClicada)
  imgClicada.setAttribute('src',srcImgPrincipal)
  }
  
  imgPrincipal.addEventListener('click',galeria)
  imgsSecundarias.forEach((img)=>{
    img.addEventListener('click',galeria)
  })
}
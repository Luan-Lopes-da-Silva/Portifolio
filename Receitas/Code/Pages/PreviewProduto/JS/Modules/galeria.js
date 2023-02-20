
export default function galeria(){
  const principal = document.querySelector('.principal img')
  const secundarias = document.querySelectorAll('.secundarias img')
  const arrayGaleria = Array.from(secundarias)


  function TrocaImagem(event){
 
  const srcThis = this.getAttribute('src')
  const srcPrincipal = principal.getAttribute('src')
  principal.setAttribute('src', srcThis)
  this.setAttribute('src', srcPrincipal)
}

arrayGaleria.forEach((imagem)=>{
  imagem.addEventListener('click',TrocaImagem)
})

}
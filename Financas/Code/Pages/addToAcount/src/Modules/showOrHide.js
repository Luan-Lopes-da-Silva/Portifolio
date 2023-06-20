export function hideContainer(){
  const iconRefence = document.querySelector('.icon')
  const icons = document.querySelectorAll('.icon')
  const srcPrimaryIcon = iconRefence.getAttribute('src')
  
  function showOrHide(ev){
    if(ev.currentTarget.getAttribute('src') === srcPrimaryIcon){
     ev.currentTarget.setAttribute('src','https://cdn.lordicon.com/xsdtfyne.json')
     ev.currentTarget.parentElement.classList.add('ativo')
     ev.currentTarget.parentElement.classList.remove('desativo')
    }else{
    ev.currentTarget.setAttribute('src', srcPrimaryIcon)
    ev.currentTarget.parentElement.classList.add('desativo')
    ev.currentTarget.parentElement.classList.remove('ativo')
    }
  }
  
  icons.forEach((icon)=>{
    icon.addEventListener('click',showOrHide)
  })
}

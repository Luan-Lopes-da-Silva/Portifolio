import { render } from "../Pages/addToAcount/src/Modules/renderContainer"
import { operationsControl } from "../Pages/home/src/modules/controlOperation"


export function Avatar(){
  const obj = localStorage.getItem('Usuarios')
  let realObj = JSON.parse(obj)
  
  function avatarImg(){
    const img = this.files[0]
    const reader = new FileReader()
    reader.onload = ()=>{
      const imgUrl = reader.result
      realObj.avatar = imgUrl
      realObj.salario = 3800.00
      localStorage.setItem('Usuarios',JSON.stringify(realObj))
    }
    reader.readAsDataURL(img)
    }
    
    window.onload = ()=>{
      if(realObj.avatar){
        const avatar = document.querySelector('#avatar')
        avatarInput.previousElementSibling.style.zIndex =0
        avatar.style.zIndex = 1000
        avatar.setAttribute('src',realObj.avatar)
      }else{
        console.log('Perfil sem foto')
      }
      operationsControl()
    }

  const avatar = document.querySelector('#avatar') 
  avatar.addEventListener('click',function(){
  avatar.parentElement.firstElementChild.style.zIndex = 1000
  avatar.style.zIndex = 0
})
const avatarInput = document.querySelector('#avatarInput')
avatarInput.addEventListener('change',avatarImg)
}


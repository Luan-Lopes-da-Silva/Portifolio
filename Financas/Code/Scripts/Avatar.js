export default function(){
  const obj = localStorage.getItem('Usuarios')
  let objReal = JSON.parse(obj)
  
  function avatarImg(){
    const img = this.files[0]
    const reader = new FileReader()
    reader.onload = ()=>{
      const imgUrl = reader.result
      objReal.avatar = imgUrl
      objReal.salario = 3800.00
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
}


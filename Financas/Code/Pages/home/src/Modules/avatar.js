export default function(){
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

  avatar.setAttribute('src',realObj.avatar)

  const avatar = document.querySelector('#avatar') 
  avatar.addEventListener('click',function(){
  avatar.parentElement.firstElementChild.style.zIndex = 1000
  avatar.style.zIndex = 0
  })
  const avatarInput = document.querySelector('#avatarInput')
  avatarInput.addEventListener('change',avatarImg)
}


  



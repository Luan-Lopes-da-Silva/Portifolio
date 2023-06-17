export default function(){
  function showPassword(ev){
    if(ev.currentTarget.previousElementSibling.type === 'password'){
      ev.currentTarget.previousElementSibling.type = 'text'
      ev.currentTarget.setAttribute('src','../../../Assets/Svgs/visibility_off_FILL0_wght400_GRAD0_opsz48.svg')
    }else{
      ev.currentTarget.previousElementSibling.type ='password'
      ev.currentTarget.setAttribute('src','../../../Assets/Svgs/visibility_FILL0_wght400_GRAD0_opsz48 (1).svg')
    }
    }
    
    const img1 = document.querySelector('.form .password img')
    img1.addEventListener('click',showPassword)
    const img2 = document.querySelector('#img2')
    img2.addEventListener('click',showPassword)
} 

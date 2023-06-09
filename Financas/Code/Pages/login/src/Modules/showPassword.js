export default function (){
const password = document.querySelector('#password')
let icon = document.querySelector('#showPassword')

function showPassword(){
if(password.type === 'password'){
password.type = 'text'
icon.setAttribute('src','../../Assets/Svgs/visibility_off_FILL0_wght400_GRAD0_opsz48.svg')
}else{
password.type = 'password'
icon.setAttribute('src','../../Assets/Svgs/visibility_FILL0_wght400_GRAD0_opsz48 (1).svg')
}
}

icon.addEventListener('click',showPassword)
}
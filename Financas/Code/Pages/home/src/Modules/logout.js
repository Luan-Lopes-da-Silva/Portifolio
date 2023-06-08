const obj = localStorage.getItem('Usuarios')
let realObj = JSON.parse(obj)

export default function (){
  function logout(ev){
    ev.preventDefault();
    realObj.logado = false
    localStorage.setItem('Usuarios',JSON.stringify(realObj))
    setTimeout(()=>{
    alert('Você foi desconectado')
    window.location.href = 'http://127.0.0.1:5500/Pages/login/login.html'
    },1000)
  }
  const logoutBtn = document.querySelector('.avatar p')
  logoutBtn.addEventListener('click',logout)
}

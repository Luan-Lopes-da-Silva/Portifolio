export function Logout(){
  const obj = localStorage.getItem('Usuarios')
  let realObj = JSON.parse(obj)
  
  function logout(ev){
    ev.preventDefault();
    realObj.logado = false
    localStorage.setItem('Usuarios',JSON.stringify(realObj))
    setTimeout(()=>{
    alert('Você foi desconectado')
    window.location.href = '../../login/dist/login.html'
    },1000)
  }
  const logoutBtn = document.querySelector('.avatar p')
  logoutBtn.addEventListener('click',logout)
}
export default function(){
  const obj = localStorage.getItem('Usuarios')
  let objReal = JSON.parse(obj)
  
  function logout(ev){
    ev.preventDefault();
    objReal.logado = false
    localStorage.setItem('Usuarios',JSON.stringify(objReal))
    setTimeout(()=>{
    alert('Você foi desconectado')
    window.location.href = 'http://127.0.0.1:5500/Pages/login/login.html'
    },1000)
  }
  const logoutBtn = document.querySelector('.avatar p')
  logoutBtn.addEventListener('click',logout)
}
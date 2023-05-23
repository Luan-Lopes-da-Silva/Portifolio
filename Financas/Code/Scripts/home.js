const obj = localStorage.getItem('logado')
const objReal = JSON.parse(obj)
console.log(objReal)

function hello(){
 const sayHello = document.querySelector('h1') 
 const date =  new Date()
 const hours = date.getHours()
 const minutes = date.getMinutes()
 if(hours>6 && hours<13){
  sayHello.innerText = `Bom dia ${objReal.usuario}`
 }else if(hours>13 && hours<=18){
  sayHello.innerText = `Boa tarde ${objReal.usuario}`
  sayHello.style.width = 300+'px'
 }else{
  sayHello.innerText = `Boa noite ${objReal.usuario}`
  sayHello.style.width = 300+'px'
 }
}



hello();
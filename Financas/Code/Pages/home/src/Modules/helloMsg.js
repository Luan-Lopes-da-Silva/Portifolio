const obj = localStorage.getItem('Usuarios')
let realObj = JSON.parse(obj)
const regex = realObj.nome.replace(/(?<=\s)\w{1,}/g,"")

export function helloMsg(){
  const sayHello = document.querySelector('h1') 
  const date =  new Date()
  const hours = date.getHours()
  if(hours>6 && hours<13){
   sayHello.innerText = `Bom dia ${regex}`
  }else if(hours>13 && hours<=18){
   sayHello.innerText = `Boa tarde ${regex}`
   sayHello.style.width = 300+'px'
  }else{
   sayHello.innerText = `Boa noite ${regex}`
   sayHello.style.width = 300+'px'
  }
 }
 
 helloMsg();
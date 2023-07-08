const days = document.querySelectorAll('.date-container div') 
const array = Array.from(days)
const changeContent = Array.from(document.querySelectorAll('.change-content'))
export default function dayProgramation(){
function changeDayProgramation(ev){
const target = ev.currentTarget 
const findItem = changeContent.filter(container=>container.id === target.id)
if(target.id==='1'){
target.classList.add('ativo')
target.nextElementSibling.classList.remove('ativo')
target.nextElementSibling.nextElementSibling.classList.remove('ativo')
changeContent[0].classList.add('ativo')
changeContent[2].classList.remove('ativo')
changeContent[1].classList.remove('ativo')
}else if(target.id==='2'){
  target.previousElementSibling.classList.remove('ativo')
  target.classList.add('ativo')
  target.nextElementSibling.classList.remove('ativo')
  changeContent[0].classList.remove('ativo')
  changeContent[2].classList.remove('ativo')
  changeContent[1].classList.add('ativo')

}else{
  target.previousElementSibling.previousElementSibling.classList.remove('ativo')
  target.previousElementSibling.classList.remove('ativo')
  target.classList.add('ativo')
  changeContent[0].classList.remove('ativo')
  changeContent[1].classList.remove('ativo')
  changeContent[2].classList.add('ativo')
}
}
array.forEach((day)=>{
day.addEventListener('click',changeDayProgramation)  
})
changeContent.forEach((content)=>{
content.classList.remove('ativo')  
})
}
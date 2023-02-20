const arrowsExpanded = document.querySelectorAll('.expanded-arrow')


function showCourse(event){
 const nextElement =  event.currentTarget.parentElement
 const targetArrow = event.currentTarget
 nextElement.classList.toggle('ativo')
 targetArrow.classList.toggle('rotateArrow')
 console.log(targetArrow)
}


arrowsExpanded.forEach((arrow)=>{
arrow.addEventListener('click',showCourse)
})

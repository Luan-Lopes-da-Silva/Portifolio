const commentSpan = document.querySelectorAll('.comment')
const modal = document.querySelectorAll('.modal-comment')
const closeBtn = document.querySelectorAll('.close')
const buttons = document.querySelectorAll('.modal-comment button')
const main = document.querySelector('main')


export default function Comment(){

function createComment(ev){
ev.preventDefault()
const target = ev.currentTarget
const container = target.parentElement.parentElement
const form = container.querySelector('form')
const commentsSection = container.querySelector('#comments')
const h5 = commentsSection.querySelector('#alert')

const commentContainer = document.createElement('div')
commentContainer.classList.add('commentContainer')

const spanName = document.createElement('h4')
spanName.innerText = container.querySelector('#nameComment').value
spanName.classList.add('name')

const spanData = document.createElement('span')
spanData.innerText = `Comentado em: ${new Date().toLocaleString('pt-br')}`
spanData.classList.add('hour')

const spanComment = document.createElement('span')
spanComment.innerText = `
Comentario: ${container.querySelector('#commentMsg').value}
`
spanComment.classList.add('text')

commentContainer.append(spanName,spanComment,spanData)
commentsSection.append(commentContainer)
h5.style.display = 'none'
form.reset()
if(container.id === '1'){
let number = commentSpan[0].parentElement.querySelector('.number')
parseFloat(number.innerText++)
}else if(container.id === '2'){
let number = commentSpan[1].parentElement.querySelector('.number')
parseFloat(number.innerText++)
}else{
let number = commentSpan[2].parentElement.querySelector('.number')
parseFloat(number.innerText++)
}
}

function showModal(ev){
const target = ev.currentTarget
if(target.id==='1'){
modal[0].classList.add('ativo')
}else if(target.id==='2'){
modal[0].classList.remove('ativo')
modal[2].classList.remove('ativo')
modal[1].classList.add('ativo')
}else{
modal[0].classList.remove('ativo')
modal[1].classList.remove('ativo')
modal[2].classList.add('ativo')
}
main.classList.add('blur')
}

function closeModal(ev){
const parent = ev.currentTarget.parentElement
parent.classList.remove('ativo')
main.classList.remove('blur')
}
commentSpan.forEach((comment)=>{
  comment.addEventListener('click',showModal)  
  })
  closeBtn.forEach((close)=>{
    close.addEventListener('click',closeModal)  
    })
  buttons.forEach((button)=>{
  button.addEventListener('click',createComment)  
  })
}



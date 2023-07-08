const commentSpan = document.querySelectorAll('.comment')
const nameInput = document.querySelector('#nameComment')
const messageInput = document.querySelector('#commentMsg')
const commentsArray = []
const containerComments = document.querySelector('#comments')
const opsSpan = document.querySelector('#alert')
const modal = document.querySelector('.modal-comment')
const closeBtn = document.querySelector('.close')
const formModal = modal.querySelector('form')

export default function Comment(){

function createComment(ev){
ev.preventDefault()
const commentContainer = document.querySelector('div')
commentContainer.classList.add('commentContainer')

const spanName = document.createElement('h5')
spanName.innerText = nameInput.value

const spanData = document.createElement('span')
spanData.innerText = `Comentado em: ${new Date().toLocaleString('pt-br')}`

const spanComment = document.createElement('span')
spanComment.innerText = `"${messageInput.value}"`

commentContainer.append(spanName,spanData,spanComment)
containerComments.append(commentContainer)
}

function showModal(){
modal.classList.add('ativo')
}

function closeModal(){
  modal.classList.remove('ativo')
}

commentSpan.forEach((comment)=>{
comment.addEventListener('click',showModal)  
})
closeBtn.addEventListener('click',closeModal)
formModal.addEventListener('submit',createComment)
}
const select = document.querySelector('select')
const options = document.querySelectorAll('option')
const btn = document.querySelector('#btn')
const input = document.querySelector('#nome')
const servicosContainer = document.querySelector('.servicos')
const label = document.querySelector('label')
const servicosItems = document.querySelector('.servicos-container')
const servicoItem = document.querySelectorAll('.servico-item')
const resumoCarteira = document.querySelector('.resumo')



btn.addEventListener('click',function(ev){
ev.preventDefault()
options.forEach(function(option){
  if(option.selected === true){
    const pessoa = {
      nome: input.value,
      usabilidade: option.value
    }
   localStorage.setItem('pessoa',JSON.stringify(pessoa))
   if(pessoa){
    alert('Carteira criada com sucesso')
    const newLabel = document.createElement('label')
    newLabel.innerText = 'Usuario'
    newLabel.setAttribute('for','login')
    const newInput = document.createElement('input')
    newInput.type = 'text'
    newInput.name = 'login'
    newInput.id='login'
    newInput.placeholder = 'Digite seu usuario para ter acesso aos serviços'
    const newButton = document.createElement('button')
    newButton.innerText = 'Iniciar'
    newButton.id = 'iniciar'
    btn.style.display = 'none'
    label.style.display = 'none'
    select.style.display = 'none'
    input.style.display = 'none'
    const valoresArmazenados = JSON.parse(localStorage.getItem('pessoa'))
    newButton.addEventListener('click',function(ev){
    ev.preventDefault();
    if(newInput.value === valoresArmazenados.nome){
     servicosItems.style.display = 'flex'
     newLabel.style.display = 'none'
     newInput.style.display = 'none'
     newButton.style.display = 'none'
    }
    })
    servicosContainer.append(newLabel,newInput,newButton)
   }
  }
})
})

function criarLabel(innerText,attribute1,attributeValue){
const label = document.createElement('label')
label.innerText = innerText
label.setAttribute(attribute1,attributeValue)
}

function criarInput(name,id,placeholder){
const input = document.createElement('input')
input.name = name
input.id = id
input.placeholder= placeholder
}


servicoItem[0].addEventListener('click',function(){
const newH3 = document.createElement('h3')
newH3.innerText = 'Adicionar Passivo'
resumoCarteira.append(newH3)
})
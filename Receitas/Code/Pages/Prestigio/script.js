const copy = document.getElementById('copy')
const clipboard = document.getElementById('clipboard')
const textoCopiado = document.querySelector('.copy-content')

function copiarReceita(){
  copy.value = textoCopiado.innerHTML
  copy.select()
  copy.setSelectionRange(0,9999)
  navigator.clipboard.writeText(textoCopiado.innerText)
  }
clipboard.addEventListener('click', copiarReceita)
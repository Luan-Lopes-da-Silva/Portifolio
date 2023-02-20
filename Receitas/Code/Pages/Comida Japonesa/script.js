const clipboard = document.getElementById("clipboard")
const textoCopiado = document.querySelector(".copy-content")
const copy = document.getElementById("copy")
function copiarReceita(){
  copy.value = textoCopiado.innerText
  copy.select(textoCopiado.value)
  copy.setSelectionRange(0,9999)
  navigator.clipboard.writeText(copy.value)
}

clipboard.addEventListener('click',copiarReceita)
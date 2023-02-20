const textos = document.querySelectorAll('.ingredientes p')
const copy = document.querySelector('#copy')
const clipboard = document.querySelector('#clipboard')

clipboard.addEventListener('click' , function(){
textos.forEach(function(texto){
copy.value = texto.innerText
copy.select(textos.value)
copy.setSelectionRange(0,9999)
navigator.clipboard.writeText(copy.value)
})
})


const cep = document.querySelector('#cep')

cep.addEventListener('change',()=>{
  const cepDigitado = cep.value
  fetch(`https://viacep.com.br/ws/${cepDigitado}/json/`)
 .then(response=>response.json())
 .then(cep => {
  const estado =  document.querySelector('#estado')
  const cidade = document.querySelector('#cidade')
  const rua = document.querySelector('#rua')
  estado.value = cep.uf
  cidade.value = cep.localidade
  rua.value =  cep.logradouro
 })
})
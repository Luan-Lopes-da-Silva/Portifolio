export default function initCarrinho(){



const quantidade = document.querySelector('#quantidade')
const btnCompra = document.querySelector('#btn-compra')
const btnCarrinho = document.querySelector('#btn-carrinho')
let contador = document.querySelector('#contador')


function adicionarAoCarrinho(){

  contador.style.display = "block"
  contador.innerHTML = quantidade.value 
}
btnCarrinho.addEventListener('click',adicionarAoCarrinho)
}
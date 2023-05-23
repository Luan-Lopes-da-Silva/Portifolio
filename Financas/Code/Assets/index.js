const nome = prompt('Qual seu nome?')
let cidades = ''
let contagem = 0
let visitou = prompt('Já visitou alguma cidade?')



while(visitou==='Sim'){
let cidade = prompt('Qual cidade voce visitou?')
cidades+=cidade
contagem++
visitou = prompt('Você visitou mais alguma cidade?')
alert(`O turista ${nome}
       visitou ${contagem} cidade
       foram elas:
       ${cidades}/n
`)
}
// Entrada e Parcelas
const prompt = require('prompt-sync')()


//Entrada

const preco = Number(prompt('Preço da Mercadoria: '))


//Processamento
const parcelas = Math.floor(preco/3)
const entrada = Math.floor(((preco/3))+(preco % 3))


//Saída
console.log( 'Valor de Entrada é:  R$', entrada)
console.log( 'Valor das parcelas é: R$', parcelas)

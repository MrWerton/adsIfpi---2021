//Quantidade de dinheiro gasta
const prompt = require('prompt-sync')()

//entrada

const A = Number(prompt('Determine o número de anos que ele fuma: '))
const B = Number(prompt('Determine o número de cigarro que ele fuma por dia: '))
const C = Number(prompt('Informe o preço da cartela: '))
//Processamento
const r = (C / 20)
const s = (r * B)
const D = (s * 365 * A)





//saída
console.log(' A quantidade de dinheiro gasta é: ', D )
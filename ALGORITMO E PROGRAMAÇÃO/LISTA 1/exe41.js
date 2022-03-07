//Custo de um veículo
const prompt = require('prompt-sync')()

//entrada

const A = Number(prompt('Determine o preço de fábrica do veículo: '))

//Processamento
const custo = (A + (A * 0.28) + (A  * 0.45))

//saída
console.log(' O custo final do veículo será: ', custo )
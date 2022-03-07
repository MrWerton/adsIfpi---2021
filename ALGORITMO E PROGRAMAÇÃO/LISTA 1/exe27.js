//Conversão de tempo
const prompt = require('prompt-sync')()

//entrada
const seg = Number(prompt('Determine uma quantidade de segundos: '))

//Processamento
const cov = (seg / 60)
const cov2 = (seg / 3600)

//saída
console.log('A numero de horas é: ', cov2)
console.log('O número de minutos é: ', cov)
console.log('O número de segundos é: ', seg)
//Conversão de tempo
const prompt = require('prompt-sync')()

//entrada
const h = Number(prompt('Determine uma quantidade de horas: '))

//Processamento
const cov = (h / 24)
const cov2 = (h / 168)

//saída
console.log('A numero de horas é: ', h)
console.log('O número de dias é: ', cov)
console.log('O número de semanas é: ', cov2)
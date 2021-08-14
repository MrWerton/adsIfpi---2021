//Conversão de tempo
const prompt = require('prompt-sync')()

//entrada
const min = Number(prompt('Determine uma quantidade de minutos: '))

//Processamento
const cov = (min / 1440)
const cov2 = (min / 60)

//saída
console.log('A numero de dias é: ', cov)
console.log('O número de horas é: ', cov2)
console.log('O número de minutos é: ', min)
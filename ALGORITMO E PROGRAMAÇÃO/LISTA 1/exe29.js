//Conversão de tempo
const prompt = require('prompt-sync')()

//entrada
const mes = Number(prompt('Determine uma quantidade de meses: '))

//Processamento
const cov = (mes / 12)


//saída
console.log('A numero de anos é: ', cov)
console.log('O número de meses é: ', mes)
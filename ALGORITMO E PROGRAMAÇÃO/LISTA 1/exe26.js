// número de dias e semanas
const prompt = require('prompt-sync')()

//entrada
const d = Number(prompt('Determine o número de dias: '))

//Processamento
const cov = (d / 7);

//saída
console.log('A numero de semanas é: ', cov)
console.log('O número de dias é: ', d)
//Conversão de medidas
const prompt = require('prompt-sync')()

//entrada
const m = Number(prompt('Qual é o valor em m? '))

//Processamento
const cov = (m / 1000);

//saída
console.log('A valor em metros é: ', m)
console.log('A valor em km é: ', cov)

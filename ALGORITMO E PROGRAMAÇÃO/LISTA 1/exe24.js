//Conversão de medidas: m -> cm
const prompt = require('prompt-sync')()

//entrada
const km = Number(prompt('Qual é o valor em m? '))

//Processamento
const cov = (km / 100);

//saída
console.log('A valor em centimentros é: ', cov)

//Conversão de velocidade: km/j -> m/s
const prompt = require('prompt-sync')()

//entrada
const km = Number(prompt('Qual é a velocidade em km/h? '))

//Processamento
const cov = (km / 3.6);

//saída
console.log('A velocidade em m/s é: ', cov)


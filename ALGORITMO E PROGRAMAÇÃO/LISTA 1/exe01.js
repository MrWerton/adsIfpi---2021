//Conversão de velocidade: M/s -> km/h
const prompt = require('prompt-sync')()

//entrada
const metro = Number(prompt('Qual é a velocidade em m/s? '))

//Processamento
const cov = (metro * 3.6);

//saída
console.log('A velocidade em km/h é: ', cov)

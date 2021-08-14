//Conversão de medidas: km -> m
const prompt = require('prompt-sync')()

//entrada
const km = Number(prompt('Qual é o valor em Km? '))

//Processamento
const cov = (km / 1000);

//saída
console.log('A valor em metros é: ', cov)

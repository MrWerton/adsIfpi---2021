//Conversão de moeda: Dólar -> Reais
const prompt = require('prompt-sync')()

//entrada
const dollar = Number(prompt('Qual é o valor em dólar? '))

//Processamento
const cov = (dollar * 5.30 );

//saída
console.log('O valor em reais é: ', cov)

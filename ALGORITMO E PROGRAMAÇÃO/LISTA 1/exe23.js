//Conversão de peso: kg -> g
const prompt = require('prompt-sync')()

//entrada
const KG = Number(prompt('Qual é o valor em Kg? '))

//Processamento
const cov = (KG / 1000);

//saída
console.log('A valor em gramas é: ', cov)
// Aumento do salário
const prompt = require('prompt-sync')()

//Entrada
const valor = Number(prompt('Defina um valor em R$: '))

//Processamento
const cov = (valor - (valor * 0.30))

//saída
console.log('70% do valor em R$ é: ',cov)
// Aumento do salário
const prompt = require('prompt-sync')()

//Entrada
const valor = Number(prompt('Defina um sálario: '))

//Processamento
const cov = (valor * 1.25)

//saída
console.log('O valor do sálario com acrescimo de 25% é: R$',cov)

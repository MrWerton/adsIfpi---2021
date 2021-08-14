// Aumento do salário
const prompt = require('prompt-sync')()

//Entrada
const temp = Number(prompt('Defina uma temperatura em °F: '))


//Processamento
const conv = ( (5 * temp) - 160)/9


//saída
console.log( 'A conversão para °C é: ', conv)
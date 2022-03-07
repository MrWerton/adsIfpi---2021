// Conversão de temperatura
const prompt = require('prompt-sync')()

//Entrada
const temp = Number(prompt('Defina uma temperatura em °C: '))


//Processamento
const conv = ( (9 * temp) + 160)/5


//saída
console.log( 'A conversão para °F é: ', conv)
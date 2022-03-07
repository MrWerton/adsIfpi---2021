// Cumprimento da circuferência
const prompt = require('prompt-sync')()

//Entrada
const raio = Number(prompt('Defina o raio da circuferência: '))


//Processamento
const cumprimento = ( 2 * Math.PI * raio )


//saída
console.log( 'O cumprimento da circuferência é: ', cumprimento)
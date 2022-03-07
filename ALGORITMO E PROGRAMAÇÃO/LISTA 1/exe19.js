// Volume da circuferência
const prompt = require('prompt-sync')()

//Entrada
const raio = Number(prompt('Defina o raio da circuferência: '))


//Processamento
const volume = ( 4 * Math.PI * Math.pow(raio, 3) )/3


//saída
console.log( 'O volume da circuferência é: ', volume)
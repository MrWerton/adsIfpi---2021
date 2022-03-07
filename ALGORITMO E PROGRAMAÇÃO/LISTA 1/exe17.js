// Área do retangulo
const prompt = require('prompt-sync')()

//Entrada
const altura = Number(prompt('Defina a altura de um retangulo: '))
const base = Number(prompt('Defina a base de um retangulo: '))

//Processamento
const area = ((altura * base))


//saída
console.log('A área do retangulo é: ',area)
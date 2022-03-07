// Área do triangulo
const prompt = require('prompt-sync')()

//Entrada
const altura = Number(prompt('Defina a altura de um triangulo: '))
const base = Number(prompt('Defina a base de um triangulo: '))

//Processamento
const area = ((altura * base)/2)


//saída
console.log('A área do triangulo é: ',area)
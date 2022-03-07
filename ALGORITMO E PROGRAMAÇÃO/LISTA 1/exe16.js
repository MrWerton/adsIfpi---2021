// Área do quadrado
const prompt = require('prompt-sync')()

//Entrada
const altura = Number(prompt('Defina o lado de um quadrado: '))


//Processamento
const area = Math.pow(altura,2)


//saída
console.log('A área do quadrado é: ',area)
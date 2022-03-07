//inversão dos números
const prompt = require('prompt-sync')()

//entrada
const numero = Number(prompt('Defina um número com 2 algarismos: '))


//Processamento
const r1 = numero % 10
const ultimo = numero /10
const cov = Math.floor(r1 * 10 + ultimo)



//saída
console.log('A inversão dos dígitos é: ', cov)

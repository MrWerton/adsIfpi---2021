//inversão dos números
const prompt = require('prompt-sync')()

//entrada
const numero = Number(prompt('Defina um número com 3 algarismos: '))





//Processamento
const r1 = Math.floor (numero % 10)
const ultimo = Math.floor (numero / 10)
const r2 = Math.floor (ultimo % 10)
const penultimo = Math.floor( ultimo / 10)
const r3 = Math.floor(penultimo % 10)
const cov = (r1 * 100 + r2 * 10 + penultimo)
const soma = (numero + cov)



//saída
console.log('A inversão dos dígitos é: ', soma)
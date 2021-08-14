//média
const prompt = require('prompt-sync')()

//entrada
const numero = Number(prompt('Defina um número com 3 algarismos: '))






//Processamento
const r1 = Math.floor (numero % 10)
const ultimo = Math.floor (numero / 10)
const r2 = Math.floor (ultimo % 10)
const penultimo = Math.floor( ultimo / 10)
const r3 = Math.floor(penultimo % 10)
const cov = (r1 + r2 + r3)/3



//saída
console.log('A média dos algarismo é: ', cov)
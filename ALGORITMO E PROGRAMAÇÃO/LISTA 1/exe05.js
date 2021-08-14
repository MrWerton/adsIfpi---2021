//Soma dos algarismos:
const prompt = require('prompt-sync')()

//entrada
const numero = Number(prompt('Digite um numero: '))
const r1 = numero % 10
const ultimo = numero / 10
const r2 = ultimo % 10
const penultimo = ultimo / 10
const r3 = penultimo % 10

//Processamento
const soma = Math.floor(r1 + r2 + r3)

//saída
console.log('Poliana, a soma dos algarismo é: ', soma)

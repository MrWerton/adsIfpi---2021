//Soma dos números
const prompt = require('prompt-sync')()

//entrada
const numero = Number(prompt('Digite um numero: '))



//Processamento
const r1 = numero % 10
const ultimo = numero / 10
const r2 = ultimo % 10
const penultimo = ultimo / 10
const r3 = penultimo % 10
const soma1 = Math.floor(r3 + r2 );
const soma2 = Math.round(r2 - r1 );

//saída
console.log('A soma dos 2 primeiros número é: ', soma1)
console.log('A subtração dos 2 últimos números é: ', soma2)



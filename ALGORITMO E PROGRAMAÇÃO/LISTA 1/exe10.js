//Razão entre a Soma e a diferença de dois números
const prompt = require('prompt-sync')()

//entrada
const numero = Number(prompt('Defina um número com 2 algarismos: '))



//Processamento
const r1 = numero % 10
const ultimo = numero / 10
 const cov = Math.floor (ultimo / r1)
 const cov2 = Math.floor (ultimo % r1)




//saída

console.log('O quociente da divisão dos dígitos é: ', cov)
console.log('O resto da divisão dos dígitos é: ', cov2)



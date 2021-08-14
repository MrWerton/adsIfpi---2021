// Valor da expressão
const prompt = require('prompt-sync')()

//entrada

const A = Number(prompt('Determine um primeiro número: '))
const B = Number(prompt('Determine um segundo número: '))
const C = Number(prompt('Determine um terceiro número: '))
//Processamento
const r = Math.pow((A + B),2)
const s = Math.pow((B + C),2)
const D = ((r + s) / 2)





//saída
console.log('O valor da expressão é: ', D )

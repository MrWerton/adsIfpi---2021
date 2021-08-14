//Conversão de tempo
const prompt = require('prompt-sync')()

//entrada
const d = Number(prompt('Determine uma idade em anos: '))
const d1 = Number(prompt('Determine uma idade em meses: '))
const d2 = Number(prompt('Determine uma idade em dias: '))
//Processamento
const r = (d * 365)
const r1 = (d2 * 1)
const r2 = (d1 * 30)





//saída
console.log('A idade em dias é: ', r1 + r + r2 )

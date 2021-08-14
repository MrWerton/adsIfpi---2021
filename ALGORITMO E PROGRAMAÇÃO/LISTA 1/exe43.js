//Valor das variáveis
const prompt = require('prompt-sync')()
//entrada

const A1 = Number(prompt('Determine um valor de a: '))
const B1 = Number(prompt('Determine um valor de b: '))
const C1 = Number(prompt('Determine um valor de c: '))
const D1 = Number(prompt('Determine o ponto d: '))
const E1 = Number(prompt('Determine o ponto e: '))
const F1 = Number(prompt('Determine o ponto f: '))

//Processamento
const x = ( ( (C1*E1) - (B1*F1)) / ( (A1*E1) - (B1*D1) ) )
const y = ( ( (A1*F1) - (C1*D1)) / ( (A1*E1) - (B1*D1) ) )

//saída
console.log(' O valor de x é: ', x )
console.log(' O valor de y é: ', y )
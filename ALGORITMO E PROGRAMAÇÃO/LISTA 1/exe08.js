//Razão entre a Soma e a diferença de dois números
const prompt = require('prompt-sync')()

//entrada
const U = Number(prompt('Defina um primeiro número: '))
const D = Number(prompt('Defina um segundo número: '))


//Processamento
const razao = ((U + D) / (U - D) );


//saída
console.log('A divisão da soma pela diferença dos números é: ', razao)



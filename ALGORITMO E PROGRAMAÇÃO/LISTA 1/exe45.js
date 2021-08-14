// quantidades de cédulas no saque
const prompt = require('prompt-sync')()
//entrada

const valor_sacado = Number(prompt('Valor do saque: '))


//Processamento
const notas250 = Math.trunc(valor_sacado / 250)
const notas100 = Math.trunc((valor_sacado % 250) / 100)
const notas50 = Math.trunc(((valor_sacado % 250) % 100) / (50))
const notas10 =  Math.trunc((valor_sacado % 50) /10)
const notas5 =  Math.trunc((valor_sacado % 10)/5)
const notas2 =  Math.floor((valor_sacado % 5) /2)


console.log( 'Notas de 250R$: ', notas250)
console.log( 'Notas de 100R$: ', notas100)
console.log( 'Notas de 50R$: ', notas50)
console.log( 'Notas de 10R$: ', notas10)
console.log( 'Notas de 5R$: ', notas5)
console.log( 'Notas de 2R$: ', notas2)


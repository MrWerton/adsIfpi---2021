//Quantidade necessária de zinco e cobre para forma o latão.
const prompt = require('prompt-sync')()
//entrada

const latão = Number(prompt('Determine a quantidade de latão em kg: '))


//Processamento
const cobre = ( latão * 0.7 )
const zinco = ( latão * 0.3 )

//saída
console.log(' Quantidade de cobre é: ', cobre, 'kg' )
console.log(' Quantidade de zinco é: ', zinco, 'kg' )
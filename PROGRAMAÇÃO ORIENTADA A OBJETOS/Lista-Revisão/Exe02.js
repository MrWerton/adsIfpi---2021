/*Escreva um programa para converter de dólar para real e exibir para o usuário a
resposta final.*/
const { Numero } = require('./Uteis')

function principal(){
    let VDolar =  Numero('Informe o valor do dolar: ')
    let VReal =  Numero('Informe o valor em real que deseja converter: ')
    console.log(`O valor informado em dolar é: ${converter(VDolar, VReal)}`)
}
const converter =(a,b) => a*b
principal()

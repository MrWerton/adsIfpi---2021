/*Escreva um programa que possua uma variável com um número inteiro e mostre seu
antecessor e sucessor.*/
const { Numero } = require('./Uteis')

function principal(){
  
    let num_Int =  Numero('Informe um número inteiro: ')
    Number.isInteger(num_Int) ? console.log(`${num_Int - 1} e ${num_Int + 1}`) : console.log('O numero informado não é um inteiro')

}
principal()

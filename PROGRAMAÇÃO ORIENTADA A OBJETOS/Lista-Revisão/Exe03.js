/*Escrever um programa que leia três valores inteiros e apresente o menor dos valores
lidos*/

const { Numero } = require('./Uteis')

function principal(){
    let num1 =  Numero('Informe um número: ')
    let num2 =  Numero('Informe outro número: ')
    let num3 =  Numero('Informe main um número: ')
    comparacao(num1, num2, num3)
}
const comparacao =(a,b,c) => {
    if(a < b && a < c){
      console.log(`${a} é o menor número`)
    }else if(b < a && b < c){
      console.log(`${b} é o menor número`)
    }else if(c < a && c < b){
      console.log(`${c} é o menor número`)
    }else {
      console.log(`Não há um menor número`)
    }
}
principal()

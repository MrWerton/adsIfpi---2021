/*Escreva um programa que leia uma sequência de números inteiros terminada por –1 e
imprima na tela a soma e a média aritmética destes números. Obs: o valor –1 é
somente um terminador e não deve ser considerado nos cálculos. */
const { Numero } = require('./Uteis')

function principal(){
  console.log("***** Insira -1 para pausar *****\n")
    let numero = Numero("Informe um número: ")
    let quantidade = 0;
    let soma = 0;
    const pausa = -1;
    while(numero !== pausa){
      soma += numero
      quantidade++
      numero = Numero("Informe um número: ")
    }
    console.log(`A soma é ${soma}`)
    console.log(`A média é ${soma/quantidade}`)
       
}

principal()
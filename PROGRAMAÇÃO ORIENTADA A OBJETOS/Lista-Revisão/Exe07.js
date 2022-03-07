/*Escreva um programa que leia um vetor de 5 posições e apresente-o na tela */

const { Numero } = require('./Uteis')

function principal(){
    let vetor = [];
    for(let i = 0; i < 5; i++){
      vetor[i] = Numero(`Informe um valor do vetor ${i}: `)
    }
    console.log(vetor)
}

principal()

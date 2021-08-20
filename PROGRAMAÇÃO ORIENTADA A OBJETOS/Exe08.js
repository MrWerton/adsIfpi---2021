/*Escreva um programa que leia e mostre um vetor de 20 elementos inteiros. A seguir,
conte quantos valores pares existem
no vetor */
const { Numero } = require('./Uteis')

function principal(){
    let vetor = [];
    let quantidadePar = 0;
    for(let i = 0; i < 5; i++){
      vetor[i] = Numero(`Informe um valor do vetor ${i}: `)
    }
    for(x of vetor){
      if(x % 2 === 0){
        quantidadePar = quantidadePar + 1
      }
    }
    console.log(`A quantidade de numeros pares é: ${quantidadePar}`)
}

principal()
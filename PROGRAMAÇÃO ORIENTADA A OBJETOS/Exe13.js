/*Escreva uma função que dados um inteiro n e um inteiro d, onde 0 < d ≤ 9, devolve
quantas vezes o dígito d aparece no número n. Por exemplo: se n = 7677 e d = 7, a
função deve retornar 3.*/

const { Texto } = require("./Uteis")

function principal(){
    let n = Texto('Informe um número: ')
    let d = Texto('Informe um número entre 0 e 9: ')
    let num = String(n)
    let contador = 0;
    if(d >= 0 && d <= 9){
      for(x of num){
        if(x === d){
          contador++
        }
      }
      console.log(contador)
    }else{
      console.log('O valor de d não está entre 0 e 9 ')
    }
}
principal()
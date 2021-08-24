/*Escreva um programa que leia um texto pelo teclado e remova todas as suas vogais.
Exiba a string resultante */

const { Texto } = require('./Uteis')

function principal(){
  let frase = Texto('Informe um palavra: ')
  let string = ''
  for(x of frase){
    if(!(x == "a" || x == "e" || x == "i" || x == "o" || x == "u" || x == "A" || x == "E" || x == "I" || x == "O" || x == "U")){
      string += x
    }
  }
  console.log(`O resultado do texto é: ${string}`)   
}

principal()

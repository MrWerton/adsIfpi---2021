/*Construir um programa que leia uma string s, e dois caracteres a e b. Em seguida, o
programa deve substituir todas as ocorrências do caractere a na string s pelo caractere
b.*/

const { Texto } = require('./Uteis')

function principal(){
  let frase = Texto('Informe um palavra: ')
  let a = Texto('Informe um charactere: ')
  let b = Texto('Informe outro charactere: ')
  let string = ''
  for(x of frase){
    if(x === a){
      x = b
    }
    string += x
  }
  console.log(`O resultado do texto é: ${string}`)   
}

principal()




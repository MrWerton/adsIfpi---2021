const entrada = require('prompt-sync')()
function principal(){
    // entrada
const frase = entrada('Digite uma palavra: ')
let inverso = ''

for(let i = frase.length - 1; 0 <= i; i--){
    inverso += frase[i]
}
    if(frase == inverso){
    console.log(`A ${frase} é palíndroma`)
    }else{
    console.log(`A ${frase} não é palíndroma`)
    }
    }
principal()
const entrada = require('prompt-sync')({
    sigint: true
})

function principal(){
    //Entrada
    const frase = entrada('Insira uma frase: ')
    //Processamento
    let caractere = 0
    for(let i = 0; i < frase.length; i++){
         caractere = frase[i]
         //saída
         console.log(caractere)
        }


}

principal()
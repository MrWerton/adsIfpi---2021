const entrada = require ('prompt-sync')()

function principal(){
    //Entrada
    const frase = entrada('Intorme uma palavra: ')
    let palavras = frase.split(' ')
    let contador = 0
    //processamento
    for(let i = 0; i < palavras.length; i++){
        contador++
    }
    //Saída
    console.log(contador)
}



principal()

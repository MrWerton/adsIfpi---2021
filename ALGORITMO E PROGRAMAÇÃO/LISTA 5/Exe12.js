const entrada = require ('prompt-sync')()

function principal(){
    //Entrada
    const frase = entrada('Intorme uma palavra: ')
    let palavras = frase.split(' ')
    //processamento
    const ultimo = palavras[palavras.length - 1]
    const inicio = palavras[0]
    // saída
    console.log(`${ultimo}/${inicio}`)

   
  

}



principal()
const entrada = require ('prompt-sync')()

function principal(){
    //Entrada
    const frase = entrada('Intorme uma palavra: ')
    let palavras = frase.split(' ')
    const vetor = Array()
    const ultimo = palavras[palavras.length - 1]
    //processamento
    for(let i = 0; i < palavras.length - 1; i++){
        vetor[i] = palavras[i][0]
    }
   
    const união = vetor.join('. ')
    //saída
    console.log(`${ultimo}, ${união}.`)


}
    

principal()
const entrada = require('prompt-sync')({
    sigint: true
})

function principal(){
    //Entrada
    const frase = entrada('Informe um verbo no infitinivo, terminado em er (Ex.: vencer): ') 
    let caractere_er = frase.split('er')
    let radical = caractere_er[0]
    
    // conjugações
    console.log('### Singular ###')
    let pessoa_S1 = radical + 'o' 
    console.log(`1º Pessoa: (Eu) ${pessoa_S1}`)
    let pessoa_S2 = radical + 'es' 
    console.log(`2º Pessoa: (Tu) ${pessoa_S2}`)
    let pessoa_S3 = radical + 'e' 
    console.log(`3º Pessoa: (Ele) ${pessoa_S3}`)
    console.log('### Plural ###')
    let pessoa_P1 = radical + 'emos' 
    console.log(`1º Pessoa: (Nós) ${pessoa_P1}`)
    let pessoa_P2 = radical + 'eis' 
    console.log(`2º Pessoa: (Vós) ${pessoa_P2}`)
    let pessoa_P3 = radical + 'em' 
    console.log(`3º Pessoa: (Eles) ${pessoa_P3}`)
   

}

principal()
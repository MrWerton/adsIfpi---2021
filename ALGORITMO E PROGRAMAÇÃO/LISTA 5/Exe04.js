const entrada = require('prompt-sync')({
    sigint: true
})

function principal(){
    //Entrada
    const frase = entrada('Insira uma frase: ')
    let caractere = ''
    let duplicação =''


    //Processamento
    for(let i = 0; i < frase.length; i++){

        caractere = frase[i]
        duplicação += caractere + caractere
        //saída
       
    }
    console.log(duplicação)
    

}
principal()

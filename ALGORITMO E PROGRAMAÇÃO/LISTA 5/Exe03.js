const entrada = require('prompt-sync')({
    sigint: true
})

function principal(){
    //Entrada
    const frase = entrada('Insira uma frase: ')
    //Processamento
    let junçao = frase.split(' ') // quebra os espaços

    for(let i = 0; i <= junçao.length; i++){
        junçao[i]
    }
    const juntar = junçao.join('')
    //saída
    console.log(juntar)

}

principal()
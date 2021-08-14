const entrada = require('prompt-sync')({
    sigint: true
})

function principal(){
    const tamanho = Number(entrada('Informe o tamanho do vetor: '))
    let vetor = [tamanho]

    for(let i = 0; i < tamanho; i++){
        vetor[i] = Number(entrada('Informe un elemento: '))
    }
    let maior = 0
    let menor = 0
    for(let i = 0; i< tamanho; i++){
        if(vetor[i] > vetor[maior]){
           maior = i
        }else if(vetor[i] < vetor[menor]){
            menor = i
        }
    }
    console.log(`Maior elemento: ${vetor[maior]} (i: ${maior})`)
    console.log(`Menor elemento: ${vetor[menor]} (i: ${menor})`)
}
principal()
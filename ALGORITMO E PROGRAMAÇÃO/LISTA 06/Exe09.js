const entrada = require('prompt-sync')({
    sigint: true
})

function principal(){
    const tamanho = Number(entrada('Informe o tamanho do vetor: '))
    let vetor = [tamanho]

    for(let i = 0; i < tamanho; i++){
        vetor[i] = Number(entrada('Informe un elemento: '))
    }
    let vetor_atual = 0
    for(let i = 0; i < tamanho; i++){
        for(let j = i+1; j < tamanho; j++)
            if(vetor[i] > vetor[j]){
                vetor_atual = vetor[i]
                vetor[i] = vetor[j]
                vetor[j] = vetor_atual
            }
    }
    console.log(vetor)
   
}
principal()
const entrada = require('prompt-sync')({
    sigint: true
})

function principal(){
    const tamanho = Number(entrada('Informe o tamanho do vetor: '))
    vetor_a = [tamanho]
    vetor_b = [tamanho]

    for(let i = 0; i < tamanho; i++){
        vetor_a[i] = Number(entrada('Informe un elemento: '))
        if(vetor_a[i] % 2 === 0){
            vetor_b[i] = 0
        }else{
            vetor_b[i] = 1
        }
    }
    console.log(vetor_b)
}
principal()
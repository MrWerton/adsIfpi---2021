const entrada = require('prompt-sync')({
    sigint: true
})
    console.log('### Comparação entre números ###')
function principal(){
    // Entrada
    const numero = Number(entrada('Insira um número: '))
    // Processamento
    let num_comparação = 0
    while(numero !== num_comparação){
        num_comparação = Number(entrada('Insira um número: '))
        // saída 1
        console.log(`Os números não são equivalentes`)

    }
    // saída 2
    console.log(`Os números são equivalentes`)

}
principal()
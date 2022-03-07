const entrada = require('prompt-sync')({
    sigint: true
})
    console.log('### Divisão sucessiva por 2 ###')
function principal(){
    // Entrada
    let numero = Number(entrada('Informe um número: '))
    //Processamento
    if(numero !== 0){
        while(numero >= 1)
        numero = numero / 2
        //Saída 1
        console.log(`A última divisão é ${numero}`)
    }else{
        //Saída 2
        console.log('O número informado é inválido')
    }
}
principal()
const entrada = require('prompt-sync')({
    sigint: true
})
    console.log('### Divisão de X por N ###')
function principal(){
    //Entrada
    let numero_x = Number(entrada('Informe um número: '))
    let numero_n = Number(entrada('Informe um segundo número: '))
    // processamento
     if(numero_n !== 2){
    while(numero_n > 2){
        let divisão = numero_x / numero_n
        console.log(`A divisão de ${numero_x} por ${numero_n} é ${divisão}`)
        numero_x = divisão       
        numero_n--
    }
    }else{
        // Saída
        console.log('O valor infornado é inválido')
    }   
}
principal()
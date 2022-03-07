const entrada = require('prompt-sync')({
    sigint: true
})
function principal(){
    // Entrada
    const numero = Number(entrada('Informe um número: '))
    
    //Processamento
    let divisão = numero / 10
    let quantidade = 0
    while(divisão > 0){ // condição para interação acontecer para acontecer
        divisão = Math.floor(divisão)/10
        quantidade++ // sempre que a interação ocorrer, aumenta-se 1 na quantidaed
    }
    quantidade_algarismo(quantidade) // chama a função para a encontrar a quantidade

}

function quantidade_algarismo(a){ // função para saber a quantidade de dígitos.
    if(!(a !== 1)){
        //saída 1
        return console.log(`A quantidade de algarismos é: ${a}`)
    }else{
        //saída 2
        return console.log(`A quantidade de algarismos é: ${a}`)
    }
}
principal()
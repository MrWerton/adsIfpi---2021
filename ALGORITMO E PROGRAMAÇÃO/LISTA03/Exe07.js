const entrada = require('prompt-sync')({
    sigint: true
})
console.log(' ### Soma dos digitos de um número ###')

function principal(){
    //Entrada
    const numero = Number(entrada('Número: '))
    // Processo
    let soma = 0
    for(let i = 1; i < numero; i++){

        soma += i
    }
    soma = soma - 1
    // Saída
    console.log(`A soma no intervalo de 1 a ${numero} é: ${soma}`)

    }
   
principal()
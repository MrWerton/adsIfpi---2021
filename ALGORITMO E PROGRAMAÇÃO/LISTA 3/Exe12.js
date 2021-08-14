const entrada = require('prompt-sync')({
    sigint: true
}
)

function principal(){
    console.log(" Soma e média de N números")
    // entrada
    const N = Number(entrada('Informe a quantidade de números que deseja digitar: '))
    let numero = 0
    let soma = 0
    let media = 0
    //processamento
    for(let i = 1; i <= N; i++){
        numero = Number(entrada('Informe um número: '))
        var sum = soma += numero
        var md = media = soma/i
        
    }
    //Saída
        console.log(`A soma dos numeros é: ${sum}`)
        console.log(`A média dos números é: ${md}`)
    
}
principal()